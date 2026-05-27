"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/components/auth/AuthProvider";
import { useCart } from "@/src/lib/hooks/useCart";
import { addAddress as addAddressApi } from "@/src/lib/services/auth";
import { createOrder } from "@/src/lib/services/orders";
import { formatCurrency } from "@/src/lib/format";
import type { Address } from "@/src/lib/types";

const COUNTRIES = [
  "United Kingdom",
  "United States",
  "France",
  "Italy",
  "Germany",
  "Spain",
  "Switzerland",
  "Other",
];

const inputClass =
  "w-full bg-transparent border-b border-outline/20 focus:border-on-surface pb-2 font-body-md text-body-md text-on-surface placeholder:text-on-surface/30 outline-none transition-colors";

const sectionLabel = "font-label-sm text-[10px] uppercase tracking-widest text-on-surface/40 mb-6";

type NewAddressForm = {
  label: string;
  line1: string;
  city: string;
  postcode: string;
  country: string;
};

const blankAddress: NewAddressForm = {
  label: "Home",
  line1: "",
  city: "",
  postcode: "",
  country: "United Kingdom",
};

export default function CheckoutClient() {
  const router = useRouter();
  const { user, token, updateUser } = useAuth();
  const { cart, isLoading: cartLoading, refreshCart } = useCart();

  const addresses: Address[] = user?.addresses ?? [];

  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    addresses[0]?._id ?? null
  );
  const [addingAddress, setAddingAddress] = useState(addresses.length === 0);
  const [newAddressForm, setNewAddressForm] = useState<NewAddressForm>(blankAddress);
  const [addressSaving, setAddressSaving] = useState(false);
  const [addressError, setAddressError] = useState("");

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [placing, setPlacing] = useState(false);
  const [orderError, setOrderError] = useState("");

  const items = cart?.items ?? [];
  const subtotal = items.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);
  const vat = Math.round(subtotal * 0.2);

  async function handleSaveNewAddress() {
    if (!newAddressForm.line1 || !newAddressForm.city || !newAddressForm.postcode || !newAddressForm.country) {
      setAddressError("All address fields are required");
      return;
    }
    setAddressSaving(true);
    setAddressError("");
    try {
      const res = await addAddressApi(newAddressForm, token!);
      updateUser(res.user);
      const saved = res.user.addresses[res.user.addresses.length - 1];
      setSelectedAddressId(saved._id);
      setAddingAddress(false);
      setNewAddressForm(blankAddress);
    } catch (e: unknown) {
      setAddressError(e instanceof Error ? e.message : "Failed to save address");
    } finally {
      setAddressSaving(false);
    }
  }

  async function handlePlaceOrder() {
    const currentAddresses: Address[] = user?.addresses ?? [];
    const addr =
      selectedAddressId
        ? currentAddresses.find((a) => a._id === selectedAddressId)
        : undefined;

    if (!addr) {
      setOrderError("Please select or add a shipping address");
      return;
    }
    if (items.length === 0) {
      setOrderError("Your cart is empty");
      return;
    }

    setPlacing(true);
    setOrderError("");
    try {
      const res = await createOrder(
        {
          label: addr.label,
          line1: addr.line1,
          city: addr.city,
          postcode: addr.postcode,
          country: addr.country,
        },
        token!
      );
      await refreshCart();
      router.push(`/checkout/confirmation/${res.order._id}`);
    } catch (e: unknown) {
      setOrderError(e instanceof Error ? e.message : "Failed to place order");
      setPlacing(false);
    }
  }

  if (cartLoading && !cart) {
    return (
      <div className="py-40 text-center">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (items.length === 0 && !placing) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-8">
        <span className="material-symbols-outlined text-on-surface/20 text-[64px]">shopping_bag</span>
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40">
          Your cart is empty
        </p>
        <Link
          href="/collections"
          className="px-12 py-4 bg-on-background text-background font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <header className="mb-16 pb-10 border-b border-outline/10">
        <p className={sectionLabel}>BANC Horology</p>
        <h1 className="font-headline-lg text-headline-lg uppercase leading-none">Checkout</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
        {/* ── Left: Form ── */}
        <div className="lg:col-span-7 space-y-14">

          {/* Delivery */}
          <section>
            <p className={sectionLabel}>01 — Delivery Address</p>

            {/* Saved addresses */}
            {(user?.addresses ?? []).length > 0 && (
              <div className="space-y-3 mb-6">
                {(user?.addresses ?? []).map((addr) => (
                  <button
                    key={addr._id}
                    onClick={() => {
                      setSelectedAddressId(addr._id);
                      setAddingAddress(false);
                    }}
                    className={`w-full text-left border p-5 transition-colors duration-200 ${
                      selectedAddressId === addr._id && !addingAddress
                        ? "border-on-surface bg-surface-container-lowest"
                        : "border-outline/20 hover:border-outline/50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/40 mb-2">
                          {addr.label}
                        </p>
                        <p className="font-body-md text-body-md text-on-surface/80">{addr.line1}</p>
                        <p className="font-body-md text-body-md text-on-surface/60">
                          {addr.city}, {addr.postcode}
                        </p>
                        <p className="font-body-md text-body-md text-on-surface/60">{addr.country}</p>
                      </div>
                      <span
                        className={`mt-1 w-4 h-4 rounded-full border flex-shrink-0 transition-colors ${
                          selectedAddressId === addr._id && !addingAddress
                            ? "border-on-surface bg-on-surface"
                            : "border-outline/30"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Add new address toggle */}
            {!addingAddress ? (
              <button
                onClick={() => { setAddingAddress(true); setSelectedAddressId(null); }}
                className="flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                Add New Address
              </button>
            ) : (
              <div className="border border-outline/20 bg-surface-container-lowest p-6 md:p-8 space-y-5 mt-2">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40">
                  New Address
                </p>
                <div className="flex gap-2">
                  {["Home", "Office", "Other"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setNewAddressForm((f) => ({ ...f, label: l }))}
                      className={`px-4 py-1.5 font-label-sm text-[10px] uppercase tracking-widest border transition-colors ${
                        newAddressForm.label === l
                          ? "border-on-surface text-on-surface bg-on-surface/5"
                          : "border-outline/20 text-on-surface/40 hover:border-on-surface/40"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <input
                  value={newAddressForm.line1}
                  onChange={(e) => setNewAddressForm((f) => ({ ...f, line1: e.target.value }))}
                  placeholder="Street Address"
                  className={inputClass}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    value={newAddressForm.city}
                    onChange={(e) => setNewAddressForm((f) => ({ ...f, city: e.target.value }))}
                    placeholder="City"
                    className={inputClass}
                  />
                  <input
                    value={newAddressForm.postcode}
                    onChange={(e) => setNewAddressForm((f) => ({ ...f, postcode: e.target.value }))}
                    placeholder="Postcode"
                    className={inputClass}
                  />
                </div>
                <select
                  value={newAddressForm.country}
                  onChange={(e) => setNewAddressForm((f) => ({ ...f, country: e.target.value }))}
                  className="w-full bg-transparent border-b border-outline/20 focus:border-on-surface pb-2 font-body-md text-body-md text-on-surface outline-none transition-colors cursor-pointer"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c} className="bg-background">{c}</option>
                  ))}
                </select>
                {addressError && (
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-red-400">{addressError}</p>
                )}
                <div className="flex gap-4 pt-1">
                  <button
                    onClick={handleSaveNewAddress}
                    disabled={addressSaving}
                    className="px-8 py-3 bg-on-surface text-background font-label-sm text-label-sm uppercase tracking-widest hover:opacity-80 transition-opacity disabled:opacity-40"
                  >
                    {addressSaving ? "Saving..." : "Save & Select"}
                  </button>
                  {(user?.addresses ?? []).length > 0 && (
                    <button
                      onClick={() => {
                        setAddingAddress(false);
                        setSelectedAddressId(user?.addresses[0]?._id ?? null);
                        setAddressError("");
                      }}
                      className="px-8 py-3 border border-outline/30 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:border-on-surface hover:text-on-surface transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* Shipping method */}
          <section>
            <p className={sectionLabel}>02 — Shipping Method</p>
            <div className="border border-on-surface bg-surface-container-lowest p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-4 h-4 rounded-full bg-on-surface flex-shrink-0" />
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest">Complimentary Express</p>
                  <p className="font-body-md text-body-md text-on-surface/50 mt-0.5">
                    Delivered within 2–5 business days
                  </p>
                </div>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60">Free</span>
            </div>
          </section>

          {/* Payment */}
          <section>
            <p className={sectionLabel}>03 — Payment Details</p>
            <div className="space-y-6">
              <div>
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                  Cardholder Name
                </p>
                <input
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder="As it appears on card"
                  className={inputClass}
                  autoComplete="cc-name"
                />
              </div>
              <div>
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                  Card Number
                </p>
                <input
                  value={cardNumber}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "").substring(0, 16);
                    setCardNumber(v.replace(/(.{4})/g, "$1 ").trim());
                  }}
                  placeholder="0000 0000 0000 0000"
                  className={inputClass}
                  autoComplete="cc-number"
                  inputMode="numeric"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                    Expiry
                  </p>
                  <input
                    value={expiry}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").substring(0, 4);
                      setExpiry(v.length > 2 ? `${v.slice(0, 2)}/${v.slice(2)}` : v);
                    }}
                    placeholder="MM / YY"
                    className={inputClass}
                    autoComplete="cc-exp"
                    inputMode="numeric"
                  />
                </div>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                    CVV
                  </p>
                  <input
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").substring(0, 4))}
                    placeholder="•••"
                    className={inputClass}
                    autoComplete="cc-csc"
                    inputMode="numeric"
                    type="password"
                  />
                </div>
              </div>
              <p className="font-label-sm text-[9px] uppercase tracking-widest text-on-surface/25 flex items-center gap-2">
                <span className="material-symbols-outlined text-[12px]">lock</span>
                Secured with 256-bit SSL encryption
              </p>
            </div>
          </section>
        </div>

        {/* ── Right: Order Summary ── */}
        <aside className="lg:col-span-5">
          <div className="sticky top-40 border border-outline/10 bg-surface-container-lowest p-8 md:p-10">
            <h2 className="font-headline-md text-headline-md uppercase mb-8">Order Summary</h2>

            <div className="space-y-6 mb-10 max-h-80 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.productId._id} className="flex gap-4 items-center">
                  <div className="w-16 h-20 bg-surface-container overflow-hidden flex-shrink-0">
                    <Image
                      src={item.productId.images[0] || "/next.svg"}
                      alt={item.productId.name}
                      width={64}
                      height={80}
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-label-sm text-label-sm uppercase tracking-widest leading-snug truncate">
                      {item.productId.name}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/50 mt-1">
                      Qty {item.quantity}
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm tracking-widest text-on-surface/70 shrink-0">
                    {formatCurrency(item.productId.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-outline/10 pt-8 space-y-4 mb-8">
              <div className="flex justify-between font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50">
                <span>VAT (Included)</span>
                <span>{formatCurrency(vat)}</span>
              </div>
            </div>

            <div className="border-t border-outline/20 pt-8 mb-10">
              <div className="flex justify-between items-baseline">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.3em]">Total</span>
                <span className="font-headline-md text-headline-md">{formatCurrency(subtotal)}</span>
              </div>
            </div>

            {orderError && (
              <p className="font-label-sm text-[10px] uppercase tracking-widest text-red-400 mb-4">
                {orderError}
              </p>
            )}

            <button
              onClick={handlePlaceOrder}
              disabled={placing || items.length === 0}
              className="w-full bg-on-surface text-background font-label-sm text-label-sm uppercase py-5 tracking-[0.2em] hover:opacity-80 transition-opacity duration-300 disabled:opacity-40"
            >
              {placing ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="inline-block w-3 h-3 border border-background border-t-transparent rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                "Complete Purchase"
              )}
            </button>

            <p className="text-center font-label-sm text-[9px] uppercase tracking-widest text-on-surface/25 mt-4">
              By completing your purchase you agree to our{" "}
              <Link href="/about" className="underline underline-offset-2 hover:text-on-surface/50 transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

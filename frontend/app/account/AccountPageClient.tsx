"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProtectedRoute from "@/app/components/auth/ProtectedRoute";
import { useAuth } from "@/app/components/auth/AuthProvider";
import {
  updateProfile as updateProfileApi,
  addAddress as addAddressApi,
  deleteAddress as deleteAddressApi,
  updateAddress as updateAddressApi,
} from "@/src/lib/services/auth";
import { getMyOrders } from "@/src/lib/services/orders";
import { formatCurrency } from "@/src/lib/format";
import type { Address, Order } from "@/src/lib/types";

type Tab = "profile" | "orders";

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
  "w-full bg-transparent border-b border-outline/20 focus:border-on-surface pb-2 font-body-md text-body-md text-on-surface placeholder:text-on-surface/20 outline-none transition-colors";

function ConciergeSection() {
  return (
    <section className="border-t border-outline/10 pt-10">
      <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-6">
        BANC Concierge
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline/10">
        {[
          { label: "Private Consultation", icon: "phone_in_talk" },
          { label: "Bespoke Commission", icon: "edit" },
          { label: "After-Sale Service", icon: "build" },
        ].map(({ label, icon }) => (
          <button
            key={label}
            className="bg-background flex items-center gap-4 px-6 py-6 text-left hover:bg-surface-container transition-colors group"
          >
            <span className="material-symbols-outlined text-on-surface/30 group-hover:text-on-surface/60 transition-colors">
              {icon}
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50 group-hover:text-on-surface transition-colors">
              {label}
            </span>
            <span className="material-symbols-outlined text-on-surface/20 group-hover:text-on-surface/50 transition-colors ml-auto text-[14px]">
              arrow_forward
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProfileTab() {
  const { user, token, updateUser, logout } = useAuth();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [saving, setSaving] = useState(false);
  const [profileError, setProfileError] = useState("");

  const [addingAddress, setAddingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState({
    label: "Home",
    line1: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
  });
  const [addressSaving, setAddressSaving] = useState(false);
  const [addressError, setAddressError] = useState("");

  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    label: "Home",
    line1: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
  });
  const [editSaving, setEditSaving] = useState(false);
  const [editError, setEditError] = useState("");

  if (!user) return null;

  const memberSince = new Date(user.createdAt).getFullYear();
  const tier = user.role === "admin" ? "Admin Tier" : "Titanium Tier";

  async function handleSaveProfile() {
    if (!name.trim() || name.trim().length < 2) {
      setProfileError("Name must be at least 2 characters");
      return;
    }
    setSaving(true);
    setProfileError("");
    try {
      const res = await updateProfileApi(name.trim(), token!);
      updateUser(res.user);
      setEditing(false);
    } catch (e: unknown) {
      setProfileError(e instanceof Error ? e.message : "Failed to update profile");
    } finally {
      setSaving(false);
    }
  }

  function cancelEdit() {
    setEditing(false);
    setName(user!.name);
    setProfileError("");
  }

  async function handleAddAddress() {
    if (!addressForm.line1 || !addressForm.city || !addressForm.postcode || !addressForm.country) {
      setAddressError("All fields are required");
      return;
    }
    setAddressSaving(true);
    setAddressError("");
    try {
      const res = await addAddressApi(addressForm, token!);
      updateUser(res.user);
      setAddingAddress(false);
      setAddressForm({ label: "Home", line1: "", city: "", postcode: "", country: "United Kingdom" });
    } catch (e: unknown) {
      setAddressError(e instanceof Error ? e.message : "Failed to add address");
    } finally {
      setAddressSaving(false);
    }
  }

  function cancelAddAddress() {
    setAddingAddress(false);
    setAddressError("");
    setAddressForm({ label: "Home", line1: "", city: "", postcode: "", country: "United Kingdom" });
  }

  async function handleDeleteAddress(addressId: string) {
    try {
      const res = await deleteAddressApi(addressId, token!);
      updateUser(res.user);
    } catch {
      // no-op
    }
  }

  function startEditAddress(addr: Address) {
    setEditingAddressId(addr._id);
    setEditForm({ label: addr.label, line1: addr.line1, city: addr.city, postcode: addr.postcode, country: addr.country });
    setEditError("");
  }

  function cancelEditAddress() {
    setEditingAddressId(null);
    setEditError("");
  }

  async function handleUpdateAddress() {
    if (!editForm.line1 || !editForm.city || !editForm.postcode || !editForm.country) {
      setEditError("All fields are required");
      return;
    }
    setEditSaving(true);
    setEditError("");
    try {
      const res = await updateAddressApi(editingAddressId!, editForm, token!);
      updateUser(res.user);
      setEditingAddressId(null);
    } catch (e: unknown) {
      setEditError(e instanceof Error ? e.message : "Failed to update address");
    } finally {
      setEditSaving(false);
    }
  }

  return (
    <div className="space-y-12">
      {/* Personal Details */}
      <section className="border border-outline/10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 min-w-0">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-8">
              Personal Details
            </p>

            {editing ? (
              <div className="space-y-6">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                    Name
                  </p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleSaveProfile(); }}
                    className="w-full bg-transparent border-b border-outline/30 focus:border-on-surface pb-2 font-headline-md text-headline-md uppercase outline-none transition-colors"
                    autoFocus
                  />
                </div>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                    Email
                  </p>
                  <p className="font-body-md text-body-md text-on-surface/40">{user.email}</p>
                  <p className="font-label-sm text-[9px] uppercase tracking-widest text-on-surface/20 mt-1">
                    Email cannot be changed
                  </p>
                </div>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                    Member Since
                  </p>
                  <p className="font-body-md text-body-md text-on-surface/40">{memberSince}</p>
                </div>
                {profileError && (
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-red-400">
                    {profileError}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                    Name
                  </p>
                  <p className="font-headline-md text-headline-md uppercase">{user.name}</p>
                </div>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                    Email
                  </p>
                  <p className="font-body-md text-body-md text-on-surface/70">{user.email}</p>
                </div>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                    Member Since
                  </p>
                  <p className="font-body-md text-body-md text-on-surface/70">{memberSince}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 md:items-end md:justify-end shrink-0">
            {editing ? (
              <>
                <button
                  onClick={handleSaveProfile}
                  disabled={saving}
                  className="px-8 py-3 bg-on-surface text-background font-label-sm text-label-sm uppercase tracking-widest hover:opacity-80 transition-opacity duration-300 disabled:opacity-40 whitespace-nowrap"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-8 py-3 border border-outline/30 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:text-on-surface hover:border-on-surface transition-colors duration-300 whitespace-nowrap"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setEditing(true); setName(user.name); }}
                  className="px-8 py-3 border border-on-surface font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-surface hover:text-background transition-colors duration-300 whitespace-nowrap"
                >
                  Edit Profile
                </button>
                <button
                  onClick={logout}
                  className="px-8 py-3 border border-outline/30 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:text-on-surface hover:border-on-surface transition-colors duration-300 whitespace-nowrap"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Addresses */}
      <section className="border border-outline/10 p-8 md:p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--color-on-surface) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-8">
            Addresses
          </p>

          {/* Saved address cards */}
          {user.addresses && user.addresses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {user.addresses.map((addr: Address) =>
                editingAddressId === addr._id ? (
                  /* ── Inline edit form ── */
                  <div key={addr._id} className="border border-outline/30 bg-surface-container-lowest p-6 space-y-4">
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/40 mb-2">
                      Edit Address
                    </p>
                    <div className="flex gap-2">
                      {["Home", "Office", "Other"].map((l) => (
                        <button
                          key={l}
                          onClick={() => setEditForm((f) => ({ ...f, label: l }))}
                          className={`px-4 py-1.5 font-label-sm text-[10px] uppercase tracking-widest border transition-colors ${
                            editForm.label === l
                              ? "border-on-surface text-on-surface bg-on-surface/5"
                              : "border-outline/20 text-on-surface/40 hover:border-on-surface/40"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                    <input
                      value={editForm.line1}
                      onChange={(e) => setEditForm((f) => ({ ...f, line1: e.target.value }))}
                      placeholder="Street Address"
                      className={inputClass}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        value={editForm.city}
                        onChange={(e) => setEditForm((f) => ({ ...f, city: e.target.value }))}
                        placeholder="City"
                        className={inputClass}
                      />
                      <input
                        value={editForm.postcode}
                        onChange={(e) => setEditForm((f) => ({ ...f, postcode: e.target.value }))}
                        placeholder="Postcode"
                        className={inputClass}
                      />
                    </div>
                    <select
                      value={editForm.country}
                      onChange={(e) => setEditForm((f) => ({ ...f, country: e.target.value }))}
                      className="w-full bg-transparent border-b border-outline/20 focus:border-on-surface pb-2 font-body-md text-body-md text-on-surface outline-none transition-colors cursor-pointer"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c} className="bg-background">{c}</option>
                      ))}
                    </select>
                    {editError && (
                      <p className="font-label-sm text-[10px] uppercase tracking-widest text-red-400">{editError}</p>
                    )}
                    <div className="flex gap-3 pt-1">
                      <button
                        onClick={handleUpdateAddress}
                        disabled={editSaving}
                        className="px-6 py-2 bg-on-surface text-background font-label-sm text-[10px] uppercase tracking-widest hover:opacity-80 transition-opacity disabled:opacity-40"
                      >
                        {editSaving ? "Saving..." : "Save"}
                      </button>
                      <button
                        onClick={cancelEditAddress}
                        className="px-6 py-2 border border-outline/30 font-label-sm text-[10px] uppercase tracking-widest text-on-surface/50 hover:border-on-surface hover:text-on-surface transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(addr._id)}
                        className="ml-auto px-6 py-2 border border-red-400/30 font-label-sm text-[10px] uppercase tracking-widest text-red-400/60 hover:border-red-400 hover:text-red-400 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ── Address card ── */
                  <div
                    key={addr._id}
                    className="border border-outline/10 bg-background p-6 relative group"
                  >
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/40 mb-3">
                      {addr.label}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/80">{addr.line1}</p>
                    <p className="font-body-md text-body-md text-on-surface/60">
                      {addr.city}, {addr.postcode}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/60">{addr.country}</p>
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEditAddress(addr)}
                        className="text-on-surface/30 hover:text-on-surface transition-colors"
                        aria-label="Edit address"
                      >
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteAddress(addr._id)}
                        className="text-on-surface/30 hover:text-red-400 transition-colors"
                        aria-label="Remove address"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* Empty state */}
          {(!user.addresses || user.addresses.length === 0) && !addingAddress && (
            <div className="py-10 text-center mb-6">
              <p className="font-headline-md text-headline-md uppercase text-on-surface/20 mb-3">
                No Addresses Saved
              </p>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30">
                Add a delivery address to streamline your acquisitions
              </p>
            </div>
          )}

          {/* Add address form */}
          {addingAddress ? (
            <div className="border border-outline/20 bg-surface-container-lowest p-6 md:p-8 space-y-6 mt-2">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40">
                New Address
              </p>

              {/* Label toggle */}
              <div>
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-3">
                  Label
                </p>
                <div className="flex gap-2">
                  {["Home", "Office", "Other"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setAddressForm((f) => ({ ...f, label: l }))}
                      className={`px-5 py-2 font-label-sm text-[10px] uppercase tracking-widest border transition-colors ${
                        addressForm.label === l
                          ? "border-on-surface text-on-surface bg-on-surface/5"
                          : "border-outline/20 text-on-surface/40 hover:border-on-surface/40"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                  Street Address
                </p>
                <input
                  value={addressForm.line1}
                  onChange={(e) => setAddressForm((f) => ({ ...f, line1: e.target.value }))}
                  placeholder="123 Example Street"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                    City
                  </p>
                  <input
                    value={addressForm.city}
                    onChange={(e) => setAddressForm((f) => ({ ...f, city: e.target.value }))}
                    placeholder="London"
                    className={inputClass}
                  />
                </div>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                    Postcode
                  </p>
                  <input
                    value={addressForm.postcode}
                    onChange={(e) => setAddressForm((f) => ({ ...f, postcode: e.target.value }))}
                    placeholder="SW1A 1AA"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-2">
                  Country
                </p>
                <select
                  value={addressForm.country}
                  onChange={(e) => setAddressForm((f) => ({ ...f, country: e.target.value }))}
                  className="w-full bg-transparent border-b border-outline/20 focus:border-on-surface pb-2 font-body-md text-body-md text-on-surface outline-none transition-colors cursor-pointer"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c} className="bg-background">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {addressError && (
                <p className="font-label-sm text-[10px] uppercase tracking-widest text-red-400">
                  {addressError}
                </p>
              )}

              <div className="flex gap-4 pt-2">
                <button
                  onClick={handleAddAddress}
                  disabled={addressSaving}
                  className="px-8 py-3 bg-on-surface text-background font-label-sm text-label-sm uppercase tracking-widest hover:opacity-80 transition-opacity disabled:opacity-40"
                >
                  {addressSaving ? "Saving..." : "Save Address"}
                </button>
                <button
                  onClick={cancelAddAddress}
                  className="px-8 py-3 border border-outline/30 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:border-on-surface hover:text-on-surface transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setAddingAddress(true)}
              className="flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 hover:text-on-surface transition-colors mt-2"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              Add Address
            </button>
          )}
        </div>
      </section>

      {/* Tier Banner */}
      <section className="relative overflow-hidden h-64 md:h-80 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_bormymPfAoYsg7QVCtKGzPuDCxi56PnqRv1-0_y2cZEQ7iI3hX2sOnl0i_rVnQVQqDX4ScF3bgLTlfI6drsg_aR_UnbncUYs3e8Zp3PCzP7qTq2aGhNXL4DgUK7znfKtVzWGdtAhYHHb-0eBkwXoreeYuRYbVXgaGo21y-5mQ5JG-Vgu_jK9e0jr5ZvRhIs7ZnZwMSREIAyETcfI6pIuXOr3BR5IM22k4PXsy7xlwW3UR7VlvGmPHWk00TI1cTSxDbNrcbO2f8"
            alt="BANC membership tier"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 p-8 md:p-12 w-full">
          <span className="inline-block px-3 py-1 border border-primary/60 font-label-sm text-[10px] uppercase tracking-widest text-on-surface mb-3">
            {tier}
          </span>
          <p className="font-headline-lg text-headline-lg uppercase leading-none text-on-surface">
            Your Membership
          </p>
        </div>
      </section>

      <ConciergeSection />
    </div>
  );
}

function OrdersTab() {
  const { token } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    getMyOrders(token)
      .then((res) => setOrders(res.orders))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div className="space-y-12">
      <div>
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-4">
          Your Acquisitions
        </p>
        <h2 className="font-headline-lg text-headline-lg uppercase leading-none">The Vault</h2>
      </div>

      {loading ? (
        <div className="border border-outline/10 py-24 text-center">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 animate-pulse">
            Loading...
          </p>
        </div>
      ) : orders.length === 0 ? (
        <div className="border border-outline/10 py-32 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--color-on-surface) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10">
            <p className="font-headline-md text-headline-md uppercase text-on-surface/20 mb-4">
              The Vault is Empty
            </p>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 mb-10">
              Your acquisitions will appear here
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-widest border-b border-on-surface/30 pb-1 hover:border-on-surface text-on-surface/60 hover:text-on-surface transition-colors"
            >
              Browse Collection
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Link
              key={order._id}
              href={`/checkout/confirmation/${order._id}`}
              className="block border border-outline/10 hover:border-outline/30 bg-surface-container-lowest hover:bg-surface-container transition-colors duration-200 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                    Order Reference
                  </p>
                  <p className="font-headline-md text-headline-md uppercase tracking-widest">
                    {order.orderNumber}
                  </p>
                </div>
                <div className="flex items-center gap-6 md:text-right">
                  <div>
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                      Date
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/60">
                      {new Date(order.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                      Total
                    </p>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest">
                      {formatCurrency(order.total)}
                    </p>
                  </div>
                  <span className="px-3 py-1 border border-primary/40 font-label-sm text-[10px] uppercase tracking-widest text-on-surface/60 hidden md:inline-block">
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="border-t border-outline/10 pt-4 space-y-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-on-surface/60">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest truncate mr-4">
                      {item.name}
                    </span>
                    <span className="font-body-md text-body-md shrink-0">× {item.quantity}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}

      <ConciergeSection />
    </div>
  );
}

export default function AccountPageClient() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      {/* Header */}
      <header className="mb-16 pb-10 border-b border-outline/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-4">
              BANC Horology — Member
            </p>
            <h1 className="font-headline-lg text-headline-lg uppercase leading-none">
              {user?.name ?? ""}
            </h1>
          </div>
          <span className="shrink-0 px-4 py-2 border border-primary/40 font-label-sm text-[10px] uppercase tracking-widest text-on-surface/60">
            {user?.role === "admin" ? "Admin Tier" : "Titanium Tier"}
          </span>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-outline/10 mb-16">
        {(["profile", "orders"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest border-b-2 -mb-px transition-colors duration-200 ${
              activeTab === tab
                ? "border-on-surface text-on-surface"
                : "border-transparent text-on-surface/40 hover:text-on-surface/70"
            }`}
          >
            {tab === "profile" ? "Profile" : "Orders"}
          </button>
        ))}
      </div>

      {activeTab === "profile" ? <ProfileTab /> : <OrdersTab />}
    </ProtectedRoute>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/components/auth/AuthProvider";
import { apiRequest } from "@/src/lib/api";
import { formatCurrency } from "@/src/lib/format";

type AdminCartItem = {
  productId: string | null;
  name: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
  lineTotal: number;
};

type AdminCart = {
  cartId: string;
  user: { id: string; name: string; email: string } | null;
  items: AdminCartItem[];
  subtotal: number;
  itemCount: number;
  updatedAt: string;
  createdAt: string;
};

type AdminCartsResponse = {
  count: number;
  carts: AdminCart[];
};

const label = "font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30";
const value = "font-body-md text-body-md text-on-surface/80";

export default function AdminCartsClient() {
  const router = useRouter();
  const { user, token, isHydrated, isAuthenticated } = useAuth();

  const [carts, setCarts] = useState<AdminCart[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Guard: not authenticated → login, not admin → home
  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) { router.replace("/login"); return; }
    if (user?.role !== "admin") { router.replace("/"); return; }
  }, [isHydrated, isAuthenticated, user, router]);

  useEffect(() => {
    if (!token || user?.role !== "admin") return;
    apiRequest<AdminCartsResponse>("/admin/carts", { method: "GET", token })
      .then((res) => { setCarts(res.carts); setCount(res.count); })
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "Failed to load carts"))
      .finally(() => setLoading(false));
  }, [token, user]);

  if (!isHydrated || !isAuthenticated || user?.role !== "admin") {
    return (
      <p className="py-20 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30">
        Authenticating...
      </p>
    );
  }

  return (
    <div>
      {/* Header */}
      <header className="mb-16 pb-10 border-b border-outline/10">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-4">
          Admin — BANC Horology
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="font-headline-lg text-headline-lg uppercase leading-none">
            Cart Viewer
          </h1>
          {!loading && !error && (
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40">
              {count} active cart{count !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </header>

      {/* Loading */}
      {loading && (
        <div className="py-32 text-center">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 animate-pulse">
            Fetching carts...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="py-20 border border-red-400/20 bg-red-400/5 px-8 text-center">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-red-400">
            {error}
          </p>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && carts.length === 0 && (
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
            <p className="font-headline-md text-headline-md uppercase text-on-surface/20 mb-3">
              No Active Carts
            </p>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30">
              All user carts are currently empty
            </p>
          </div>
        </div>
      )}

      {/* Cart list */}
      {!loading && !error && carts.length > 0 && (
        <div className="space-y-6">
          {carts.map((cart) => (
            <div
              key={cart.cartId}
              className="border border-outline/10 hover:border-outline/25 transition-colors duration-200 bg-surface-container-lowest"
            >
              {/* Cart header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-8 py-6 border-b border-outline/10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* User */}
                  <div>
                    <p className={label}>Customer</p>
                    {cart.user ? (
                      <>
                        <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mt-1">
                          {cart.user.name}
                        </p>
                        <p className={`${value} text-on-surface/50 text-[13px]`}>
                          {cart.user.email}
                        </p>
                      </>
                    ) : (
                      <p className={value}>Unknown user</p>
                    )}
                  </div>

                  <div className="hidden sm:block w-px h-10 bg-outline/10" />

                  {/* Item count */}
                  <div>
                    <p className={label}>Items</p>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mt-1">
                      {cart.itemCount}
                    </p>
                  </div>

                  <div className="hidden sm:block w-px h-10 bg-outline/10" />

                  {/* Subtotal */}
                  <div>
                    <p className={label}>Subtotal</p>
                    <p className="font-headline-md text-headline-md mt-1">
                      {formatCurrency(cart.subtotal)}
                    </p>
                  </div>
                </div>

                {/* Last updated */}
                <div className="text-left md:text-right">
                  <p className={label}>Last Updated</p>
                  <p className={`${value} mt-1`}>
                    {new Date(cart.updatedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30">
                    {new Date(cart.updatedAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="divide-y divide-outline/10">
                {cart.items.map((item, i) => (
                  <div
                    key={`${cart.cartId}-${i}`}
                    className="flex items-center gap-5 px-8 py-5"
                  >
                    {/* Thumbnail */}
                    <div className="w-12 h-14 bg-surface-container shrink-0 overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={56}
                          className="w-full h-full object-cover grayscale opacity-70"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-container" />
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="font-label-sm text-label-sm uppercase tracking-widest truncate">
                        {item.name}
                      </p>
                      <p className={`${label} mt-0.5`}>
                        {formatCurrency(item.price)} each
                      </p>
                    </div>

                    {/* Qty */}
                    <div className="text-right shrink-0">
                      <p className={label}>Qty</p>
                      <p className="font-label-sm text-label-sm uppercase tracking-widest mt-0.5">
                        {String(item.quantity).padStart(2, "0")}
                      </p>
                    </div>

                    {/* Line total */}
                    <div className="text-right shrink-0 w-24">
                      <p className={label}>Total</p>
                      <p className="font-label-sm text-label-sm tracking-widest mt-0.5">
                        {formatCurrency(item.lineTotal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

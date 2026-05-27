"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuth } from "@/app/components/auth/AuthProvider";
import { getOrderById } from "@/src/lib/services/orders";
import { formatCurrency } from "@/src/lib/format";
import type { Order } from "@/src/lib/types";

export default function ConfirmationClient() {
  const params = useParams<{ orderId: string }>();
  const { token } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !params.orderId) return;
    getOrderById(params.orderId, token)
      .then((res) => setOrder(res.order))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token, params.orderId]);

  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp2V1F9fqtL1nFkEk0sTdU5gvSO3MlE7-sWMD2nCGfkAVhzn8MKbJHM3Kt_n0OtbhL3MkIlRwc7YAQF0XLW7BkG5eNGKTv7NnlG0n-7LE3p3hJ-SxdVfA2H73s7VBjGXq2p_lXFx-KJRFvqPXrZw2HHgF3DgJxd9c0KWkJXCkzOvVkL4MvYqbWSSFjyM9-8XHfFEbhJYrWGwD5TBIhQUMfbbAaTVlHBxJwPHY4fqD1B4JqvicB3BcOV')",
        }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-40">
        {loading ? (
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 animate-pulse">
            Loading...
          </p>
        ) : (
          <div className="w-full max-w-2xl">
            {/* Animated checkmark */}
            <div className="flex justify-center mb-12">
              <svg
                viewBox="0 0 80 80"
                className="w-20 h-20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-on-surface/20"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="226"
                  strokeDashoffset="0"
                  className="text-on-surface animate-[dash_1s_ease-out_forwards]"
                  style={{ strokeDashoffset: 226, animation: "dash 1s ease-out 0.2s forwards" }}
                />
                <polyline
                  points="24,42 36,54 56,30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="50"
                  strokeDashoffset="0"
                  className="text-on-surface"
                  style={{ strokeDashoffset: 50, animation: "dash 0.6s ease-out 0.9s forwards" }}
                />
              </svg>
            </div>

            <style>{`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
            `}</style>

            {/* Status chip */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-primary/40 font-label-sm text-[10px] uppercase tracking-widest text-on-surface/60">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Order Verified
              </span>
            </div>

            <div className="text-center mb-14">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40 mb-4">
                BANC Horology
              </p>
              <h1 className="font-headline-lg text-headline-lg uppercase leading-none mb-4">
                Purchase Complete
              </h1>
              <p className="font-body-md text-body-md text-on-surface/60">
                Your timepiece has been reserved. A confirmation has been noted in your account.
              </p>
            </div>

            {order && (
              <div className="border border-outline/10 bg-surface-container-lowest/50 backdrop-blur-sm p-8 md:p-10 mb-10 space-y-6">
                <div className="flex justify-between items-center border-b border-outline/10 pb-6">
                  <div>
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                      Order Reference
                    </p>
                    <p className="font-headline-md text-headline-md uppercase tracking-widest">
                      {order.orderNumber}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-1">
                      Status
                    </p>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                      {order.status}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-baseline">
                      <div>
                        <p className="font-label-sm text-label-sm uppercase tracking-widest">
                          {item.name}
                        </p>
                        <p className="font-body-md text-body-md text-on-surface/50 mt-0.5">
                          Qty {item.quantity}
                        </p>
                      </div>
                      <span className="font-label-sm text-label-sm tracking-widest text-on-surface/70">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-outline/10 pt-6 flex justify-between items-baseline">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.3em]">Total</span>
                  <span className="font-headline-md text-headline-md">{formatCurrency(order.total)}</span>
                </div>

                {order.shippingAddress && (
                  <div className="border-t border-outline/10 pt-6">
                    <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/30 mb-3">
                      Delivery Address
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/70">
                      {order.shippingAddress.line1}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/60">
                      {order.shippingAddress.city}, {order.shippingAddress.postcode}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface/60">
                      {order.shippingAddress.country}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/account"
                className="px-10 py-4 bg-on-surface text-background font-label-sm text-label-sm uppercase tracking-widest text-center hover:opacity-80 transition-opacity"
              >
                View My Collection
              </Link>
              <Link
                href="/collections"
                className="px-10 py-4 border border-outline/30 font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:text-on-surface hover:border-on-surface text-center transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

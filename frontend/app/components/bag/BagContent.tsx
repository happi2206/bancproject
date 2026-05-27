"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/src/lib/hooks/useCart";
import { formatCurrency } from "@/src/lib/format";
import BagSkeleton from "@/app/components/bag/BagSkeleton";

export default function BagContent() {
  const { cart, isLoading, error, updateQuantity, removeItem, clearCart } = useCart();

  const items = cart?.items ?? [];
  const subtotal = items.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);
  const vat = Math.round(subtotal * 0.2);

  if (isLoading && !cart) {
    return <BagSkeleton />;
  }

  if (error) {
    return <p className="py-20 text-red-400">{error}</p>;
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-8">
        <span className="material-symbols-outlined text-on-surface/20 text-[64px]">shopping_bag</span>
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/40">Your cart is empty</p>
        <Link href="/collections" className="px-12 py-4 bg-on-background text-background font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <section className="lg:col-span-8 space-y-12">
        {items.map((item) => (
          <div key={item.productId._id} className="flex gap-6 md:gap-8 items-start border-b border-outline/10 pb-12">
            <Link href={`/product/${item.productId._id}`} className="w-1/3 shrink-0 aspect-[4/5] bg-surface-container-low overflow-hidden block">
              <Image
                src={item.productId.images[0] || "/next.svg"}
                alt={item.productId.name}
                width={300}
                height={375}
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </Link>

            <div className="flex-1 flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-headline-md text-headline-md uppercase">{item.productId.name}</h2>
                  <span className="font-label-sm text-label-sm tracking-widest text-on-surface/80 ml-4 shrink-0">
                    {formatCurrency(item.productId.price * item.quantity)}
                  </span>
                </div>
                <p className="font-body-md text-body-md italic text-on-surface/60 mb-6">{item.productId.category}</p>
              </div>

              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-5 border border-outline/20 px-4 py-2">
                  <button onClick={() => updateQuantity(item.productId._id, Math.max(0, item.quantity - 1))} className="hover:text-primary transition-colors" aria-label="Decrease quantity">
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="font-label-sm text-label-sm w-6 text-center">{String(item.quantity).padStart(2, "0")}</span>
                  <button onClick={() => updateQuantity(item.productId._id, item.quantity + 1)} className="hover:text-primary transition-colors" aria-label="Increase quantity">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
                <button onClick={() => removeItem(item.productId._id)} className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface/40 hover:text-error transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <aside className="lg:col-span-4">
        <div className="sticky top-40 bg-surface-container-lowest p-8 md:p-10 border border-outline/10">
          <h3 className="font-headline-md text-headline-md uppercase mb-8">Summary</h3>
          <div className="space-y-5 mb-10">
            <div className="flex justify-between font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60"><span>Shipping</span><span>Complimentary</span></div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60"><span>VAT (Included)</span><span>{formatCurrency(vat)}</span></div>
          </div>
          <div className="border-t border-outline/20 pt-8 mb-10">
            <div className="flex justify-between items-baseline">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.3em]">Total</span>
              <span className="font-headline-md text-headline-md">{formatCurrency(subtotal)}</span>
            </div>
          </div>
          <div className="space-y-4">
            <Link href="/checkout" className="block w-full bg-on-background text-background font-label-sm text-label-sm uppercase py-5 tracking-[0.2em] hover:bg-primary transition-colors duration-500 text-center">Proceed to Checkout</Link>
            <button onClick={clearCart} className="w-full border border-outline/20 text-on-surface font-label-sm text-label-sm uppercase py-4 tracking-[0.2em] hover:bg-surface-container transition-colors duration-300">Clear Cart</button>
          </div>
        </div>
      </aside>
    </div>
  );
}

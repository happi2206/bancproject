export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex h-16">
      <button className="flex-1 bg-surface-container flex items-center justify-center font-label-sm text-label-sm uppercase tracking-widest text-on-surface hover:bg-surface-container-high transition-colors duration-300">
        Wishlist
      </button>
      <button className="flex-1 bg-on-background text-background flex items-center justify-center font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300">
        Add to Bag
      </button>
    </div>
  );
}

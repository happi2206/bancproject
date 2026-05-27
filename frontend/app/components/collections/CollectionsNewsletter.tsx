export default function CollectionsNewsletter() {
  return (
    <section className="border-t border-outline/10 py-[120px] flex flex-col items-center text-center">
      <h2 className="font-headline-lg text-headline-lg uppercase mb-6">
        Stay Synchronized
      </h2>
      <p className="font-body-lg text-body-lg max-w-xl mb-12 text-on-surface/60 italic leading-relaxed">
        Receive early access to limited edition releases and horological
        insights from the Milan manufacture.
      </p>
      <div className="w-full max-w-md">
        <div className="relative border-b border-outline/40">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full bg-transparent py-4 font-label-sm text-label-sm tracking-widest focus:outline-none focus:border-primary transition-colors text-center uppercase placeholder:text-on-surface/30"
          />
        </div>
        <button className="mt-8 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:text-on-surface transition-colors duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
}

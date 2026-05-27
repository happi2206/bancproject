import Link from "next/link";

const exploreLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Craftsmanship", href: "/about#craftsmanship" },
  { label: "Heritage", href: "/about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/about" },
  { label: "Terms of Service", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-max-width mx-auto items-start mb-16">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="font-headline-lg text-headline-lg text-on-surface mb-6 leading-none">
            BANC
          </div>
          <p className="font-body-md text-body-md text-on-surface/40 leading-relaxed max-w-xs">
            High-fashion horology designed and manufactured with architectural
            rigor in the heart of Milan.
          </p>
        </div>

        {/* Explore */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 mb-2">
            Explore
          </span>
          {exploreLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50 hover:text-on-surface transition-colors duration-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 mb-2">
            Legal
          </span>
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50 hover:text-on-surface transition-colors duration-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30 mb-2">
            Newsletter
          </span>
          <div className="relative w-full border-b border-outline/30 pb-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent border-none focus:ring-0 w-full font-label-sm text-label-sm uppercase tracking-widest text-on-surface placeholder:text-on-surface/20 outline-none pr-8"
            />
            <button className="absolute right-0 bottom-2" aria-label="Subscribe">
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline/5 gap-4">
        <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface/40">
          © 2024 BANC Horology. Manufactured in Milan.
        </p>
        <div className="flex gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span className="material-symbols-outlined text-[18px] text-on-surface/40 hover:text-on-surface transition-colors duration-300 cursor-pointer">
              photo_camera
            </span>
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
            <span className="material-symbols-outlined text-[18px] text-on-surface/40 hover:text-on-surface transition-colors duration-300 cursor-pointer">
              play_circle
            </span>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
            <span className="material-symbols-outlined text-[18px] text-on-surface/40 hover:text-on-surface transition-colors duration-300 cursor-pointer">
              public
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

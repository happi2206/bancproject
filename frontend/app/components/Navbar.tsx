"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useAuth } from "./auth/AuthProvider";

const NAV_LINKS = ["Collections", "Mens", "Womens", "Journal"] as const;
type NavLink = (typeof NAV_LINKS)[number];

type NavItem = { label: string; href: string };
type LinkGroup = { heading: string; links: NavItem[] };
type MenuData = {
  href: string;
  col1: LinkGroup[];
  col2: LinkGroup[];
  thumbnail: { src: string; alt: string; caption: string; href: string };
  featured: {
    src: string;
    alt: string;
    badge: string;
    title: string;
    desc: string;
    cta: string;
    href: string;
  };
};

// Sub-links shown in mobile accordion
const MOBILE_SUB_LINKS: Record<NavLink, NavItem[]> = {
  Collections: [
    { label: "Monolith v.1", href: "/product/monolith-v1" },
    { label: "Noir Concept 01", href: "/product/noir-concept-01" },
    { label: "Obsidian GMT", href: "/product/obsidian-gmt" },
    { label: "Heritage Skeleton", href: "/product/heritage-skeleton" },
    { label: "View All", href: "/collections" },
  ],
  Mens: [
    { label: "Titan Abyss", href: "/product/titan-abyss" },
    { label: "Dark Matter Chrono", href: "/product/dark-matter-chrono" },
    { label: "Monolith v.1", href: "/product/monolith-v1" },
    { label: "Prism Gold", href: "/product/prism-gold" },
    { label: "View All", href: "/collections" },
  ],
  Womens: [
    { label: "Aureum Pillar", href: "/product/aureum-pillar" },
    { label: "Prism Gold", href: "/product/prism-gold" },
    { label: "Monolith Automatic", href: "/product/monolith-automatic" },
    { label: "Structure No. 9", href: "/product/structure-no-9" },
    { label: "View All", href: "/collections" },
  ],
  Journal: [
    { label: "About BANC", href: "/about" },
    { label: "Craftsmanship", href: "/about#craftsmanship" },
  ],
};

const MENU_DATA: Record<NavLink, MenuData> = {
  Collections: {
    href: "/collections",
    col1: [
      {
        heading: "By Product",
        links: [
          { label: "Monolith v.1", href: "/product/monolith-v1" },
          { label: "Noir Concept 01", href: "/product/noir-concept-01" },
          { label: "Obsidian GMT", href: "/product/obsidian-gmt" },
          { label: "Heritage Skeleton", href: "/product/heritage-skeleton" },
          { label: "View All", href: "/collections" },
        ],
      },
      {
        heading: "Materials",
        links: [
          { label: "Forged Carbon", href: "/collections" },
          { label: "Brushed Steel", href: "/collections" },
          { label: "Rose Gold", href: "/collections" },
        ],
      },
    ],
    col2: [
      {
        heading: "Highlights",
        links: [
          { label: "New Arrivals", href: "/collections" },
          { label: "Bestsellers", href: "/collections" },
          { label: "Iconic Pieces", href: "/collections" },
          { label: "Limited Editions", href: "/collections" },
        ],
      },
      {
        heading: "Inside BANC",
        links: [
          { label: "Manufacture", href: "/collections" },
          { label: "Milan Studio", href: "/collections" },
          { label: "Sustainability", href: "/collections" },
        ],
      },
    ],
    thumbnail: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFXvMpPIMcZ5fjMheQ2epyPCoQGPdlte0MKS4uI-ZPdS7OrbCxdUmeNO0jflx1h4swO1aHc5QZzu0J61E0i4wuGl-O32wukccMCZauUSxC468s-gzLmsODJo1N3QBIyEkr3DECwDKbjrhWvZwJlhUOiIZZC7u5XjdIBYHtx4poBj8kglqS7_7_ZJZGFXdUJv8SU9Lr2TNcPYn9a7OeEQmZj6Fr-s4UQNPnyKrV-KoGxqKdJsMciJO207eOqHvFmnWzCt-OgHmCHt4",
      alt: "A macro close-up of a luxury watch dial with intricate gold gears and matte black finish",
      caption: "Heritage Series",
      href: "/collections",
    },
    featured: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzfB2tscMpuQnN_4ICA74xBzrzEyQ9WttM98PJVNywv8QuUDaBwsDtAMhmxVLtg6Z0EyeUjprqEMz8Fa4Bt_RpcPTalOpC7pjnP6reiefn-Fmd0gBUm-fib1tqX5282vyFi-zGicghdLZYGRf67lmTErWeUkTv3oVwXffOO1yzyVmEKX04n324w062d9vKKca7Y7zVSoZnyxZ48lAi7_6bRgu0VhAaJOaFhanQNN3ouVPy1P57_R1bJhbc1O6lHW8h79kCO_36bAs",
      alt: "A wide cinematic shot of a sleek modern watch on a dark reflective marble surface",
      badge: "Featured",
      title: "THE MONOLITH V.1",
      desc: "A masterclass in structural purity. Engineered from a single block of Grade 5 titanium, the Monolith v.1 defies traditional horological boundaries.",
      cta: "Explore Now",
      href: "/product/monolith-v1",
    },
  },

  Mens: {
    href: "/collections",
    col1: [
      {
        heading: "By Product",
        links: [
          { label: "Titan Abyss", href: "/product/titan-abyss" },
          { label: "Dark Matter Chrono", href: "/product/dark-matter-chrono" },
          { label: "Monolith v.1", href: "/product/monolith-v1" },
          { label: "Prism Gold", href: "/product/prism-gold" },
          { label: "View All", href: "/collections" },
        ],
      },
      {
        heading: "Materials",
        links: [
          { label: "Titanium", href: "/collections" },
          { label: "Matte Ceramic", href: "/collections" },
          { label: "Brushed Steel", href: "/collections" },
        ],
      },
    ],
    col2: [
      {
        heading: "Shop By",
        links: [
          { label: "New Arrivals", href: "/collections" },
          { label: "Bestsellers", href: "/collections" },
          { label: "Iconic Pieces", href: "/collections" },
          { label: "Limited Editions", href: "/collections" },
        ],
      },
      {
        heading: "Price",
        links: [
          { label: "Under €5,000", href: "/collections" },
          { label: "€5,000–€10,000", href: "/collections" },
          { label: "Above €10,000", href: "/collections" },
        ],
      },
    ],
    thumbnail: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAViD-3wAmATae5q7KJWFoxzIYo0PITmdIPPk2Q7Ma2-pKoNQEISQj9LPzd_lChI6-Q2DMGXD3mmm9rSIAAggn5uuo73ZRottwKA2ZasNza0j3knCBeAgLm4WE-78LZUMsJDzNLuoMLhV1bMAtuWx6WWmkowcxWCIdP-rzYZhmgwMVgNcBQeIUd-lGI5pZUDh8Rn8ood0FrxoKV6JcIZpD5FrUSyVT9avO3jEj8XT326q8DxZo9Dj0OzC-t29tvnnVN7Dd5WUcr8m0",
      alt: "An abstract high-fashion shot of a dark metallic watch bracelet reflecting cool blue light",
      caption: "Titan Abyss",
      href: "/product/titan-abyss",
    },
    featured: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhkyO4iTuM0MdnbJa1VcXN2XAnd4bwo5mDD72QQbINNrjRtcPGZVOkb7LE6NQITJ3O5mdwUp2t0SUOUXOjR7sHVCgBuultgvpRxprvbJmc0Bl3q7CiqTunBFIRXC-KIqymJqtFyVD0BK5geoR8myTW9tfeIgYknJPCku5YnCZg8q8-6BI4Xd8iS3HS37DWW12pPpopfutf96jbenEqZm90cU5eCHPbXG0BFvdeUX7rESWaV90XW51azEzA7WhsuX9r6auWz9t7Bto",
      alt: "A cinematic close-up of a luxury mechanical watch with brushed titanium finish",
      badge: "New Season",
      title: "THE TITAN ABYSS",
      desc: "300 metres of resolve. Engineered for depth, worn for precision — the Titan Abyss redefines what a diver can be.",
      cta: "Shop Now",
      href: "/product/titan-abyss",
    },
  },

  Womens: {
    href: "/collections",
    col1: [
      {
        heading: "By Product",
        links: [
          { label: "Aureum Pillar", href: "/product/aureum-pillar" },
          { label: "Prism Gold", href: "/product/prism-gold" },
          { label: "Monolith Automatic", href: "/product/monolith-automatic" },
          { label: "Structure No. 9", href: "/product/structure-no-9" },
          { label: "View All", href: "/collections" },
        ],
      },
      {
        heading: "Materials",
        links: [
          { label: "Rose Gold", href: "/product/aureum-pillar" },
          { label: "Brushed Gold", href: "/product/prism-gold" },
          { label: "Steel", href: "/collections" },
        ],
      },
    ],
    col2: [
      {
        heading: "Shop By",
        links: [
          { label: "New Arrivals", href: "/collections" },
          { label: "Gift Ideas", href: "/collections" },
          { label: "Iconic Pieces", href: "/collections" },
          { label: "Limited Editions", href: "/collections" },
        ],
      },
      {
        heading: "Price",
        links: [
          { label: "Under €5,000", href: "/collections" },
          { label: "€5,000–€15,000", href: "/collections" },
          { label: "Above €15,000", href: "/collections" },
        ],
      },
    ],
    thumbnail: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn4_N19fEpLIH9it_ZW3xoentlWi36BVGFCbw7bFWWgwGhP5kC9JlR4TZOXkINPSa8vRq8CSWPt94CfiixA9wrrqk_KdQLqRzz5lY7RxmJO0OacuXuito6bsuTNoSXHyCepZ0KXmg6DxnQ9BW4UGpv6Dgc_hsRkvUW6yrbz8U3LejQOhBTZmATdNVUiUDg4gZJzUMADpfC5OpyEybORA64SwHAJnHc_ivOPJFetMG4rwMpBbsIxGpdfMNbYJ11vaDeb4mZYhhvpJg",
      alt: "A high-contrast profile shot of a gold-tone luxury watch with light glinting off polished edges",
      caption: "Aureum Pillar",
      href: "/product/aureum-pillar",
    },
    featured: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdSBR0SaylNW4oXq8O7XSdCTPHBn3GMMhmFwu8zNVuAjuoVbYJzqgYtqXf-9p__CXptwZvCs2daiZWzDCXU-_OuQEFP8IU7lic3JoGKQW4nVmvSxokzBvmIAcFtADodZspy-wQM7YIcicXLsbBncaAGX6mXxhoi4CL0MgLQDE4sH9008y07SKij2YyXV7UE71Haqj4YjjySLFdFW_gfdMbJH-sPWw8K8Gmo3y0wsJ-rIikaPnaRofZLOT7fxgBWaY0AEw4cX45HY8",
      alt: "A portrait of a minimalist artist in a stark Milanese penthouse wearing a BANC watch",
      badge: "New Arrival",
      title: "AUREUM PILLAR",
      desc: "Rose gold meets architectural restraint. The Aureum Pillar is a study in proportion — designed for the woman who defines her own luxury.",
      cta: "Shop Now",
      href: "/product/aureum-pillar",
    },
  },

  Journal: {
    href: "/about",
    col1: [
      {
        heading: "About",
        links: [
          { label: "About BANC", href: "/about" },
          { label: "Our Story", href: "/about" },
          { label: "Founding Vision", href: "/about" },
        ],
      },
    ],
    col2: [
      {
        heading: "The Craft",
        links: [
          { label: "Craftsmanship", href: "/about#craftsmanship" },
          { label: "Material Rigor", href: "/about#craftsmanship" },
          { label: "Milanese Spirit", href: "/about#craftsmanship" },
        ],
      },
    ],
    thumbnail: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC255rxgFrQD_zccTvojoIQDbzjgN6sa5AlP-crcnx_sBFeTezPWK1Abq1lBxrPESf3YoSyhAPjLZg4NiMyiGv-igSM7l0L2KKq8tZqkYPWjMQ2gC5gjo0vLuQ9bvF_7aXFo5JKf2-whwT2FMhEdg5SNjVGA3CiVD1jmJFRVwEYDOdUgxXnBPmoBHpO14oqtsXqp6tgAtJD5OOXTdPqIB-x7mcQJmrJ7d67899Fhe1gBKbFZyFTnXdX8uEzpfJBY6s29j1KZ7MGI9M",
      alt: "A wide minimalist shot of the BANC manufacture studio in Milan with watchmakers at work",
      caption: "Inside the Atelier",
      href: "/about",
    },
    featured: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnyhyR9eL8_-p-KMnmdfyIGNJDyYb5_nU0Qmww2L_ocwl7eIWr2ZlKYo2GBWDgElz-6TXLIO0Fbhgt3KTgrJzpw0Ca-lhFJqXzmzXADDgBJczncBJVFUSHT8hvtLcc-mqUhQdNlucMumbiZ-poyjHZHKmpSCi2TaNw8zQZsJXajmC_2xS3XNCuwQSBj5dWJEXR-CSjA_bnPFb4Alzt9_h0zqoy2mUh9N6fQMS5Vji9TXdIRC3TlwLHBLXOBci08p43FZNtjNArMDg",
      alt: "A macro detail shot of a watch skeletal movement showcasing complex gears",
      badge: "Our Story",
      title: "THE ART OF INVISIBLE ENGINEERING",
      desc: "Inside the minds behind BANC's latest masterwork — how silence, precision, and Milanese tradition converge in a single movement.",
      cta: "Read More",
      href: "/about",
    },
  },
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // ── Search state ─────────────────────────────────────────────────────────
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const openSearch = useCallback(() => {
    setSearchOpen(true);
    setMobileOpen(false);
    setTimeout(() => searchInputRef.current?.focus(), 50);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, []);

  const handleSearch = useCallback(() => {
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    closeSearch();
  }, [searchQuery, router, closeSearch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    if (searchOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, closeSearch]);

  // ── Desktop mega menu state ──────────────────────────────────────────────
  const [activeMenu, setActiveMenu] = useState<NavLink | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [lastMenu, setLastMenu] = useState<NavLink>("Collections");
  const currentMenuData = MENU_DATA[activeMenu ?? lastMenu];
  const isOpen = activeMenu !== null;

  const openMenu = (name: NavLink) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLastMenu(name);
    setActiveMenu(name);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // ── Mobile menu state ────────────────────────────────────────────────────
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<NavLink | null>(null);

  const toggleExpanded = (link: NavLink) =>
    setExpandedItem((prev) => (prev === link ? null : link));

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedItem(null);
  };

  return (
    <>
      {/* ── Fixed nav + desktop mega menu wrapper ────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Main nav bar */}
        <nav className="w-full bg-background border-b border-outline/20">
          <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-max-width mx-auto">
            {/* Logo + desktop links */}
            <div className="flex items-center gap-12">
              <Link
                href="/"
                className="font-display-lg text-headline-lg tracking-[0.1em] text-on-surface"
              >
                BANC
              </Link>
              <div className="hidden md:flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link}
                    href={MENU_DATA[link].href}
                    onMouseEnter={() => openMenu(link)}
                    onMouseLeave={scheduleClose}
                    className={`font-headline-md text-[14px] uppercase tracking-[0.2em] transition-colors duration-300 pb-1 border-b ${
                      activeMenu === link
                        ? "text-primary border-primary"
                        : "text-on-surface/70 hover:text-on-surface border-transparent"
                    }`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-6">
              <button
                onClick={openSearch}
                className="hover:opacity-80 transition-opacity active:scale-95 duration-200"
                aria-label="Search"
              >
                <span className="material-symbols-outlined text-on-surface">search</span>
              </button>
              <Link href="/cart" className="hover:opacity-80 transition-opacity active:scale-95 duration-200">
                <span className="material-symbols-outlined text-on-surface">
                  shopping_bag
                </span>
              </Link>
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="hover:opacity-80 transition-opacity active:scale-95 duration-200"
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                <span className="material-symbols-outlined text-on-surface" suppressHydrationWarning>
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </button>
              {/* person icon — desktop only */}
              <Link
                href={mounted && isAuthenticated ? "/account" : "/login"}
                className="hidden md:block hover:opacity-80 transition-opacity active:scale-95 duration-200"
                aria-label={mounted && isAuthenticated ? "My account" : "Sign in"}
              >
                <span className="material-symbols-outlined text-on-surface">
                  person
                </span>
              </Link>
              {/* Hamburger — mobile only */}
              <button
                className="md:hidden hover:opacity-80 transition-opacity active:scale-95 duration-200"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="material-symbols-outlined text-on-surface">
                  menu
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* Search overlay */}
        <div
          className={`absolute top-full left-0 right-0 bg-background border-b border-outline/20 transition-all duration-300 overflow-hidden ${
            searchOpen ? "opacity-100 visible max-h-32" : "opacity-0 invisible max-h-0"
          }`}
        >
          <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-6 flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface/40 shrink-0">search</span>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
              placeholder="SEARCH WATCHES, MATERIALS, SERIES..."
              className="flex-1 bg-transparent font-label-sm text-label-sm uppercase tracking-widest text-on-surface placeholder:text-on-surface/30 outline-none border-none min-w-0"
            />
            {searchQuery && (
              <button
                onClick={handleSearch}
                className="shrink-0 hover:opacity-70 transition-opacity"
                aria-label="Submit search"
              >
                <span className="material-symbols-outlined text-on-surface">arrow_forward</span>
              </button>
            )}
            <button
              onClick={closeSearch}
              className="shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Close search"
            >
              <span className="material-symbols-outlined text-on-surface">close</span>
            </button>
          </div>
        </div>

        {/* Desktop mega menu — hidden on mobile */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className={`hidden md:block absolute top-full left-0 right-0 mega-menu-gradient border-b border-outline/10 transition-all duration-300 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-1"
          }`}
        >
          <div className="max-w-max-width mx-auto px-margin-desktop py-16 grid grid-cols-12 gap-12">
            {/* Left: link columns (7 of 12) */}
            <div className="col-span-7 grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="space-y-10">
                {currentMenuData.col1.map((group) => (
                  <div key={group.heading}>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline/10 pb-2">
                      {group.heading}
                    </h3>
                    <ul className="space-y-4">
                      {group.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-10 border-l border-outline/10 pl-8">
                {currentMenuData.col2.map((group) => (
                  <div key={group.heading}>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline/10 pb-2">
                      {group.heading}
                    </h3>
                    <ul className="space-y-4">
                      {group.links.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Column 3: thumbnail */}
              <div className="pl-8 border-l border-outline/10">
                <Link href={currentMenuData.thumbnail.href} className="group cursor-pointer block">
                  <div className="aspect-[4/5] relative overflow-hidden bg-surface-container mb-4">
                    <Image
                      src={currentMenuData.thumbnail.src}
                      alt={currentMenuData.thumbnail.alt}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      sizes="15vw"
                    />
                  </div>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest">
                    {currentMenuData.thumbnail.caption}
                  </p>
                </Link>
              </div>
            </div>

            {/* Right: featured cinematic panel (5 of 12) */}
            <div className="col-span-5 relative group cursor-pointer overflow-hidden h-[600px] flex flex-col justify-end p-12">
              <div className="absolute inset-0 z-0">
                <Image
                  src={currentMenuData.featured.src}
                  alt={currentMenuData.featured.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 border border-primary text-[10px] font-label-sm tracking-widest uppercase mb-4">
                  {currentMenuData.featured.badge}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                  {currentMenuData.featured.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface/80 max-w-sm mb-8 leading-relaxed">
                  {currentMenuData.featured.desc}
                </p>
                <Link
                  href={currentMenuData.featured.href}
                  className="inline-flex items-center gap-4 text-white hover:text-primary transition-colors group/cta"
                >
                  <span className="font-label-sm text-label-sm uppercase tracking-widest border-b border-white pb-1 group-hover/cta:border-primary transition-colors">
                    {currentMenuData.featured.cta}
                  </span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen overlay ────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] bg-surface-container-lowest flex flex-col transition-transform duration-500 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay header */}
        <div className="flex items-center justify-between px-margin-mobile py-6 border-b border-outline/10 shrink-0">
          <button
            onClick={closeMobile}
            className="hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-on-surface">close</span>
          </button>
          <Link href="/" className="font-display-lg text-[28px] tracking-[0.1em] text-on-surface" onClick={closeMobile}>
            BANC
          </Link>
          <Link href="/cart" onClick={closeMobile} className="hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-on-surface">
              shopping_bag
            </span>
          </Link>
        </div>

        {/* Accordion nav items */}
        <div className="flex-1 overflow-y-auto px-margin-mobile">
          {NAV_LINKS.map((link) => {
            const isExpanded = expandedItem === link;
            return (
              <div key={link} className="border-b border-outline/10">
                <button
                  onClick={() => toggleExpanded(link)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-display-lg text-[52px] leading-none uppercase text-on-surface">
                    {link}
                  </span>
                  <span className="material-symbols-outlined text-on-surface/60 text-[20px] shrink-0 ml-4">
                    {isExpanded ? "expand_less" : "add"}
                  </span>
                </button>

                {/* Sub-links — slide open with max-height transition */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isExpanded ? "max-h-80" : "max-h-0"
                  }`}
                >
                  <ul className="pb-6 space-y-5">
                    {MOBILE_SUB_LINKS[link].map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface/50 hover:text-on-surface transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured image strip at the bottom */}
        <div className="relative h-48 shrink-0 overflow-hidden">
          <Image
            src={
              expandedItem
                ? MENU_DATA[expandedItem].featured.src
                : MENU_DATA["Collections"].featured.src
            }
            alt="Featured watch"
            fill
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent" />
          <div className="absolute bottom-6 left-margin-mobile">
            <span className="font-label-sm text-[10px] uppercase tracking-[0.3em] text-on-surface/40">
              {expandedItem
                ? MENU_DATA[expandedItem].featured.badge
                : "BANC Horology"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

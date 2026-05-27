"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/components/ThemeProvider";
import { useAuth } from "@/app/components/auth/AuthProvider";
import { useRouter } from "next/navigation";

type AuthMode = "login" | "register";

export default function AuthScreen({ mode }: { mode: AuthMode }) {
  const { theme, toggleTheme } = useTheme();
  const { login, register, isAuthenticated, isHydrated } = useAuth();
  const router = useRouter();
  const isLogin = mode === "login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isHydrated && isAuthenticated) router.replace("/");
  }, [isHydrated, isAuthenticated, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen w-full bg-background text-on-background flex flex-col">
      <div className="relative flex-1 flex flex-col lg:flex-row overflow-hidden">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="absolute top-6 right-6 z-20 h-11 w-11 border border-outline/30 bg-surface/70 hover:bg-surface-container transition-colors duration-300 flex items-center justify-center"
          suppressHydrationWarning
        >
          <span className="material-symbols-outlined text-on-surface" suppressHydrationWarning>
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        <section className="relative hidden lg:block w-full lg:w-1/2 h-[420px] lg:h-auto overflow-hidden group">
          <div className="absolute inset-0 scale-105 transition-transform duration-[2000ms] group-hover:scale-100">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_X4MKrmYRpXjMb5W2yH_I4Fqz2Qle6ijoaBOIny_Uk3knFYosq4flOYOpky__e2kOpNkI-2wmz-XS2kzfxV0rP7OHvW2NT1SEilB1tVW7iv7o2ckZPTORE6XdB9XplDdNQfI7fVvF8khpVIKNCOdit4zH3L7HNFw9QSWpBCnFcaG7LA4i6OSr4sgPrWt9zjkpXE4lJUX98DpcTSFujmlQMEXTLv30i7-POEcCAFwdyTQ-ratL2rDGM6ovDXKljLT8vgxZmGEj6Ec"
              alt="Close up watch movement"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent md:bg-gradient-to-t md:from-background/60 md:to-transparent" />
          </div>
        </section>

        <section className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
          <div className="w-full max-w-md border border-outline/20 bg-surface/70 backdrop-blur-[20px] p-8 md:p-12">
            <div className="mb-12">
              <Link href="/" className="inline-block">
                <h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-[0.05em] leading-none">BANC</h1>
              </Link>
              <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
                {isLogin ? "Access Your Collection" : "Create Your Collection Access"}
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2 block tracking-widest">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    className="auth-input w-full bg-transparent border-b border-outline/30 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md placeholder:text-on-surface/20 rounded-none"
                  />
                </div>
              )}

              <div>
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2 block tracking-widest">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="auth-input w-full bg-transparent border-b border-outline/30 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md placeholder:text-on-surface/20 rounded-none"
                />
              </div>

              <div>
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2 block tracking-widest">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  minLength={6}
                  required
                  className="auth-input w-full bg-transparent border-b border-outline/30 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md placeholder:text-on-surface/20 rounded-none"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="font-label-sm text-label-sm uppercase text-on-surface-variant mb-2 block tracking-widest">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    minLength={6}
                    required
                    className="auth-input w-full bg-transparent border-b border-outline/30 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors font-body-md placeholder:text-on-surface/20 rounded-none"
                  />
                </div>
              )}

              {error ? <p className="text-red-400 text-sm">{error}</p> : null}

              <div className="pt-2 space-y-5">
                <button
                  className="w-full bg-on-background text-background py-5 font-headline-md text-headline-md uppercase tracking-[0.1em] hover:bg-primary transition-all duration-300 active:scale-[0.98] disabled:opacity-60"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
                </button>

                <Link
                  href={isLogin ? "/register" : "/login"}
                  className="block w-full text-center bg-transparent border border-outline/40 text-on-surface py-5 font-headline-md text-headline-md uppercase tracking-[0.1em] hover:border-on-surface hover:bg-on-surface/5 transition-all duration-300 active:scale-[0.98]"
                >
                  {isLogin ? "Register" : "Sign In"}
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import AuthScreen from "@/app/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Sign In — BANC Horology",
  description: "Access your BANC account.",
};

export default function LoginPage() {
  return (
    <>
      <AuthScreen mode="login" />
      <Footer />
    </>
  );
}

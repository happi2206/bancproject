import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import AuthScreen from "@/app/components/auth/AuthScreen";

export const metadata: Metadata = {
  title: "Register — BANC Horology",
  description: "Create your BANC account.",
};

export default function RegisterPage() {
  return (
    <>
      <AuthScreen mode="register" />
      <Footer />
    </>
  );
}

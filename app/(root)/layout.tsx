import Header from "@/components/landing/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "Draven UI = Open Source Components",
    default: "Draven UI",
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <>
    <Header/>
    <main className="relative w-full pt-0 md:pt-0">{children}</main>
    <Footer/>
  </>;
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonStyles } from "@/lib/styles";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

/** Friendly page shown for any URL that doesn't exist. */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative isolate flex min-h-[80svh] items-center overflow-hidden pt-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="container-page text-center">
          <p className="text-gradient font-heading text-7xl font-semibold sm:text-8xl">404</p>
          <h1 className="mt-4 text-2xl sm:text-3xl">This page doesn&apos;t exist</h1>
          <p className="mx-auto mt-3 max-w-md">
            The link may be broken or the page may have moved. Let&apos;s get you back on track.
          </p>
          <Link href="/" className={`${buttonStyles.primary} mt-8`}>
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

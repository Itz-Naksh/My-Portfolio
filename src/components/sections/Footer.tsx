import { personal } from "@/data/portfolio";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-heading text-base font-semibold text-heading">{personal.name}</p>
          <p className="mt-1 text-xs">© {year} All rights reserved.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

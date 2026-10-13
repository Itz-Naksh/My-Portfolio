import { Mail } from "lucide-react";
import { socials, type SocialPlatform } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const icons: Record<SocialPlatform, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  email: <Mail size={18} aria-hidden="true" />,
};

interface SocialLinksProps {
  className?: string;
}

/** Row of round social icon buttons, driven by `socials` in portfolio.ts */
export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const external = social.platform !== "email";
        return (
          <li key={social.platform}>
            <a
              href={social.href}
              aria-label={social.label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-body shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-brand"
            >
              {icons[social.platform]}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

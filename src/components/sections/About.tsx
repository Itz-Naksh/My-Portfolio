import Image from "next/image";
import { personal, stats } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import StatCard from "@/components/ui/StatCard";

export default function About() {
  return (
    <Section id="about" alt>
      <SectionHeading id="about" eyebrow="About me" title="A little about who I am" />

      <div className={`grid items-center gap-12 ${personal.profileImage ? "lg:grid-cols-[0.8fr_1.2fr]" : "mx-auto max-w-3xl"}`}>
        {personal.profileImage && (
        <Reveal className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
            <Image
              src={personal.profileImage}
              alt={`${personal.name} smiling`}
              fill
              sizes="(min-width: 1024px) 400px, 320px"
              className="object-cover"
            />
          </div>
        </Reveal>
        )}

        <Reveal delay={0.1}>
          <h3 className="text-2xl">
            {personal.role} based in {personal.location}
          </h3>
          <div className="mt-4 space-y-4">
            {personal.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-heading shadow-soft">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>
              <span className="font-semibold">Currently:</span> {personal.currently}
            </span>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

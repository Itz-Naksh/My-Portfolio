import { certifications, memberships } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CertificationCard from "@/components/ui/CertificationCard";

/** Certifications and professional memberships, shown as two labelled groups. */
export default function Certifications() {
  return (
    <Section id="certifications" alt>
      <SectionHeading id="certifications" eyebrow="Credentials" title="Certifications & memberships" />

      <h3 className="mb-5 text-xl">Certifications</h3>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-start">
        {certifications.map((cert, i) => (
          <li key={cert.name}>
            <Reveal delay={i * 0.08} className="h-full">
              <CertificationCard {...cert} />
            </Reveal>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 mb-5 text-xl">Professional memberships</h3>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {memberships.map((m, i) => (
          <li key={m.name}>
            <Reveal delay={i * 0.08} className="h-full">
              <CertificationCard {...m} variant="membership" />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

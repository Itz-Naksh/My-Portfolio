import { skillGroups } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Technologies I work with"
        subtitle="A toolkit I keep growing, focused on building fast, accessible, and maintainable products."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1} className="h-full">
            <SkillCard {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

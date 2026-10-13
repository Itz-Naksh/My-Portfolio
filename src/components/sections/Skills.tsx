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
        title="Skills I bring"
        subtitle="A mix of software development and accounting skills, so I understand both the code and the business behind it."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1} className="h-full">
            <SkillCard {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

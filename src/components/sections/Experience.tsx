import { timeline } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" eyebrow="Journey" title="Experience & Education" />

      <div className="relative mx-auto max-w-3xl">
        {/* Soft vertical line behind the dots */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[18px] w-0.5 rounded-full bg-linear-to-b from-primary/40 via-accent/40 to-border sm:left-[26px]"
        />
        <ol className="space-y-8">
          {timeline.map((entry, i) => (
            <li key={`${entry.title}-${entry.dates}`}>
              <Reveal delay={i * 0.08}>
                <TimelineItem {...entry} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

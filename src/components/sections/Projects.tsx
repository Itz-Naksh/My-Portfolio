import { projects } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" alt>
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of recent work. Each project taught me something new about design, code, or collaboration."
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 0.1}
            className={`h-full ${project.featured ? "sm:col-span-2" : ""}`}
          >
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

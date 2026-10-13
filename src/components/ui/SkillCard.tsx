import { Code, Server, Wrench, type LucideIcon } from "lucide-react";
import type { SkillCategoryIcon, SkillGroup } from "@/data/portfolio";

const categoryIcons: Record<SkillCategoryIcon, LucideIcon> = {
  frontend: Code,
  backend: Server,
  tools: Wrench,
};

/** One skill group: icon, title, description and a list of skill chips. */
export default function SkillCard({ title, icon, description, skills }: SkillGroup) {
  const Icon = categoryIcons[icon];

  return (
    <article className="h-full rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="mb-5 flex items-center gap-4">
        <span className="bg-gradient-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white">
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2" aria-label={`${title} skills`}>
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-xl border border-border bg-alt px-3 py-1.5 text-sm font-medium text-heading"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

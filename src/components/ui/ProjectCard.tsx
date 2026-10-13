import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { buttonStyles } from "@/lib/styles";
import { GithubIcon } from "./BrandIcons";
import Tag from "./Tag";

/**
 * Project card with screenshot, description, tech tags and action links.
 * Featured projects use a wider, side-by-side layout on larger screens.
 */
export default function ProjectCard({
  title,
  description,
  image,
  tech,
  demoUrl,
  githubUrl,
  featured = false,
  caseStudySlug,
}: Project) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-alt ${
          featured ? "lg:aspect-auto lg:min-h-[360px] lg:w-[58%] lg:shrink-0" : ""
        }`}
      >
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 640px, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
        {featured && (
          <p className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-primary-hover">
            <Sparkles size={13} aria-hidden="true" />
            Featured project
          </p>
        )}
        <h3 className={featured ? "text-2xl" : "text-xl"}>{title}</h3>
        <p className="mt-2 flex-1 text-sm">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {caseStudySlug && (
            <Link href={`/projects/${caseStudySlug}`} className={buttonStyles.small}>
              Read case study
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={caseStudySlug ? buttonStyles.smallOutline : buttonStyles.small}
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live Demo
              <span className="sr-only"> of {title} (opens in a new tab)</span>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles.smallOutline}>
              <GithubIcon size={16} />
              GitHub
              <span className="sr-only"> repository for {title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

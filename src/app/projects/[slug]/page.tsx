import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CircleCheck, ExternalLink, Lightbulb } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { buttonStyles } from "@/lib/styles";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/BrandIcons";

type Params = Promise<{ slug: string }>;

/** Pre-render one page per case study at build time. */
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} case study`,
    description: study.tagline,
    openGraph: { title: `${study.title} case study`, description: study.tagline },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main id="main" className="pt-24 sm:pt-28">
        {/* Header */}
        <section aria-labelledby="case-study-heading" className="container-page">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>

          <Reveal className="mt-6 max-w-3xl">
            <p className="inline-block rounded-full bg-accent-light px-4 py-1 text-sm font-medium text-primary-hover">
              Case study
            </p>
            <h1 id="case-study-heading" className="text-gradient mt-4 pb-1 text-4xl sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-3 font-heading text-xl font-medium text-heading">{study.tagline}</p>
            <p className="mt-3 text-sm">
              <span className="font-semibold text-heading">Role:</span> {study.role}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {study.tech.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              {study.demoUrl && (
                <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                  <ExternalLink size={18} aria-hidden="true" />
                  Try the live demo
                </a>
              )}
              {study.githubUrl && (
                <a href={study.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles.outline}>
                  <GithubIcon size={18} />
                  View code
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="bg-gradient-brand rounded-[1.4rem] p-1.5 shadow-lift">
              <div className="relative aspect-[1440/1000] overflow-hidden rounded-[1.1rem] bg-alt">
                <Image
                  src={study.heroImage}
                  alt={`${study.title} dashboard`}
                  fill
                  priority
                  sizes="(min-width: 1152px) 1100px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Overview + problem */}
        <section aria-labelledby="overview-heading" className="container-page grid gap-10 py-20 lg:grid-cols-2">
          <Reveal>
            <h2 id="overview-heading" className="text-2xl sm:text-3xl">
              Overview
            </h2>
            <div className="mt-4 space-y-4">
              {study.overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-alt p-7">
              <h2 className="inline-flex items-center gap-2 text-xl">
                <Lightbulb size={20} className="text-primary" aria-hidden="true" />
                The problem
              </h2>
              <p className="mt-3">{study.problem}</p>
            </div>
          </Reveal>
        </section>

        {/* Features */}
        <section aria-labelledby="features-heading" className="bg-alt py-20">
          <div className="container-page">
            <Reveal>
              <h2 id="features-heading" className="text-2xl sm:text-3xl">
                What I built
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {study.features.map((f, i) => (
                <li key={f.title}>
                  <Reveal delay={i * 0.06} className="h-full">
                    <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft">
                      <CircleCheck size={22} className="text-primary" aria-hidden="true" />
                      <h3 className="mt-3 text-lg">{f.title}</h3>
                      <p className="mt-2 text-sm">{f.description}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engineering decisions */}
        <section aria-labelledby="decisions-heading" className="container-page py-20">
          <Reveal>
            <h2 id="decisions-heading" className="text-2xl sm:text-3xl">
              Key engineering decisions
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {study.decisions.map((d, i) => (
              <li key={d.title}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft">
                    <span className="bg-gradient-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-heading text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg">{d.title}</h3>
                      <p className="mt-1 text-sm">{d.description}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Tech stack */}
        <section aria-labelledby="stack-heading" className="bg-alt py-20">
          <div className="container-page">
            <Reveal>
              <h2 id="stack-heading" className="text-2xl sm:text-3xl">
                Tech stack
              </h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {study.stack.map((row) => (
                      <tr key={row.area} className="border-b border-border last:border-0">
                        <th scope="row" className="w-36 px-5 py-3 font-semibold text-heading sm:w-48">
                          {row.area}
                        </th>
                        <td className="px-5 py-3">{row.choice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section aria-labelledby="gallery-heading" className="container-page py-20">
          <Reveal>
            <h2 id="gallery-heading" className="text-2xl sm:text-3xl">
              Screens
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {study.gallery.map((shot, i) => (
              <li key={shot.src}>
                <Reveal delay={i * 0.06}>
                  <figure>
                    <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-alt shadow-soft">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="mt-3 text-center text-sm">{shot.caption}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-16 flex flex-wrap justify-center gap-4">
            {study.demoUrl && (
              <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                <ExternalLink size={18} aria-hidden="true" />
                Try the live demo
              </a>
            )}
            <Link href="/#projects" className={buttonStyles.outline}>
              <ArrowLeft size={18} aria-hidden="true" />
              Back to projects
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

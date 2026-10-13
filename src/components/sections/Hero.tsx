"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { personal } from "@/data/portfolio";
import { buttonStyles } from "@/lib/styles";
import SocialLinks from "@/components/ui/SocialLinks";
import TypingText from "@/components/ui/TypingText";
import HeroIllustration from "@/components/ui/HeroIllustration";

// Staggered entrance for hero content
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* Soft blurred gradient blobs (decorative) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-light blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text column */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-badge shadow-soft"
          >
            <Sparkles size={15} aria-hidden="true" />
            {personal.seeking}
          </motion.p>

          <motion.p variants={item} className="text-lg font-medium text-heading">
            Hey, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-heading"
            className="text-gradient mt-2 pb-1 text-4xl font-semibold sm:text-5xl lg:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 min-h-[2rem] font-heading text-xl font-medium text-heading sm:text-2xl">
            <TypingText phrases={personal.typingRoles} />
          </motion.p>

          <motion.p variants={item} className="mx-auto mt-5 max-w-xl text-base sm:text-lg lg:mx-0">
            {personal.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 inline-flex items-center gap-1.5 text-sm"
          >
            <MapPin size={15} aria-hidden="true" className="text-brand" />
            {personal.location}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#projects" className={buttonStyles.primary}>
              View My Work
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className={buttonStyles.outline}>
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right column: profile photo if set, otherwise the tech illustration */}
        {personal.profileImage ? (
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-56 sm:w-64 lg:w-72"
        >
          {/* Soft glow behind the frame */}
          <span aria-hidden="true" className="bg-gradient-brand absolute -inset-6 -z-10 rounded-[2.5rem] opacity-30 blur-2xl" />
          {/* Gradient ring */}
          <div className="bg-gradient-brand rounded-[2rem] p-1.5 shadow-lift">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] bg-alt">
              <Image
                src={personal.profileImage}
                alt="Tech illustration of a woman working with data and AI dashboards"
                fill
                priority
                unoptimized={personal.profileImage.endsWith(".svg")}
                sizes="(min-width: 1024px) 288px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mx-auto w-full max-w-md"
          >
            <HeroIllustration />
          </motion.div>
        )}
      </div>
    </section>
  );
}

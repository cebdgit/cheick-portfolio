"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    ExternalLink,
    GitBranch,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);

    const project = projects[activeProject];

    const nextProject = () => {
        setActiveProject((current) =>
            current === projects.length - 1 ? 0 : current + 1
        );
    };

    const previousProject = () => {
        setActiveProject((current) =>
            current === 0 ? projects.length - 1 : current - 1
        );
    };

    return (
        <section
            id="projects"
            className="section-padding relative overflow-hidden scroll-mt-24"
        >
            <div className="container-custom">

                {/* Header */}
                <div className="grid gap-10 lg:grid-cols-[0.35fr_1.65fr]">

                    <div>
                        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blue-400">
                            <span className="h-px w-6 bg-blue-400" />
                            Projets
                        </p>

                        <p className="mt-4 max-w-[180px] text-xs leading-relaxed text-zinc-600">
                            Une sélection de réalisations orientées logiciel,
                            Cloud et DevOps.
                        </p>
                    </div>

                    <div>

                        <h2 className="
                            max-w-5xl
                            text-4xl font-bold
                            leading-[1.05]
                            tracking-[-0.04em]
                            text-white
                            sm:text-5xl
                            md:text-6xl
                        ">
                            Des projets qui
                            <span className="text-zinc-600">
                                {" "}démontrent mes compétences.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
                            Des projets réalisés autour du développement
                            logiciel, des architectures AWS et de
                            l&apos;automatisation des déploiements.
                        </p>

                    </div>
                </div>

                {/* Project navigation */}
                <div className="mt-16 flex items-center justify-between gap-4">

                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {projects.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveProject(index)}
                                className={`
                                    shrink-0
                                    rounded-full
                                    border
                                    px-4 py-2
                                    text-xs
                                    transition-all
                                    ${activeProject === index
                                        ? "border-white bg-white text-black"
                                        : "border-white/10 text-zinc-500 hover:border-white/20 hover:text-white"
                                    }
                                `}
                            >
                                {String(item.id).padStart(2, "0")}
                            </button>
                        ))}
                    </div>

                    {/* Previous / next */}
                    <div className="hidden shrink-0 gap-2 sm:flex">

                        <button
                            type="button"
                            onClick={previousProject}
                            aria-label="Projet précédent"
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-full
                                border border-white/10
                                text-zinc-500
                                transition-all
                                hover:border-white/20
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <ArrowLeft size={16} />
                        </button>

                        <button
                            type="button"
                            onClick={nextProject}
                            aria-label="Projet suivant"
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-full
                                border border-white/10
                                text-zinc-500
                                transition-all
                                hover:border-white/20
                                hover:bg-white/5
                                hover:text-white
                            "
                        >
                            <ArrowRight size={16} />
                        </button>

                    </div>

                </div>

                {/* Main project */}
                <div className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >

                            {/* VISUAL */}
                            <div className="
                                relative
                                min-h-[360px]
                                overflow-hidden
                                border-b border-white/10
                                bg-zinc-950
                                md:min-h-[500px]
                            ">

                                {/* Grid */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                                        bg-[size:50px_50px]
                                    "
                                />

                                {/* Glow */}
                                <div className="
                                    absolute left-1/2 top-1/2
                                    h-72 w-72
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-blue-500/[0.08]
                                    blur-[110px]
                                " />

                                {/* Project metadata */}
                                <div className="absolute left-6 top-6 z-10">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                                        Projet {String(project.id).padStart(2, "0")}
                                    </p>
                                </div>

                                <div className="absolute right-6 top-6 z-10">
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                        {project.category}
                                    </p>
                                </div>

                                {/* Architecture visual */}
                                <div className="
                                    relative
                                    flex
                                    min-h-[360px]
                                    items-center
                                    justify-center
                                    px-5
                                    md:min-h-[500px]
                                ">

                                    <div className="flex items-center gap-2 sm:gap-4 md:gap-8">

                                        {/* Node 1 */}
                                        <div className="
                                            flex
                                            h-20 w-20
                                            items-center justify-center
                                            rounded-2xl
                                            border border-white/10
                                            bg-white/[0.04]
                                            p-2
                                            text-center
                                            text-[10px]
                                            text-zinc-400
                                            shadow-2xl
                                            backdrop-blur-xl
                                            sm:h-24 sm:w-24
                                            md:h-32 md:w-32
                                            md:text-xs
                                        ">
                                            {project.technologies[0]}
                                        </div>

                                        <div className="h-px w-5 bg-white/20 sm:w-10 md:w-16" />

                                        {/* Main node */}
                                        <motion.div
                                            animate={{
                                                y: [0, -8, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="
                                                flex
                                                h-24 w-24
                                                items-center justify-center
                                                rounded-3xl
                                                border border-blue-400/25
                                                bg-blue-400/[0.05]
                                                p-3
                                                text-center
                                                text-[10px]
                                                font-medium
                                                text-blue-300
                                                shadow-2xl
                                                shadow-blue-500/10
                                                backdrop-blur-xl
                                                sm:h-28 sm:w-28
                                                md:h-36 md:w-36
                                                md:text-xs
                                            "
                                        >
                                            {project.technologies[
                                                Math.min(
                                                    1,
                                                    project.technologies.length - 1
                                                )
                                            ]}
                                        </motion.div>

                                        <div className="h-px w-5 bg-white/20 sm:w-10 md:w-16" />

                                        {/* Node 3 */}
                                        <div className="
                                            flex
                                            h-20 w-20
                                            items-center justify-center
                                            rounded-2xl
                                            border border-white/10
                                            bg-white/[0.04]
                                            p-2
                                            text-center
                                            text-[10px]
                                            text-zinc-400
                                            shadow-2xl
                                            backdrop-blur-xl
                                            sm:h-24 sm:w-24
                                            md:h-32 md:w-32
                                            md:text-xs
                                        ">
                                            {
                                                project.technologies[
                                                Math.min(
                                                    2,
                                                    project.technologies.length - 1
                                                )
                                                ]
                                            }
                                        </div>

                                    </div>

                                    {/* Project title inside visual */}
                                    <div className="
                                        absolute
                                        bottom-7
                                        left-1/2
                                        w-full
                                        -translate-x-1/2
                                        px-6
                                        text-center
                                    ">
                                        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                                            Selected project
                                        </p>

                                        <h3 className="
                                            mt-2
                                            text-2xl font-bold
                                            tracking-tight
                                            text-white
                                            sm:text-3xl
                                            md:text-4xl
                                        ">
                                            {project.title}
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            {/* Content */}
                            <div className="
                                grid gap-12
                                p-7
                                md:p-10
                                lg:grid-cols-[1.1fr_0.9fr]
                            ">

                                {/* Left */}
                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                                        {project.category}
                                    </p>

                                    <h3 className="
                                        mt-4
                                        text-3xl font-bold
                                        tracking-tight
                                        text-white
                                        md:text-5xl
                                    ">
                                        {project.title}
                                    </h3>

                                    <p className="mt-5 text-lg text-zinc-400">
                                        {project.shortDescription}
                                    </p>

                                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
                                        {project.description}
                                    </p>

                                    {/* Links */}
                                    <div className="mt-8 flex flex-wrap gap-3">

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center gap-2
                                                    rounded-full
                                                    border border-white/10
                                                    px-5 py-3
                                                    text-sm text-white
                                                    transition-all
                                                    hover:border-white/20
                                                    hover:bg-white/5
                                                "
                                            >
                                                <GitBranch size={16} />
                                                GitHub
                                                <ExternalLink size={14} />
                                            </a>
                                        )}

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    inline-flex
                                                    items-center gap-2
                                                    rounded-full
                                                    bg-white
                                                    px-5 py-3
                                                    text-sm font-medium
                                                    text-zinc-950
                                                    transition-all
                                                    hover:scale-105
                                                    hover:bg-zinc-200
                                                "
                                            >
                                                Live Demo
                                                <ArrowUpRight size={16} />
                                            </a>
                                        )}

                                    </div>
                                </div>

                                {/* Right */}
                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                                        Technologies
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="
                                                    rounded-full
                                                    border border-white/10
                                                    px-3 py-2
                                                    text-xs text-zinc-400
                                                "
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="mt-10 text-xs uppercase tracking-[0.25em] text-zinc-600">
                                        Highlights
                                    </p>

                                    <div className="mt-4 space-y-3">
                                        {project.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-start gap-3 text-sm text-zinc-400"
                                            >
                                                <Check
                                                    size={15}
                                                    className="mt-0.5 shrink-0 text-blue-400"
                                                />

                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </AnimatePresence>
                </div>

                {/* Bottom navigation */}
                <div className="mt-7 flex items-center justify-between">

                    <span className="text-xs text-zinc-600">
                        {String(activeProject + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                    </span>

                    <span className="hidden text-[10px] uppercase tracking-[0.25em] text-zinc-700 md:block">
                        Sélectionnez un projet
                    </span>

                    <button
                        type="button"
                        onClick={nextProject}
                        className="
                            flex items-center gap-2
                            text-xs text-zinc-500
                            transition-colors
                            hover:text-white
                            sm:hidden
                        "
                    >
                        Suivant
                        <ArrowRight size={14} />
                    </button>

                </div>

            </div>
        </section>
    );
}
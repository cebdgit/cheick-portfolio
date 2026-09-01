"use client";

import type React from "react";
import { motion } from "motion/react";
import {
    Award,
    BookOpen,
    BriefcaseBusiness,
    Download,
    GraduationCap,
} from "lucide-react";

const timeline = [
    {
        year: "2026",
        type: "Certification",
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        description:
            "Certification démontrant mes connaissances fondamentales des services AWS, de l'architecture Cloud, de la sécurité et de la tarification.",
        icon: Award,
    },
    {
        year: "2026",
        type: "Training",
        title: "AWS re/Start Graduate",
        organization: "Orange Digital Center Mali",
        description:
            "Formation pratique orientée Cloud Computing, Linux, réseaux, AWS, sécurité, architecture et bonnes pratiques Cloud.",
        icon: CloudIcon,
    },
    {
        year: "2025",
        type: "Certification",
        title: "Meta Back-End Developer",
        organization: "Meta",
        description:
            "Formation spécialisée en développement backend, Python, Django, API REST, bases de données, Git et développement logiciel.",
        icon: BriefcaseBusiness,
    },
    {
        year: "—",
        type: "Education",
        title: "Licence en Génie Logiciel",
        organization: "Formation universitaire",
        description:
            "Formation en génie logiciel couvrant la programmation, les bases de données, la conception logicielle, les systèmes et le développement d'applications.",
        icon: GraduationCap,
    },
];

function CloudIcon(props: React.ComponentProps<typeof BriefcaseBusiness>) {
    return <BriefcaseBusiness {...props} />;
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="section-padding relative overflow-hidden"
        >
            <div className="container-custom">

                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[0.4fr_1.6fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                            My journey
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Un parcours construit autour du
                            <span className="text-zinc-600">
                                {" "}logiciel et du Cloud.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Une progression continue entre formation académique,
                            certifications, pratique du développement et exploration
                            des technologies Cloud.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto mt-20 max-w-4xl">

                    {/* Vertical line */}
                    <div className="absolute left-[23px] top-0 hidden h-full w-px bg-white/10 md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={`${item.title}-${index}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="relative md:pl-20"
                                >
                                    {/* Timeline icon */}
                                    <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-zinc-950 md:flex">
                                        <Icon
                                            size={18}
                                            className="text-blue-400"
                                        />
                                    </div>

                                    {/* Card */}
                                    <div className="glass rounded-3xl p-7 transition-all duration-300 hover:border-white/20 md:p-8">

                                        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                                            <span className="text-xs uppercase tracking-[0.25em] text-blue-400">
                                                {item.type}
                                            </span>

                                            <span className="text-sm text-zinc-600">
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-2xl font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-zinc-500">
                                            {item.organization}
                                        </p>

                                        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CV */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mt-20 max-w-4xl"
                >
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-12">

                        {/* Background decoration */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

                        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                                    Resume
                                </p>

                                <h3 className="mt-3 text-3xl font-bold text-white">
                                    Mon parcours en détail.
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-500">
                                    Retrouvez mon parcours, mes compétences, mes certifications
                                    et mes projets dans mon CV.
                                </p>
                            </div>

                            <a
                                href="/cv/DiarraCheick_CV_vf.pdf"
                                download="DiarraCheick_CV_vf.pdf"
                                className="group flex shrink-0 items-center gap-3 rounded-full border border-blue-400/20 bg-zinc-950 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-900"
                            >
                                <Download size={17} />

                                Download CV
                            </a>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
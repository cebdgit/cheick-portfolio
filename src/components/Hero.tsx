"use client";

import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowRight,
    Cloud,
    Code2,
    Server,
} from "lucide-react";

const technologies = [
    {
        name: "Python",
        icon: Code2,
    },
    {
        name: "AWS",
        icon: Cloud,
    },
    {
        name: "DevOps",
        icon: Server,
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="
                relative flex min-h-screen
                items-center
                overflow-hidden
                scroll-mt-24
            "
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">

                <div
                    className="
                        absolute inset-0
                        bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                        bg-[size:60px_60px]
                    "
                />

                <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[130px]" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            </div>

            <div className="container-custom w-full px-4 pt-32 pb-24 sm:px-6 lg:pt-28">

                <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

                    {/* LEFT */}
                    <div>

                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-7 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-blue-400" />

                            <span className="text-[11px] uppercase tracking-[0.28em] text-blue-400 sm:text-xs">
                                Software Developer · Cloud · DevOps
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-[9rem]"
                        >
                            Hi, I&apos;m
                            <br />

                            <span className="text-white">
                                Cheick
                            </span>{" "}

                            <span className="text-zinc-600">
                                El Diarra.
                            </span>
                        </motion.h1>

                        {/* Description
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
                        >
                            Je conçois, automatise et déploie des applications modernes
                            en combinant développement logiciel, Cloud AWS et pratiques
                            DevOps.
                        </motion.p> */}

                        {/* Title
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="
                                max-w-4xl
                                text-5xl font-bold
                                leading-[0.95]
                                tracking-[-0.045em]
                                text-white
                                sm:text-6xl
                                md:text-7xl
                                lg:text-[6.5rem]
                                xl:text-[7.5rem]
                            "
                        >
                            Je conçois
                            <br />

                            <span className="text-white">
                                des solutions
                            </span>

                            <br />

                            <span className="text-zinc-600">
                                logicielles.
                            </span>
                        </motion.h1> */}

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="
                                mt-8
                                max-w-2xl
                                text-base
                                leading-relaxed
                                text-zinc-400
                                md:text-lg
                            "
                        >
                            Développeur Logiciel & Cloud | Python/Django • AWS • DevOps
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-9 flex flex-wrap gap-3"
                        >

                            <a
                                href="#projects"
                                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-zinc-950 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/10 transition-all hover:scale-105 hover:bg-zinc-900"
                            >
                                Voir mes projets

                                <ArrowRight
                                    size={17}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#contact"
                                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-zinc-950 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/10 transition-all hover:scale-105 hover:bg-zinc-900"
                            >
                                Parlons-en
                            </a>

                        </motion.div>

                        {/* Mini information */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-600"
                        >
                            <span>Python · Django</span>
                            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
                            <span>AWS</span>
                            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
                            <span>Docker · CI/CD</span>
                        </motion.div>

                    </div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative mx-auto hidden h-[460px] w-full max-w-[500px] lg:block"
                    >

                        {/* Orbital rings */}
                        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

                        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

                        <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

                        {/* Center */}
                        <motion.div
                            animate={{
                                scale: [1, 1.04, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute left-1/2 top-1/2
                                flex h-32 w-32
                                -translate-x-1/2 -translate-y-1/2
                                items-center justify-center
                                rounded-full
                                border border-blue-400/20
                                bg-blue-400/[0.04]
                                shadow-2xl shadow-blue-500/10
                                backdrop-blur-xl
                            "
                        >
                            <div className="text-center">
                                <p className="text-3xl font-bold text-white">
                                    CD
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                                    Software
                                </p>
                            </div>
                        </motion.div>

                        {/* Technology nodes */}
                        {technologies.map((technology, index) => {
                            const Icon = technology.icon;

                            const positions = [
                                "left-0 top-1/2 -translate-y-1/2",
                                "right-0 top-[18%]",
                                "right-6 bottom-[18%]",
                            ];

                            return (
                                <motion.div
                                    key={technology.name}
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 3 + index,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className={`
                                        absolute
                                        ${positions[index]}
                                        flex items-center gap-3
                                        rounded-full
                                        border border-white/10
                                        bg-zinc-950/70
                                        px-4 py-3
                                        shadow-xl
                                        backdrop-blur-xl
                                    `}
                                >
                                    <Icon
                                        size={17}
                                        className="text-blue-400"
                                    />

                                    <span className="text-sm text-zinc-300">
                                        {technology.name}
                                    </span>
                                </motion.div>
                            );
                        })}

                        {/* Decorative points */}
                        <div className="absolute left-16 top-14 h-2 w-2 rounded-full bg-blue-400/50" />
                        <div className="absolute right-20 top-20 h-1.5 w-1.5 rounded-full bg-white/30" />
                        <div className="absolute bottom-14 left-1/3 h-1.5 w-1.5 rounded-full bg-white/20" />

                    </motion.div>

                </div>

                {/* Scroll indicator */}
                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="
                        absolute bottom-7 left-1/2
                        flex -translate-x-1/2
                        flex-col items-center gap-2
                        text-zinc-600
                        transition-colors
                        hover:text-white
                    "
                >
                    <span className="text-[9px] uppercase tracking-[0.35em]">
                        Scroll
                    </span>

                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        <ArrowDown size={15} />
                    </motion.div>
                </motion.a>

            </div>
        </section>
    );
}
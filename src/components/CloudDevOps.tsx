"use client";

import { motion } from "motion/react";
import {
    ArrowDown,
    Cloud,
    Container,
    Database,
    GitBranch,
    Rocket,
    Settings,
    Server,
} from "lucide-react";

const pipeline = [
    {
        title: "Development",
        description: "Concevoir et développer",
        icon: Settings,
    },
    {
        title: "Git",
        description: "Versionner le code",
        icon: GitBranch,
    },
    {
        title: "Docker",
        description: "Conteneuriser",
        icon: Container,
    },
    {
        title: "CI / CD",
        description: "Automatiser",
        icon: Rocket,
    },
    {
        title: "AWS",
        description: "Déployer dans le Cloud",
        icon: Cloud,
    },
];

const infrastructure = [
    {
        name: "EC2",
        description: "Compute",
        icon: Server,
    },
    {
        name: "RDS",
        description: "Database",
        icon: Database,
    },
];

export default function CloudDevOps() {
    return (
        <section
            id="cloud"
            className="section-padding relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />
            </div>

            <div className="container-custom">

                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[0.4fr_1.6fr]">

                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                            Cloud & DevOps
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Concevoir.
                            <br />
                            Automatiser.
                            <br />
                            <span className="text-zinc-600">
                                Déployer.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            J'explore les pratiques Cloud et DevOps pour automatiser
                            le cycle de vie des applications et construire des
                            infrastructures fiables et évolutives.
                        </p>
                    </div>
                </div>

                {/* Pipeline */}
                <div className="mx-auto mt-20 max-w-4xl">

                    {pipeline.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={step.title}>

                                {/* Step */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative"
                                >
                                    <div className="glass flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-6">

                                        {/* Number */}
                                        <span className="hidden text-xs text-zinc-700 md:block">
                                            0{index + 1}
                                        </span>

                                        {/* Icon */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                            <Icon
                                                size={20}
                                                className="text-blue-400"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white">
                                                {step.title}
                                            </h3>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Status */}
                                        <div className="hidden items-center gap-2 md:flex">
                                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                                            <span className="text-xs text-zinc-600">
                                                Workflow
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Connector */}
                                {index < pipeline.length - 1 && (
                                    <div className="flex justify-center py-3">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: 28 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.08 + 0.2,
                                            }}
                                            className="w-px bg-gradient-to-b from-blue-400/60 to-transparent"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>

                {/* AWS infrastructure */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mt-20 max-w-4xl"
                >
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-white/10" />

                        <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                            AWS Infrastructure
                        </span>

                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                        {infrastructure.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.name}
                                    className="glass rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                                >
                                    <div className="flex items-center justify-between">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                            <Icon
                                                size={20}
                                                className="text-blue-400"
                                            />
                                        </div>

                                        <span className="text-xs text-zinc-700">
                                            AWS
                                        </span>
                                    </div>

                                    <h3 className="mt-8 text-2xl font-semibold text-white">
                                        Amazon {item.name}
                                    </h3>

                                    <p className="mt-2 text-sm text-zinc-500">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </motion.div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-20 flex max-w-3xl flex-col items-center text-center"
                >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
                        <ArrowDown
                            size={18}
                            className="text-blue-400"
                        />
                    </div>

                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
                        From code to cloud
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
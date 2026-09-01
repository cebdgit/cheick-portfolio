"use client";

import { motion } from "motion/react";
import {
    ArrowUpRight,
    Mail,
    MapPin,
} from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/cheick-el-diarra-480625388",
        icon: LinkedInIcon,
    },
    {
        name: "GitHub",
        href: "https://github.com/cebdgit",
        icon: GitHubIcon,
    },
];

function LinkedInIcon({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3Zm-1.2 1.2h2.4V18h-2.4V9.7Zm4.1 0h2.3v1.14h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.87 1.6 2.87 3.67V18h-2.4v-16.8h-2.4v7.94c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.04 2.06-3.04 4.18V18h-2.4V9.7Z" />
        </svg>
    );
}

function GitHubIcon({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.14 1.18a10.9 10.9 0 0 1 5.72 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden border-t border-white/10"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[120px]" />
            </div>

            <div className="container-custom py-32 md:py-44">

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-5xl text-center"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                        Contact
                    </p>

                    <h2 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl">
                        Let&apos;s build
                        <br />
                        <span className="text-zinc-600">
                            something great.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
                        Vous avez une opportunité, un projet ou souhaitez simplement
                        échanger ? Je suis ouvert aux opportunités professionnelles
                        dans le développement logiciel, le Cloud et le DevOps.
                    </p>

                    <a
                        href="mailto:diarracheickel@gmail.com"
                        className="group mt-10 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-zinc-950 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/10 transition-all hover:scale-105 hover:bg-zinc-900"
                    >
                        <Mail size={18} className="text-white" />

                        Me contacter

                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>

                {/* Contact information */}
                <div className="mx-auto mt-24 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">

                    <div className="bg-zinc-950 p-7 text-center">
                        <Mail
                            size={20}
                            className="mx-auto text-blue-400"
                        />

                        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
                            Email
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                            diarracheickel@gmail.com
                        </p>
                    </div>

                    <div className="bg-zinc-950 p-7 text-center">
                        <MapPin
                            size={20}
                            className="mx-auto text-blue-400"
                        />

                        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
                            Location
                        </p>

                        <p className="mt-2 text-sm text-zinc-400">
                            Bamako, Mali
                        </p>
                    </div>

                    <div className="bg-zinc-950 p-7 text-center">
                        <div className="mx-auto w-fit text-blue-400">
                            <GitHubIcon size={20} />
                        </div>

                        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
                            GitHub
                        </p>

                        <a
                            href="https://github.com/cebdgit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-sm text-zinc-400 transition-colors hover:text-white"
                        >
                            github.com/cebdgit
                        </a>
                    </div>

                </div>

                {/* Social links */}
                <div className="mt-12 flex justify-center gap-3">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm text-zinc-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                            >
                                <Icon size={16} />
                                {social.name}
                            </a>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
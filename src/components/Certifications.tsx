"use client";

import { ArrowUpRight, Award, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        image: "/certifications/aws-certified-cloud-practitioner (1).png",
        description:
            "Certification AWS validant mes connaissances fondamentales du Cloud et des principaux services AWS.",
        verification: "https://www.credly.com/badges/f09fc888-ed9c-444f-bb08-148be224c717",
    },
    {
        title: "AWS re/Start Graduate",
        organization: "Amazon Web Services",
        image: "/certifications/aws-re-start-graduate (1).png",
        description:
            "Programme de formation pratique consacré au Cloud Computing, aux fondamentaux AWS et à l'administration système.",
        verification: "https://www.credly.com/badges/d5fdb7c2-ac82-4fa1-9867-acfeb51ffbf6",
    },
    {
        title: "Cloud Computing",
        organization: "Badge d’achèvement",
        image: "/certifications/Badge d’achèvement Cloud Computing .png",
        description:
            "Badge attestant de l'achèvement d'une formation en Cloud Computing.",
        verification: "https://www.coursera.org/account/accomplishments/badge/hDDZ0bggS_Cw2dG4IHvw-g",
    },
    {
        title: "Meta Back-End Developer",
        organization: "Meta",
        image: "/certifications/Certificat professionnel de développeur back-end Meta .png",
        description:
            "Programme professionnel consacré au développement backend, aux API, aux bases de données et au développement logiciel.",
        verification: "https://www.credly.com/badges/635d6a0a-a61d-408d-9b90-8c678b776504",
    },
    {
        title: "AWS Cloud Quest",
        organization: "Amazon Web Services",
        image: "/certifications/Cloud Quest.png",
        description:
            "Parcours pratique permettant de développer et valider des compétences Cloud à travers des scénarios AWS.",
        verification: "https://www.credly.com/badges/8f8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f",
    },
    {
        title: "Global Mentorship Initiative - Certificat GMI",
        organization: "GMI",
        image: "/certifications/Certificat GMI .png",
        description:
            "Certification obtenue dans le cadre du parcours de formation GMI.",
        verification: "https://credentials.globalmentorship.org/credentials/49187dee-7572-4b93-bb66-60ca836d1ad5?preview=1",
    },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="scroll-mt-24 border-t border-white/10 py-24 md:py-32"
        >
            <div className="container-custom">

                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[0.4fr_1.6fr]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                            Certifications
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Des compétences validées par
                            <span className="text-zinc-600">
                                {" "}des certifications reconnues.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
                            Mon parcours combine développement logiciel, Cloud
                            Computing et technologies AWS, avec plusieurs
                            certifications et badges obtenus au cours de ma
                            formation.
                        </p>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certification, index) => (
                        <motion.article
                            key={certification.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                        >
                            {/* Image */}
                            <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-zinc-900/50 p-8">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)]" />

                                <img
                                    src={certification.image}
                                    alt={certification.title}
                                    className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-7">

                                <div className="mb-5 flex items-center justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                        <Award
                                            size={18}
                                            className="text-blue-400"
                                        />
                                    </div>

                                    <span className="text-xs uppercase tracking-wider text-zinc-500">
                                        {certification.organization}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {certification.title}
                                </h3>

                                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">
                                    {certification.description}
                                </p>

                                {/* Links */}
                                <div className="mt-7 flex items-center gap-4">

                                    <a
                                        href={certification.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400"
                                    >
                                        Voir le badge
                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                                        />
                                    </a>

                                    {certification.verification && (
                                        <a
                                            href={certification.verification}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium text-blue-300 transition-all hover:border-blue-400/40 hover:bg-blue-400/10"
                                        >
                                            Vérifier
                                            <ExternalLink size={13} />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
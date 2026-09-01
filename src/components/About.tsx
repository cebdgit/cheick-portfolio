import { ArrowUpRight, Cloud, Code2, Server } from "lucide-react";

const highlights = [
    {
        number: "01",
        icon: Code2,
        title: "Software Development",
        description:
            "Conception d'applications et d'API modernes avec Python, Django et les technologies JavaScript.",
    },
    {
        number: "02",
        icon: Cloud,
        title: "Cloud Computing",
        description:
            "Conception et déploiement de solutions Cloud avec AWS, notamment EC2, RDS, S3, Lambda et VPC.",
    },
    {
        number: "03",
        icon: Server,
        title: "DevOps",
        description:
            "Automatisation, conteneurisation et mise en place de pratiques CI/CD pour améliorer les déploiements.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="section-padding scroll-mt-24 border-t border-white/[0.06]"
        >
            <div className="container-custom">

                {/* Section heading */}
                <div className="grid gap-10 lg:grid-cols-[0.35fr_1.65fr]">

                    <div>
                        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blue-400">
                            <span className="h-px w-6 bg-blue-400" />
                            À propos
                        </p>

                        <p className="mt-4 max-w-[180px] text-xs leading-relaxed text-zinc-600">
                            Mon parcours, ma manière de travailler et les
                            domaines dans lesquels je souhaite évoluer.
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
                            Je transforme les idées en
                            <span className="text-zinc-600">
                                {" "}solutions logicielles.
                            </span>
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                                Développeur logiciel passionné par la conception
                                d'applications backend, le Cloud et les pratiques
                                DevOps, je cherche à construire des solutions
                                fiables, évolutives et faciles à maintenir.
                            </p>

                            <p className="text-base leading-relaxed text-zinc-500 md:text-lg">
                                Mon parcours en Génie Logiciel m&apos;a permis de
                                développer une base solide en programmation et
                                en conception logicielle, tandis que mes
                                expériences AWS m&apos;ont permis de mieux comprendre
                                le déploiement d&apos;applications dans le Cloud.
                            </p>

                        </div>

                        <a
                            href="#contact"
                            className="
                                group
                                mt-8
                                inline-flex
                                items-center gap-2
                                text-sm font-medium
                                text-white
                            "
                        >
                            Travaillons ensemble

                            <span className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-full
                                border border-white/10
                                transition-all
                                group-hover:border-blue-400/40
                                group-hover:bg-blue-400/10
                            ">
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </span>
                        </a>

                    </div>
                </div>

                {/* Highlights */}
                <div className="mt-24">

                    <div className="mb-6 flex items-end justify-between">
                        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                            Ce que je construis
                        </p>

                        <span className="hidden text-xs text-zinc-700 md:block">
                            03 domaines
                        </span>
                    </div>

                    <div className="
                        grid
                        overflow-hidden
                        rounded-[2rem]
                        border border-white/10
                        bg-white/[0.02]
                        md:grid-cols-3
                    ">

                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        group
                                        relative
                                        border-b border-white/10
                                        p-7
                                        transition-colors
                                        hover:bg-white/[0.025]
                                        last:border-b-0
                                        md:border-b-0
                                        md:border-r
                                        md:last:border-r-0
                                        md:p-8
                                    "
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="text-xs text-zinc-700">
                                            {item.number}
                                        </span>

                                        <div className="
                                            flex h-10 w-10
                                            items-center justify-center
                                            rounded-full
                                            border border-white/10
                                            bg-white/[0.03]
                                            transition-all
                                            group-hover:border-blue-400/30
                                            group-hover:bg-blue-400/[0.05]
                                        ">
                                            <Icon
                                                size={18}
                                                className="text-blue-400"
                                            />
                                        </div>

                                    </div>

                                    <h3 className="mt-10 text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
}
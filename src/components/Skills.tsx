import type React from "react";

import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Server,
    Terminal,
} from "lucide-react";

const skillGroups = [
    {
        icon: Code2,
        title: "Languages",
        skills: [
            "Python",
            "JavaScript",
            "TypeScript",
            "Java",
            "C++",
        ],
    },
    {
        icon: Server,
        title: "Backend",
        skills: [
            "Django",
            "Django REST Framework",
            "Node.js",
            "NestJS",
            "REST API",
        ],
    },
    {
        icon: Globe,
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "Tailwind CSS",
        ],
    },
    {
        icon: Database,
        title: "Database",
        skills: [
            "PostgreSQL",
            "MySQL",
            "MariaDB",
            "MongoDB",
            "Amazon RDS",
        ],
    },
    {
        icon: CloudIcon,
        title: "Cloud & DevOps",
        skills: [
            "AWS",
            "Docker",
            "GitHub Actions",
            "CloudFormation",
            "Terraform",
        ],
    },
    {
        icon: GitBranch,
        title: "Tools",
        skills: [
            "Git",
            "GitHub",
            "Linux",
            "VS Code",
            "AWS CLI",
        ],
    },
];

function CloudIcon(props: React.ComponentProps<typeof Server>) {
    return <Server {...props} />;
}

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">

                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[0.4fr_1.6fr]">

                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                            Skills
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                            Les outils que j'utilise pour
                            <span className="text-zinc-600">
                                {" "}construire.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                            Une stack orientée développement logiciel, backend,
                            Cloud et automatisation.
                        </p>
                    </div>

                </div>

                {/* Skills grid */}
                <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div
                                key={group.title}
                                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                        <Icon
                                            size={19}
                                            className="text-blue-400"
                                        />
                                    </div>

                                    <span className="text-xs text-zinc-700">
                                        0{skillGroups.indexOf(group) + 1}
                                    </span>
                                </div>

                                <h3 className="mt-7 text-xl font-semibold text-white">
                                    {group.title}
                                </h3>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-colors group-hover:text-zinc-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
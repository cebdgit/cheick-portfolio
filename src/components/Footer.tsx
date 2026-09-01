import { ArrowUp } from "lucide-react";

function LinkedInIcon({ size = 15 }: { size?: number }) {
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

function GitHubIcon({ size = 15 }: { size?: number }) {
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

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="container-custom py-8">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>
                        <p className="text-sm font-semibold text-white">
                            CD.
                        </p>

                        <p className="mt-1 text-xs text-zinc-600">
                            Software Developer · Cloud · DevOps
                        </p>
                    </div>

                    <div className="flex items-center gap-3">

                        <a
                            href="https://github.com/cebdgit"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:text-white"
                        >
                            <GitHubIcon size={15} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/cheick-el-diarra-480625388"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:text-white"
                        >
                            <LinkedInIcon size={15} />
                        </a>

                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:text-white"
                        >
                            <ArrowUp size={15} />
                        </a>

                    </div>

                </div>

                <div className="mt-8 border-t border-white/5 pt-6">
                    <p className="text-xs text-zinc-700">
                        © {new Date().getFullYear()} Cheick Diarra. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
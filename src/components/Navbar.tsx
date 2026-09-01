"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
    { name: "À propos", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Compétences", href: "#skills" },
    { name: "Cloud", href: "#cloud" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="container-custom px-3 pt-4 sm:px-4">
                <nav
                    className="
                        flex items-center justify-between
                        rounded-full
                        border border-white/10
                        bg-zinc-950/80
                        px-4 py-3
                        shadow-2xl shadow-black/20
                        backdrop-blur-xl
                        sm:px-5
                    "
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={() => setOpen(false)}
                        className="group shrink-0 text-lg font-bold tracking-tight text-white"
                    >
                        CD<span className="text-blue-400 transition-colors group-hover:text-blue-300">.</span>
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-6 lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="
                                    relative py-2
                                    text-sm text-zinc-400
                                    transition-colors
                                    hover:text-white
                                "
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-2 md:flex">

                        <a
                            href="#contact"
                            className="
                                rounded-full
                                bg-black/10
                                px-5 py-2.5
                                text-sm font-medium
                                text-zinc-950
                                transition-all
                                hover:scale-105
                                hover:bg-zinc-200
                            "
                        >
                            Parlons-en
                        </a>

                        <a
                            href="/cv/DiarraCheick_CV_vf.pdf"
                            download="DiarraCheick_CV_vf.pdf"
                            className="
                                flex items-center gap-2
                                rounded-full
                                border border-white/10
                                px-5 py-2.5
                                text-sm font-medium
                                text-white
                                transition-all
                                hover:border-white/20
                                hover:bg-white/5
                            "
                        >
                            <Download size={15} />
                            CV
                        </a>

                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-full
                            border border-white/10
                            text-zinc-300
                            transition-colors
                            hover:bg-white/5
                            hover:text-white
                            md:hidden
                        "
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={open}
                    >
                        {open ? <X size={19} /> : <Menu size={19} />}
                    </button>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="
                                mt-2
                                overflow-hidden
                                rounded-3xl
                                border border-white/10
                                bg-zinc-950/95
                                p-5
                                shadow-2xl
                                backdrop-blur-xl
                                md:hidden
                            "
                        >
                            <div className="flex flex-col">

                                {navItems.map((item, index) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="
                                            border-b border-white/5
                                            py-4
                                            text-sm text-zinc-300
                                            transition-colors
                                            last:border-0
                                            hover:text-white
                                        "
                                    >
                                        <span className="mr-3 text-xs text-zinc-700">
                                            0{index + 1}
                                        </span>
                                        {item.name}
                                    </a>
                                ))}

                                <div className="mt-4 grid grid-cols-2 gap-2">

                                    <a
                                        href="#contact"
                                        onClick={() => setOpen(false)}
                                        className="
                                            rounded-full
                                            bg-white
                                            px-4 py-3
                                            text-center
                                            text-sm font-medium
                                            text-zinc-950
                                        "
                                    >
                                        Parlons-en
                                    </a>

                                    <a
                                        href="/cv/DiarraCheick_CV_vf.pdf"
                                        download="DiarraCheick_CV_vf.pdf"
                                        className="
                                            flex items-center justify-center gap-2
                                            rounded-full
                                            border border-white/10
                                            px-4 py-3
                                            text-sm text-white
                                        "
                                    >
                                        <Download size={15} />
                                        CV
                                    </a>

                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
import { Link } from '@inertiajs/react';
import { login, register } from '@/routes';

export default function Navbar() {
    return (
        <nav className="border-b border-glenride-slate-800 bg-glenride-slate-900/90 py-4 backdrop-blur-md ">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    {/* Logo Symbol - Waveform */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-resonance-teal/20 text-resonance-teal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.8 2.3A.3.3 0 0 0 5 2h14a.3.3 0 0 0 .2.3l-7 15a.3.3 0 0 0-.4 0l-7-15z" className="opacity-0" /> {/* Spacer */}
                            <path d="M2 10v3" />
                            <path d="M6 8v7" />
                            <path d="M10 5v13" />
                            <path d="M14 6v11" />
                            <path d="M18 9v5" />
                            <path d="M22 10v3" />
                        </svg>
                    </div>
                    <span className="font-serif text-xl font-bold tracking-tight text-white">
                        Resonance <span className="font-mono text-sm font-normal text-slate-400">by Glenride</span>
                    </span>
                </div>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#product" className="text-sm font-medium text-slate-300 transition hover:text-resonance-teal">Product</Link>
                    <Link href="#use-cases" className="text-sm font-medium text-slate-300 transition hover:text-resonance-teal">Use Cases</Link>
                    <Link href="#technology" className="text-sm font-medium text-slate-300 transition hover:text-resonance-teal">Technology</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href={login().url}
                        className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 hover:text-white"
                    >
                        Log in
                    </Link>
                    <Link
                        href={register().url}
                        className="rounded-full bg-resonance-teal px-5 py-2 text-sm font-bold text-glenride-slate-900 transition hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}

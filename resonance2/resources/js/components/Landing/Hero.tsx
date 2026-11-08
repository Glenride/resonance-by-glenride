import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-glenride-slate-900 pb-20 pt-20 text-center lg:pb-32 lg:pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 100 50 50 T 100 50" stroke="url(#gradient)" strokeWidth="0.5" fill="none" />
                    <path d="M0 60 Q 30 110 60 60 T 100 60" stroke="url(#gradient)" strokeWidth="0.5" fill="none" />
                    <path d="M0 40 Q 20 90 40 40 T 100 40" stroke="url(#gradient)" strokeWidth="0.5" fill="none" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-6 inline-flex items-center rounded-full border border-resonance-teal/30 bg-resonance-teal/10 px-4 py-1.5 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-resonance-teal animate-pulse mr-2"></span>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-resonance-teal">
                            Active Beacon Protocol v1.0
                        </span>
                    </div>

                    <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
                        The Signal in <br />
                        <span className="bg-gradient-to-r from-resonance-teal to-cyan-200 bg-clip-text text-transparent">
                            The Sound.
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
                        Turn any broadcast into a smart beacon. Resonance embeds imperceptible trigger data into standard audio, allowing mobile devices to react in real-time.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/demo"
                            className="w-full rounded-full bg-resonance-teal px-8 py-4 text-base font-bold text-glenride-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] sm:w-auto"
                        >
                            Run Platform Demo
                        </Link>
                        <Link
                            href="/docs"
                            className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition hover:bg-slate-800 sm:w-auto"
                        >
                            <span>Read Documentation</span>
                        </Link>
                    </div>
                </div>

                {/* Dashboard Mockup Placeholder */}
                <div className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-slate-800/60 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-xl lg:mt-28">
                    <div className="absolute -inset-1 blur-lg bg-gradient-to-br from-resonance-teal/20 to-transparent opacity-50 rounded-xl"></div>
                    <div className="relative overflow-hidden rounded-lg bg-glenride-slate-800 aspect-[16/9] flex items-center justify-center border border-slate-700">
                        <div className="text-center p-8">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <path d="M3 9h18" />
                                    <path d="M9 21V9" />
                                </svg>
                            </div>
                            <p className="font-mono text-slate-500">System Interface Placeholder</p>
                            <p className="text-sm text-slate-600">Simulated Dashboard Visualization</p>
                        </div>

                        {/* Fake UI Elements for visual texture */}
                        <div className="absolute top-4 left-4 right-4 h-8 bg-slate-900/50 rounded flex items-center px-3 space-x-2">
                            <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                            <div className="h-2 w-2 rounded-full bg-amber-500/50"></div>
                            <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

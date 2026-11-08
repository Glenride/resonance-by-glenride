import { TrendingUp, Users, BarChart3 } from 'lucide-react';

export default function ManageSection() {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-20">
                    {/* Graph Visual */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                            {/* Floating metric card */}
                            <div className="absolute -right-4 -top-6 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl">
                                <p className="text-xs text-slate-500 mb-1">Total Reaches</p>
                                <p className="text-2xl font-bold text-glenride-slate-900">$8,200</p>
                                <p className="text-xs text-green-600 flex items-center gap-1">
                                    <TrendingUp className="h-3 w-3" />
                                    +12.5%
                                </p>
                            </div>

                            <div className="relative">
                                {/* Header */}
                                <div className="mb-8 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                                        <BarChart3 className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-glenride-slate-900">Audience Reach</p>
                                        <p className="text-sm text-slate-500">Last 30 days</p>
                                    </div>
                                </div>

                                {/* Line Graph Area */}
                                <div className="relative h-48">
                                    <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        <line x1="0" y1="30" x2="300" y2="30" stroke="#e2e8f0" strokeWidth="1" />
                                        <line x1="0" y1="60" x2="300" y2="60" stroke="#e2e8f0" strokeWidth="1" />
                                        <line x1="0" y1="90" x2="300" y2="90" stroke="#e2e8f0" strokeWidth="1" />

                                        {/* Area fill */}
                                        <path
                                            d="M0,100 C30,90 60,70 90,60 C120,50 150,65 180,45 C210,25 240,35 270,20 L300,15 L300,120 L0,120 Z"
                                            fill="url(#areaGradient)"
                                        />

                                        {/* Line */}
                                        <path
                                            d="M0,100 C30,90 60,70 90,60 C120,50 150,65 180,45 C210,25 240,35 270,20 L300,15"
                                            stroke="#22d3ee"
                                            strokeWidth="3"
                                            fill="none"
                                        />

                                        {/* Current point */}
                                        <circle cx="270" cy="20" r="6" fill="white" stroke="#22d3ee" strokeWidth="3" />

                                        <defs>
                                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Bottom stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4">
                                    <div className="rounded-xl bg-slate-50 p-4 text-center">
                                        <p className="font-bold text-glenride-slate-900">2.4M</p>
                                        <p className="text-xs text-slate-500">Impressions</p>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-4 text-center">
                                        <p className="font-bold text-glenride-slate-900">847K</p>
                                        <p className="text-xs text-slate-500">Synced</p>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-4 text-center">
                                        <p className="font-bold text-glenride-slate-900">35.2%</p>
                                        <p className="text-xs text-slate-500">Conversion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-glenride-slate-900 md:text-4xl lg:text-5xl">
                            Manage Your Broadcast<br />
                            <span className="text-resonance-teal-dark">That No One Can Imagine</span>
                        </h2>
                        <p className="mb-8 max-w-lg text-lg text-slate-600 leading-relaxed">
                            Deploy acoustic triggers to millions of listeners while maintaining complete control. Our invisible protocol works with your existing broadcast infrastructure without any modification.
                        </p>
                        <button className="rounded-full bg-gradient-to-r from-resonance-teal to-cyan-400 px-8 py-4 font-bold text-glenride-slate-900 shadow-lg transition hover:shadow-xl hover:shadow-resonance-teal/20">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Activity, Radio, Zap } from 'lucide-react';

export default function StatsSection() {
    return (
        <section className="relative bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-glenride-slate-900 md:text-4xl lg:text-5xl">
                            Easy & Familiar<br />
                            <span className="text-resonance-teal-dark">Realtime Insights</span>
                        </h2>
                        <p className="mb-8 max-w-lg text-lg text-slate-600 leading-relaxed">
                            Track attribution signals in real-time across every channel. Our acoustic protocol delivers instant analytics that help you understand broadcast-to-device engagement like never before.
                        </p>
                        <button className="rounded-full bg-gradient-to-r from-resonance-teal to-cyan-400 px-8 py-4 font-bold text-glenride-slate-900 shadow-lg transition hover:shadow-xl hover:shadow-resonance-teal/20">
                            Explore Dashboard
                        </button>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Attribution Accuracy Card */}
                            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:border-resonance-teal/30 hover:shadow-xl">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-resonance-teal/20 to-cyan-100">
                                        <Activity className="h-5 w-5 text-resonance-teal-dark" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">Attribution</span>
                                </div>
                                <div className="text-4xl font-bold text-glenride-slate-900">98<span className="text-2xl">%</span></div>
                                <p className="mt-2 text-sm text-slate-500">Signal accuracy rate</p>
                            </div>

                            {/* Sync Rate Card */}
                            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:border-resonance-teal/30 hover:shadow-xl">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-50">
                                        <Radio className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">Devices</span>
                                </div>
                                <div className="text-4xl font-bold text-glenride-slate-900">30<span className="text-2xl">x</span></div>
                                <p className="mt-2 text-sm text-slate-500">Faster sync speed</p>
                            </div>

                            {/* Latency Card - Full Width */}
                            <div className="col-span-2 group rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg transition hover:border-resonance-teal/30 hover:shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-50">
                                                <Zap className="h-5 w-5 text-amber-600" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-600">Response Latency</span>
                                        </div>
                                        <div className="text-4xl font-bold text-glenride-slate-900">&lt;20<span className="text-2xl">ms</span></div>
                                    </div>
                                    {/* Mini Chart */}
                                    <div className="flex items-end gap-1 h-16">
                                        {[40, 60, 35, 80, 55, 70, 45, 90].map((height, i) => (
                                            <div
                                                key={i}
                                                className="w-2 rounded-full bg-gradient-to-t from-resonance-teal to-cyan-300"
                                                style={{ height: `${height}%` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

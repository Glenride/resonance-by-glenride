export default function DeviceSyncSection() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
                    {/* Dashboard Visual */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-xl">
                            {/* Floating decorative elements */}
                            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 shadow-lg" />
                            <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-gradient-to-br from-resonance-teal/20 to-cyan-50 shadow-lg" />

                            <div className="relative">
                                {/* Chart Header */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500">Signal Attribution</p>
                                        <p className="text-2xl font-bold text-glenride-slate-900">12,847 <span className="text-sm font-normal text-green-600">+24%</span></p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Weekly</span>
                                        <span className="rounded-full bg-resonance-teal/10 px-3 py-1 text-xs font-medium text-resonance-teal-dark">Monthly</span>
                                    </div>
                                </div>

                                {/* Bar Chart */}
                                <div className="flex items-end justify-between gap-3 h-48">
                                    {[
                                        { h1: 40, h2: 30, label: 'Mon' },
                                        { h1: 65, h2: 45, label: 'Tue' },
                                        { h1: 55, h2: 35, label: 'Wed' },
                                        { h1: 80, h2: 50, label: 'Thu' },
                                        { h1: 70, h2: 55, label: 'Fri' },
                                        { h1: 90, h2: 60, label: 'Sat' },
                                        { h1: 75, h2: 45, label: 'Sun' },
                                    ].map((bar, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 flex-1">
                                            <div className="flex items-end gap-1 flex-1 w-full">
                                                <div
                                                    className="flex-1 rounded-t-lg bg-gradient-to-t from-resonance-teal to-cyan-400"
                                                    style={{ height: `${bar.h1}%` }}
                                                />
                                                <div
                                                    className="flex-1 rounded-t-lg bg-gradient-to-t from-purple-500 to-purple-300"
                                                    style={{ height: `${bar.h2}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-slate-400">{bar.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Legend */}
                                <div className="mt-6 flex items-center justify-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-resonance-teal" />
                                        <span className="text-sm text-slate-500">TV</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-purple-500" />
                                        <span className="text-sm text-slate-500">Radio</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-glenride-slate-900 md:text-4xl lg:text-5xl">
                            Your Devices are<br />
                            <span className="text-resonance-teal-dark">Linked to the Broadcast</span>
                        </h2>
                        <p className="mb-8 max-w-lg text-lg text-slate-600 leading-relaxed">
                            Monitor cross-channel attribution in real-time. Resonance creates an invisible bridge between your broadcast content and every listening device, giving you complete visibility into engagement.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <button className="rounded-full bg-gradient-to-r from-resonance-teal to-cyan-400 px-8 py-4 font-bold text-glenride-slate-900 shadow-lg transition hover:shadow-xl hover:shadow-resonance-teal/20">
                                View Analytics
                            </button>
                            <button className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 font-bold text-glenride-slate-900 transition hover:border-resonance-teal hover:bg-slate-50">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

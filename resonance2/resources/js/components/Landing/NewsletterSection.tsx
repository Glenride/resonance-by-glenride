import { useState } from 'react';
import { Mail, CheckCircle, Zap, Shield, Radio } from 'lucide-react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');

    return (
        <section className="bg-gradient-to-br from-glenride-slate-900 via-glenride-slate-800 to-glenride-slate-900 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="mb-4 inline-flex items-center rounded-full border border-resonance-teal/30 bg-resonance-teal/10 px-4 py-1.5">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-resonance-teal">
                                Developer Access
                            </span>
                        </div>
                        <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                            Stay Updated with Our<br />
                            <span className="bg-gradient-to-r from-resonance-teal to-cyan-200 bg-clip-text text-transparent">
                                Weekly Newsletter
                            </span>
                        </h2>
                        <p className="mb-8 max-w-md text-lg text-slate-400">
                            Get early access to SDK releases, case studies, and industry insights. Join 2,000+ developers building with Resonance.
                        </p>

                        {/* Email Form */}
                        <div className="relative max-w-md">
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-full border border-slate-700 bg-slate-800/50 py-4 pl-12 pr-4 text-white placeholder-slate-500 backdrop-blur-sm focus:border-resonance-teal focus:outline-none focus:ring-2 focus:ring-resonance-teal/20"
                                    />
                                </div>
                                <button className="rounded-full bg-gradient-to-r from-resonance-teal to-cyan-400 px-8 py-4 font-bold text-glenride-slate-900 shadow-lg transition hover:shadow-xl hover:shadow-resonance-teal/20">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Benefits Card */}
                    <div className="flex-1 w-full max-w-md">
                        <div className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 backdrop-blur-xl">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/30">
                                    <Radio className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Bring Your Team Up</p>
                                    <p className="text-sm text-slate-400">Full platform access</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: Zap, text: 'SDK access & documentation' },
                                    { icon: Shield, text: 'Enterprise-grade security' },
                                    { icon: CheckCircle, text: 'Priority support channel' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-resonance-teal/20">
                                            <item.icon className="h-4 w-4 text-resonance-teal" />
                                        </div>
                                        <span className="text-slate-300">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex items-center gap-3 rounded-xl bg-slate-900/50 p-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="h-8 w-8 rounded-full border-2 border-slate-800 bg-gradient-to-br from-slate-600 to-slate-700"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400">
                                    <span className="font-bold text-white">2,847</span> developers joined this month
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

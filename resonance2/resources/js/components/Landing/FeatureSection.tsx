import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureSectionProps {
    title: string;
    description: string;
    children?: ReactNode;
    reversed?: boolean;
    badge?: string;
}

export default function FeatureSection({ title, description, children, reversed = false, badge }: FeatureSectionProps) {
    return (
        <section className="py-20 lg:py-28 bg-glenride-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col items-center gap-12 lg:gap-20 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {badge && (
                            <div className="mb-4 inline-flex items-center rounded-md bg-glenride-slate-800 px-3 py-1 border border-slate-700">
                                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-resonance-teal">
                                    {badge}
                                </span>
                            </div>
                        )}
                        <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                            {title}
                        </h2>
                        <p className="mb-8 text-lg text-slate-400 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="text-sm font-bold text-resonance-teal hover:text-cyan-300 flex items-center gap-2 group">
                                Learn more
                                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Visual Content Placeholder */}
                    <div className="flex-1 w-full">
                        {children || (
                            <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl border border-slate-700/50 bg-glenride-slate-800/50 p-8 shadow-xl backdrop-blur-sm flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-resonance-teal/5 to-transparent rounded-2xl"></div>
                                <span className="font-mono text-slate-600">Visual Placeholder</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

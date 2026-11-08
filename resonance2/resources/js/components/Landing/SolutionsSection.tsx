import { MonitorPlay, Radio, PartyPopper, Store } from 'lucide-react';

interface SolutionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function SolutionCard({ icon, title, description }: SolutionCardProps) {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-resonance-teal/30 hover:shadow-xl hover:shadow-resonance-teal/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition group-hover:bg-gradient-to-br group-hover:from-resonance-teal group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-resonance-teal/30">
                {icon}
            </div>
            <h3 className="mb-3 font-serif text-xl font-bold text-glenride-slate-900 transition group-hover:text-resonance-teal-dark">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default function SolutionsSection() {
    const solutions = [
        {
            icon: <MonitorPlay className="h-6 w-6" />,
            title: 'Television Attribution',
            description: 'Connect TV airings to digital conversions. Know exactly which ads drive app downloads and website visits.',
        },
        {
            icon: <Radio className="h-6 w-6" />,
            title: 'Radio Engagement',
            description: 'Transform radio spots into interactive moments. Listeners tap their phones to unlock offers in real-time.',
        },
        {
            icon: <PartyPopper className="h-6 w-6" />,
            title: 'Live Events',
            description: 'Sync audience devices at concerts, sports events, and conferences for instant engagement.',
        },
        {
            icon: <Store className="h-6 w-6" />,
            title: 'Retail Beacons',
            description: 'Turn in-store audio into smart triggers for promotions, loyalty rewards, and wayfinding.',
        },
    ];

    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-glenride-slate-900 md:text-4xl lg:text-5xl">
                        Our Solution For Your Business
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Acoustic triggers that bridge the gap between broadcast and digital engagement across every channel.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.title} {...solution} />
                    ))}
                </div>
            </div>
        </section>
    );
}

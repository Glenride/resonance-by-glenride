import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    linkText?: string;
    linkUrl?: string;
}

export default function ServiceCard({ title, description, icon: Icon, linkText = "Learn More", linkUrl = "#" }: ServiceCardProps) {
    return (
        <div className="group rounded-xl border border-slate-800 bg-glenride-slate-800/20 p-8 transition hover:border-resonance-teal/30 hover:bg-glenride-slate-800/40">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-glenride-slate-800 border border-slate-700 text-resonance-teal transition group-hover:bg-resonance-teal group-hover:text-glenride-slate-900 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <Icon size={24} />
            </div>
            <h3 className="mb-3 font-serif text-xl font-bold text-white group-hover:text-resonance-teal transition-colors">
                {title}
            </h3>
            <p className="mb-6 text-slate-400 group-hover:text-slate-300 transition-colors">
                {description}
            </p>
            <a href={linkUrl} className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-resonance-teal transition-colors">
                {linkText} <span className="ml-1 text-xs">↗</span>
            </a>
        </div>
    );
}

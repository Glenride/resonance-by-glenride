export default function PartnersSection() {
    const partners = [
        { name: 'servicenow', display: 'ServiceNow' },
        { name: 'heroku', display: 'Heroku' },
        { name: 'github', display: 'GitHub' },
        { name: 'stripe', display: 'Stripe' },
        { name: 'jotform', display: 'JotForm' },
    ];

    return (
        <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-6">
                <p className="mb-10 text-center font-serif text-lg text-slate-500">
                    Working with <span className="font-semibold text-glenride-slate-900">World-Class Partners!</span>
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex items-center gap-2 text-slate-400 transition hover:text-glenride-slate-900"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 transition group-hover:bg-resonance-teal/20">
                                <span className="text-xs font-bold">{partner.display.charAt(0)}</span>
                            </div>
                            <span className="font-mono text-sm font-medium tracking-tight">
                                {partner.display}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

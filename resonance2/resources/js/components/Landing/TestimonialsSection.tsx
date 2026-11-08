import { Star } from 'lucide-react';

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number;
}

function TestimonialCard({ name, role, company, quote, rating }: TestimonialCardProps) {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-resonance-teal/30 hover:shadow-xl hover:shadow-resonance-teal/5">
            {/* Stars */}
            <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
                    />
                ))}
            </div>

            {/* Quote */}
            <p className="mb-6 text-slate-600 leading-relaxed">"{quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300" />
                <div>
                    <p className="font-bold text-glenride-slate-900">{name}</p>
                    <p className="text-sm text-slate-500">{role}, {company}</p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const testimonials: TestimonialCardProps[] = [
        {
            name: 'Maria Rakovecka',
            role: 'VP Marketing',
            company: 'MediaCorp',
            quote: 'Resonance transformed our TV attribution. We finally know which spots drive app installs and can optimize spend in real-time.',
            rating: 5,
        },
        {
            name: 'Jake Clayton',
            role: 'CTO',
            company: 'StreamAds',
            quote: 'The SDK integration took 2 hours. Within a week we had cross-platform attribution data we\'d been chasing for years.',
            rating: 5,
        },
        {
            name: 'Kayla Marcus',
            role: 'Director of Digital',
            company: 'RetailNext',
            quote: 'In-store audio beacons changed everything. Customer engagement is up 40% since we launched with Resonance.',
            rating: 5,
        },
    ];

    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-glenride-slate-900 md:text-4xl lg:text-5xl">
                        Customer Stories
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Our customers are pushing forward with the power of sound. See how Resonance helps them achieve what they thought was impossible.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}

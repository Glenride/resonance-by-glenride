import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-glenride-slate-900 border-t border-slate-800 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-resonance-teal/20 text-resonance-teal">
                                <span className="block h-2 w-2 rounded-full bg-resonance-teal"></span>
                            </div>
                            <span className="font-serif text-lg font-bold text-white">
                                Resonance
                            </span>
                        </div>
                        <p className="mb-8 text-slate-400 text-sm leading-relaxed">
                            The signal in the sound. Turning passive broadcasts into active digital experiences through high-fidelity acoustic data protocols.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-8 w-8 rounded-full bg-slate-800 hover:bg-resonance-teal transition-colors cursor-pointer border border-slate-700 hover:border-resonance-teal"></div>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-white">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Documentation</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">API Reference</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">SDK Downloads</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Case Studies</a></li>
                        </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h4 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-white">Use Cases</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Television Attribution</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Radio Engagement</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Live Events</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Retail Beacons</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-white">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">About Glenride</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-resonance-teal transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 border-t border-slate-800 pt-8 text-center md:flex md:justify-between md:text-left">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Glenride Inc. All rights reserved.
                    </p>
                    <div className="mt-4 flex justify-center gap-6 md:mt-0 text-sm text-slate-500">
                        <span>Hq: New York</span>
                        <span>v2.0.0 (Beta)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import { ShieldCheck, Cpu, Database, Zap, Lock, Code2, Layers, Server } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="space-y-6 py-6 animate-in fade-in duration-500">
            {/* Simple Header matched to Dashboard */}
            <div className="border-b border-gray-200 pb-5">
                <h1 className="text-3xl font-bold leading-tight text-gray-900 font-serif">About the System</h1>
                <p className="mt-2 text-sm text-gray-500">
                    System architecture, security protocols, and route protection overview.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Route Protection Card - Simplified */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-md bg-gray-50 text-gray-600">
                            <ShieldCheck size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Route Protection</h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        This application implements a robust multi-layered security model. 
                        The <code>proxy.ts</code> middleware acts as a gatekeeper, intercepting every request 
                        to the <code>(dashboard)</code> group.
                    </p>
                    <div className="space-y-3 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <Lock size={16} className="text-gray-400" />
                            <span>Cookie-based session validation</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <Server size={16} className="text-gray-400" />
                            <span>Server-side redirect logic</span>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Card - Simplified */}
                <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-md bg-gray-50 text-gray-600">
                            <Cpu size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Core Architecture</h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Built with a focus on performance and maintainability using a modern tech stack.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded border border-gray-100 bg-gray-50/50 p-2 flex items-center gap-2">
                            <Code2 size={14} className="text-gray-400" />
                            <span className="text-xs font-medium text-gray-700">Next.js 16</span>
                        </div>
                        <div className="rounded border border-gray-100 bg-gray-50/50 p-2 flex items-center gap-2">
                            <Layers size={14} className="text-gray-400" />
                            <span className="text-xs font-medium text-gray-700">TanStack v8</span>
                        </div>
                        <div className="rounded border border-gray-100 bg-gray-50/50 p-2 flex items-center gap-2">
                            <Database size={14} className="text-gray-400" />
                            <span className="text-xs font-medium text-gray-700">Prisma Ready</span>
                        </div>
                        <div className="rounded border border-gray-100 bg-gray-50/50 p-2 flex items-center gap-2">
                            <Zap size={14} className="text-gray-400" />
                            <span className="text-xs font-medium text-gray-700">Tailwind 4</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="rounded-lg bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Implementation Details</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    Authentication is handled via a custom middleware layer that validates JSON Web Tokens 
                    or session cookies. Data fetching utilizes server components with high-performance 
                    filtering logic in <code>app/api/users/route.ts</code>.
                </p>
            </div>
        </div>
    );
}

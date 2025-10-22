import React from "react";

// SENDU Coupon Display Page (TailwindCSS + React)
// Shows static coupon codes with access buttons — non-editable fields

export default function SenduCouponPage() {
    const partners = [
        {
            id: "bird",
            name: "BirdProxies",
            logo: "/logos/bird.png",
            coupon: "BIRD-SENDU-2025",
            url: "https://birdproxies.com",
        },
        {
            id: "flamingo",
            name: "FlamingoProxies",
            logo: "/logos/flamingo.png",
            coupon: "FLAMINGO-2025",
            url: "https://flamingoproxies.com",
        },
        {
            id: "orbit",
            name: "OrbitServers",
            logo: "/logos/orbit.png",
            coupon: "ORBIT-SENDU-2025",
            url: "https://orbitservers.com",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#090917] via-[#0d0c24] to-[#1a133b] text-white font-sans">
            {/* Header */}
            <header className="border-b border-white/10 py-5 px-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold">
                    S
                </div>
                <h1 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    SENDU Coupon
                </h1>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
                {/* Proxy Service */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-violet-300">Proxy Service:</h2>
                    <div className="space-y-6">
                        {partners.slice(0, 2).map((p) => (
                            <div
                                key={p.id}
                                className="flex items-center justify-between bg-[#121025]/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_0_20px_rgba(80,40,200,0.15)] hover:shadow-[0_0_25px_rgba(130,80,255,0.3)] transition"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center w-40">
                                        <div className="h-14 flex items-center justify-center text-lg font-bold text-violet-300">
                                            {p.name}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-slate-300 whitespace-nowrap">Coupon code:</span>
                                        <div className="bg-[#1c1a35] border border-violet-500/40 rounded-md px-3 py-2 text-sm w-48 text-center select-all">
                                            {p.coupon}
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition text-sm font-medium"
                                >
                                    Visit Site
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Virtual Server */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-violet-300">Virtual Server:</h2>
                    <div className="flex items-center justify-between bg-[#121025]/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_0_20px_rgba(80,40,200,0.15)] hover:shadow-[0_0_25px_rgba(130,80,255,0.3)] transition">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center w-40">
                                <div className="h-14 flex items-center justify-center text-lg font-bold text-violet-300">
                                    {partners[2].name}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-300 whitespace-nowrap">Coupon code:</span>
                                <div className="bg-[#1c1a35] border border-violet-500/40 rounded-md px-3 py-2 text-sm w-48 text-center select-all">
                                    {partners[2].coupon}
                                </div>
                            </div>
                        </div>
                        <a
                            href={partners[2].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 transition text-sm font-medium"
                        >
                            Visit Site
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

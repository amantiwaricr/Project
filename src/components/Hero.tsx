import { Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-neutral-700/20 border border-neutral-600/30 rounded-full px-4 py-2 text-neutral-400 text-sm font-medium">
            <span className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></span>
            New Release
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Infinix Hot
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
              Pro Max
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Rs 45,000</h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Experience the future of mobile technology. Powerful performance, stunning display, and exceptional camera capabilities in one revolutionary device.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#features" className="bg-neutral-800 hover:bg-neutral-700 transition-colors px-8 py-4 rounded-lg font-semibold">
              Explore Features
            </a>
            <a href="#specs" className="border border-neutral-600 hover:border-neutral-400 transition-colors px-8 py-4 rounded-lg font-semibold">
              View Specs
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-3xl opacity-10"></div>
          <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-3xl p-12 shadow-2xl border border-neutral-700">
            <Smartphone className="w-48 h-48 md:w-64 md:h-64 text-gray-300" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

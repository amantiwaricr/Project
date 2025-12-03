import { useState } from 'react';
import { ChevronLeft, ChevronRight, Palette, Sparkles, Zap } from 'lucide-react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % 5);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + 5) % 5);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const images = [
    { id: 1, color: 'from-zinc-700 to-zinc-900', name: 'Carbon Black', icon: <Sparkles className="w-6 h-6" /> },
    { id: 2, color: 'from-neutral-700 to-neutral-900', name: 'Graphite Grey', icon: <Palette className="w-6 h-6" /> },
    { id: 3, color: 'from-gray-600 to-zinc-700', name: 'Steel Shadow', icon: <Zap className="w-6 h-6" /> },
    { id: 4, color: 'from-slate-700 to-slate-900', name: 'Space Titanium', icon: <Palette className="w-6 h-6" /> },
    { id: 5, color: 'from-neutral-800 to-black', name: 'Obsidian Dark', icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Finishes</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose your style in elegant monochrome shades</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((img) => (
                <div key={img.id} className="min-w-full flex justify-center py-12">
                  <div className={`relative bg-gradient-to-br ${img.color} rounded-3xl w-64 h-96 md:w-80 md:h-[500px] shadow-2xl border border-white/5 flex items-center justify-center`}>
                    <div className="absolute top-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                    <span className="text-white/20 text-8xl font-bold">X</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur shadow-lg">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur shadow-lg">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex justify-center gap-6 mt-12">
            {images.map((img, i) => (
              <button key={img.id} onClick={() => goToSlide(i)} className={`flex flex-col items-center transition-all ${currentIndex === i ? 'scale-110' : 'opacity-50 hover:opacity-90'}`}>                
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${img.color} border ${currentIndex===i ? 'border-white' : 'border-white/10'} shadow-md flex items-center justify-center`}>                  
                  <span className="text-xs text-white/90">{img.icon}</span>
                </div>
                <span className="text-sm text-gray-300 mt-2 hidden md:block">{img.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

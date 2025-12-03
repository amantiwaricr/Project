import { useState } from 'react'

export default function Specifications() {
  const [activeTab, setActiveTab] = useState('display')

  const categories = [
    {
      id: 'display', name: 'Display', specs: [
        { label: 'Screen Size', value: '6.7 inches' },
        { label: 'Resolution', value: '2796 x 1290 pixels' },
        { label: 'Technology', value: 'Super Retina XDR OLED' },
        { label: 'Refresh Rate', value: 'Adaptive 120Hz (1-120Hz)' },
        { label: 'Brightness', value: '2000 nits peak' },
        { label: 'HDR Support', value: 'HDR10+, Dolby Vision' },
        { label: 'Pixel Density', value: '460 ppi' },
        { label: 'Protection', value: 'Ceramic Shield glass' }
      ]
    },
    {
      id: 'performance', name: 'Performance', specs: [
        { label: 'Processor', value: 'A17 Pro (3nm)' },
        { label: 'CPU', value: '6-core (2P + 4E)' },
        { label: 'GPU', value: '6-core GPU' },
        { label: 'Neural Engine', value: '16-core' },
        { label: 'RAM', value: '8GB' },
        { label: 'Storage Options', value: '256GB / 512GB / 1TB' },
        { label: 'Performance Boost', value: '20% faster than A16' },
        { label: 'AI Capabilities', value: '35 trillion ops/sec' }
      ]
    },
    {
      id: 'camera', name: 'Camera', specs: [
        { label: 'Main Camera', value: '48MP, f/1.78, sensor-shift OIS' },
        { label: 'Ultra Wide', value: '48MP, f/2.2, macro' },
        { label: 'Telephoto', value: '12MP, f/2.8, 5x optical zoom' },
        { label: 'Front Camera', value: '12MP, f/1.9' },
        { label: 'Video Recording', value: '8K at 30fps, 4K at 60fps' },
        { label: 'Stabilization', value: 'Sensor-shift + Digital' },
        { label: 'Night Mode', value: 'All cameras' },
        { label: 'Photo Formats', value: 'HEIF, RAW, ProRAW' }
      ]
    },
    {
      id: 'battery', name: 'Battery & Charging', specs: [
        { label: 'Battery Capacity', value: '5000 mAh' },
        { label: 'Video Playback', value: 'Up to 29 hours' },
        { label: 'Audio Playback', value: 'Up to 95 hours' },
        { label: 'Wired Charging', value: '65W (0-50% in 15 min)' },
        { label: 'Wireless Charging', value: '15W MagSafe' },
        { label: 'Reverse Charging', value: '5W wireless' },
        { label: 'Charging Port', value: 'USB-C (USB 3.2)' },
        { label: 'Power Adapter', value: 'Sold separately' }
      ]
    },
    {
      id: 'connectivity', name: 'Connectivity', specs: [
        { label: '5G', value: 'Sub-6GHz and mmWave' },
        { label: 'Wi-Fi', value: 'Wi-Fi 6E (802.11ax)' },
        { label: 'Bluetooth', value: '5.3' },
        { label: 'NFC', value: 'Yes, with reader mode' },
        { label: 'Ultra Wideband', value: 'UWB chip (Gen 2)' },
        { label: 'SIM', value: 'Dual SIM (nano + eSIM)' },
        { label: 'GPS', value: 'GPS, GLONASS, Galileo, QZSS' },
        { label: 'Emergency SOS', value: 'Satellite connectivity' }
      ]
    },
    {
      id: 'design', name: 'Design & Build', specs: [
        { label: 'Dimensions', value: '159.9 x 76.7 x 8.25 mm' },
        { label: 'Weight', value: '221 grams' },
        { label: 'Materials', value: 'Titanium frame, glass back' },
        { label: 'Water Resistance', value: 'IP68 (6m for 30 min)' },
        { label: 'Colors', value: '5 premium finishes' },
        { label: 'Buttons', value: 'Action button + volume' },
        { label: 'Speakers', value: 'Stereo speakers' },
        { label: 'Face ID', value: 'TrueDepth camera system' }
      ]
    }
  ]

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]

  return (
    <section id="specs" className="py-20 px-6 bg-black text-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow">Technical Specifications</h2>
          <p className="text-neutral-400 text-lg mt-2">Every detail engineered to perfection</p>
        </div>

        <div className="border border-neutral-800 rounded-2xl backdrop-blur-xl bg-neutral-900/50 shadow-xl overflow-hidden">
          <div className="flex overflow-x-auto border-b border-neutral-800">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap
                ${activeTab === cat.id 
                  ? 'text-white border-b-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                  : 'text-neutral-500 hover:text-white hover:bg-white/5'}`}
              >{cat.name}</button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-10">
            {activeCategory.specs.map((spec,i)=>(
              <div key={i} className="flex justify-between py-3 border-b border-neutral-800 group hover:bg-white/5 transition">
                <span className="text-neutral-400 group-hover:text-neutral-300">{spec.label}</span>
                <span className="font-semibold text-neutral-200 group-hover:text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-neutral-600 text-center mt-8 text-xs">Specifications may vary depending on region & configuration.</p>
      </div>
    </section>
  )
}

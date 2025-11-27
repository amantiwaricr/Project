import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Specifications from './components/Specifications';
import { useTheme } from './hooks/useTheme';
function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <Gallery />
      <Specifications />
      <footer className="bg-slate-900 dark:bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Infinix Company Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

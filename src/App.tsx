import Hero from './components/Hero';
import Impact from './components/Impact';
import Benefits from './components/Benefits';
import AboutAuthor from './components/AboutAuthor';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-amber-500/30 selection:text-slate-900">
      <Hero />
      <Impact />
      <Benefits />
      <AboutAuthor />
      <CTA />
    </div>
  );
}

export default App;

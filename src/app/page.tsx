import Hero from './components/hero';
import Problem from './components/problem/Problem';
import Trust from './components/trust/Trust';
import ExplainerSection from './components/explainer/ExplainerSection';
import Benefits from './components/benefits/Benefits';
import Featured from './components/featured/Featured';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/faq';

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Trust />
      <ExplainerSection />
      <Benefits />
      <Featured />
      <Pricing />
      <FAQ />
    </main>
  );
}
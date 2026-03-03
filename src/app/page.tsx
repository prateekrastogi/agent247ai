import Hero from './components/hero';
import Problem from './components/problem/Problem';
import Solution from './components/solution/Solution';
import Industry from './components/industry/Industry';
import Trust from './components/trust/Trust';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/faq';

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Industry />
      <Trust />
      <Pricing />
      <FAQ />
    </main>
  );
}
import Hero from './components/hero';
import Problem from './components/problem/Problem';
import Solution from './components/solution/Solution';
import Industry from './components/industry/Industry';
import Featured from './components/featured/Featured';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/faq';

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Industry />
      <Featured />
      <Pricing />
      <FAQ />
    </main>
  );
}
import { SanctuaryHeader } from '@/components/features/suites/SanctuaryHeader'; // Capital S
import { SuiteCard } from '@/components/features/suites/SuiteCard';
import { CuratedExperiences } from '@/components/features/suites/CuratedExperiences';
import { SUITES_DATA } from '@/lib/suites';

export default function SuitesPage() {
  return (
    <main className="min-h-screen">
      <SanctuaryHeader />
      
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {SUITES_DATA.map((suite) => (
          <SuiteCard key={suite.id} suite={suite} />
        ))}
      </section>

      <CuratedExperiences />
    </main>
  );
}
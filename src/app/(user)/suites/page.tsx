import { SanctuaryHeader } from '@/components/features/suites/sanctuaryHeader';
import { SuiteCard } from '@/components/features/suites/suitesCard';
import { CuratedExperiences } from '@/components/features/suites/curatedExpriences';
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
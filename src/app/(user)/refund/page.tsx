import { RefundForm } from '@/components/features/refund/RefundForm';
import RefundPolicy from '@/components/features/refund/RefundPolicy';

export default function RefundPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-10 px-4 max-w-6xl mx-auto">
        {/* Guest Services Badge */}
        <div className="mb-1 text-left px-[-20px]">
          <span className="inline-block px-2 py-1 bg-[#F5EBBB] text-[#b4a45e] text-xs font-semibold rounded-full">
            GUEST SERVICES
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-7xl text-black-900 font-bold mb-6 py-3 px- max-w-6xl mx-auto">
          Assistance & <span className="text-amber-500 py-12 px-4 max-w-6xl mx-auto">Reconciliation</span>
        </h1>

        {/* Description */}
        <p className="text-black-900 mb-1 text-xl max-w-6xl py-1 px- mx-auto">
          We understand that plans can change. Our dedicated concierge team is here <br />to ensure your transition is as smooth as your arrival.
        </p>
      </section>

      {/* Form and Policy Section */}
      <section className="px-4 max-w-6xl mx-auto pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-29">
          <RefundForm />
          <RefundPolicy />
        </div>
      </section>
    </main>
  );
}
'use client'

import { useMemo, useState } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight, Download, Ellipsis, Landmark, Plus, RotateCcw, Search, WalletCards } from 'lucide-react'

const transactions = [
  { initials: 'SM', name: 'Sofia Mendoza', ref: 'NH-2941-A', amount: 15200, type: 'Deposit', status: 'Completed', date: 'Oct 24, 2023', tone: 'lavender' },
  { initials: 'RK', name: 'Robert King', ref: 'NH-3812-C', amount: 42500, type: 'Final Payment', status: 'Pending In-Person', date: 'Oct 23, 2023', tone: 'peach' },
  { initials: 'ET', name: 'Elena Tan', ref: 'NH-1120-X', amount: 8400, type: 'Deposit', status: 'Refunded', date: 'Oct 22, 2023', tone: 'slate' },
  { initials: 'JP', name: 'James Park', ref: 'NH-2884-B', amount: 124000, type: 'Final Payment', status: 'Completed', date: 'Oct 22, 2023', tone: 'lavender' },
]

const peso = (amount: number) => `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`

export function PaymentLedger() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All Statuses')
  const filtered = useMemo(() => transactions.filter((item) => {
    const matchesQuery = `${item.name} ${item.ref}`.toLowerCase().includes(query.toLowerCase())
    const matchesStatus = status === 'All Statuses' || item.status === status
    return matchesQuery && matchesStatus
  }), [query, status])

  return (
    <section className="mx-auto w-full max-w-6xl text-zinc-900">
      <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-sienna">Financial operations</p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-zinc-900">Transaction Ledger</h1>
          <p className="mt-1 text-sm text-zinc-500">Financial performance and payment oversight for Northern Highlands.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold shadow-sm transition hover:border-brand-sienna"><Download size={14} /> Export CSV</button>
          <button className="flex items-center gap-2 rounded-lg bg-brand-sienna px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-95"><Plus size={14} /> New Invoice</button>
        </div>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-[1.6fr_1fr_1fr]">
        <MetricCard label="Total Revenue (Monthly)" value="₱1,248,500" note="+12.4% vs last month" icon={<WalletCards size={18} />} positive />
        <MetricCard label="Pending Balance" value="₱194,200" note="14 bookings requiring in-person payment" icon={<Landmark size={18} />} />
        <MetricCard label="Refund Volume" value="₱12,500" note="Low volume this period (2 requests)" icon={<RotateCcw size={18} />} />
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-zinc-100 p-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-sm font-bold">Recent Transactions <span className="ml-2 rounded-full bg-orange-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-brand-sienna">Real-time</span></h2>
          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="relative"><Search className="absolute left-3 top-2.5 text-zinc-400" size={14} /><input aria-label="Search transactions" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search guest or booking" className="w-full rounded-md border border-zinc-200 py-2 pl-9 pr-3 text-xs outline-none focus:border-brand-sienna sm:w-48" /></label>
            <select aria-label="Filter status" value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs outline-none focus:border-brand-sienna"><option>All Statuses</option><option>Completed</option><option>Pending In-Person</option><option>Refunded</option></select>
            <button className="flex items-center justify-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-xs text-zinc-600"><CalendarDays size={13} /> Last 30 Days</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-xs"><thead className="bg-[#f4f8fa] text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500"><tr>{['Guest Name', 'Booking Ref', 'Amount (PHP)', 'Type', 'Status', 'Date', 'Actions'].map((heading) => <th key={heading} className="px-5 py-3">{heading}</th>)}</tr></thead>
            <tbody className="divide-y divide-zinc-100">{filtered.map((item) => <tr key={item.ref} className="transition hover:bg-orange-50/30"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className={`flex size-7 items-center justify-center rounded-full text-[9px] font-bold ${item.tone === 'peach' ? 'bg-orange-100 text-orange-700' : item.tone === 'slate' ? 'bg-slate-100 text-slate-600' : 'bg-violet-100 text-violet-700'}`}>{item.initials}</span><span className="font-semibold">{item.name}</span></div></td><td className="px-5 py-4 font-mono text-[10px] text-zinc-500">{item.ref}</td><td className="px-5 py-4 font-bold">{peso(item.amount)}</td><td className="px-5 py-4 text-zinc-600">{item.type}</td><td className="px-5 py-4"><Status value={item.status} /></td><td className="px-5 py-4 text-zinc-500">{item.date}</td><td className="px-5 py-4 text-right"><button aria-label={`Actions for ${item.name}`} className="rounded p-1 text-zinc-500 hover:bg-zinc-100"><Ellipsis size={16} /></button></td></tr>)}</tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-100 px-5 py-4 text-[11px] text-zinc-500"><span>Showing 1 to {filtered.length} of 124 transactions</span><div className="flex gap-1"><button className="rounded bg-zinc-100 p-2"><ChevronLeft size={13} /></button><button className="rounded bg-brand-sienna px-3 py-1.5 font-bold text-white">1</button><button className="rounded bg-zinc-100 px-3 py-1.5">2</button><button className="rounded bg-zinc-100 px-3 py-1.5">3</button><button className="rounded bg-zinc-100 p-2"><ChevronRight size={13} /></button></div></div>
      </div>
      <div className="mt-8 flex justify-center gap-6 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-400"><span>◉ Secure cloud gateway</span><span>◷ Last synced: 2 mins ago</span></div>
    </section>
  )
}

function MetricCard({ label, value, note, icon, positive = false }: { label: string; value: string; note: string; icon: React.ReactNode; positive?: boolean }) { return <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><p className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-500">{label}</p><span className="rounded-lg bg-orange-50 p-2 text-brand-sienna">{icon}</span></div><p className="mt-2 font-serif text-3xl font-bold text-brand-sienna">{value}</p><p className={`mt-5 text-[10px] ${positive ? 'font-bold text-emerald-600' : 'text-zinc-500'}`}>{positive ? '↗ ' : ''}{note}</p></div> }
function Status({ value }: { value: string }) { const colors = value === 'Completed' ? 'bg-emerald-100 text-emerald-700' : value === 'Refunded' ? 'bg-rose-100 text-rose-700' : 'bg-orange-100 text-orange-700'; return <span className={`rounded-full px-2 py-1 text-[9px] font-bold ${colors}`}>{value}</span> }

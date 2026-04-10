import { Mail, Share2 } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer-bg-custom bg-[#fdfcfb] px-6 py-16 dark:bg-[#0c0a09]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-brand-zinc dark:text-stone-100">
              NORTHERN HIGHLANDS
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              A sanctuary nestled in the clouds, where luxury and nature coexist in perfect harmony.
            </p>
          </div>    

          {/* Explore Section */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-sienna dark:text-stone-200">
              EXPLORE
            </h4>
            <ul className="space-y-4">
              {['Our Story', 'Suites & Lodges', 'Dining Experience', 'Pool & Cottages'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-zinc-600 transition-colors hover:text-brand-sienna dark:text-zinc-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge Section */}
          <div>
            <h4 className="mb-6 text-sm font-bold tracking-widest text-brand-sienna dark:text-stone-200">
              CONCIERGE
            </h4>
            <ul className="space-y-4">
              {['Getting Here', 'Guest Reviews', 'Press & Media', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-zinc-600 transition-colors hover:text-brand-sienna dark:text-zinc-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest text-brand-sienna dark:text-stone-200">
              STAY CONNECTED
            </h4>
            <div className="flex gap-4">
              <Link href="#" className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-all hover:bg-brand-sienna hover:text-white dark:bg-stone-900 dark:text-zinc-400">
                <Share2 size={18} />
              </Link>
              <Link href="#" className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-all hover:bg-brand-sienna hover:text-white dark:bg-stone-900 dark:text-zinc-400">
                <Mail size={18} />
              </Link>
              <Link href="#" className="rounded-full bg-zinc-100 p-2 text-zinc-600 transition-all hover:bg-brand-sienna hover:text-white dark:bg-stone-900 dark:text-zinc-400">
                <FaInstagram size={18} />
              </Link>
            </div>
            <p className="pt-4 text-[10px] tracking-wide text-zinc-400">
              © 2024 Northern Highlands Resort. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Header, Footer } from '@/components/layouts';

export default function SuitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <main className="flex-grow">{children}</main>
  );
}
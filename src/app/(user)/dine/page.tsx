import { DineHero, CuratedMenus, MenuListing, ReservationSection } from '@/components/features/dine';

export default function DinePage() {
  return (
    <>
      <DineHero />
      <CuratedMenus />
      <MenuListing />
      <ReservationSection />
    </>
  );
}

import { Suite } from '@/types/suites';

export const SUITES_DATA: Suite[] = [
  {
    id: 'summit-horizon',
    name: 'Summit Horizon Suite',
    price: 450,
    description: 'Perched at the highest point of our resort, the Summit Horizon Suite offers unparalleled panoramic views of the surrounding mountain peaks...',
    image: '/api/placeholder/600/400',
    features: [
      '2 Bedrooms, King-sized beds',
      'Sleeps up to 4 guests',
      'Private hot tub & terrace',
      'Gourmet kitchen & wine cellar'
    ],
    imagePosition: 'right'
  },
  {
    id: 'valley-vista',
    name: 'Valley Vista Villa',
    price: 380,
    description: 'Nestled in a secluded valley setting, this villa offers stunning views of the surrounding landscape...',
    image: '/api/placeholder/600/400',
    features: [
      '1 Bedroom, Queen-sized bed',
      'Sleeps up to 2 guests',
      'Private deck with outdoor shower',
      'Full kitchen & fireplace'
    ],
    imagePosition: 'left'
  },
  {
    id: 'highland-cloud',
    name: 'Highland Cloud Loft',
    price: 320,
    description: 'A cozy yet sophisticated retreat perfect for couples seeking romance and adventure...',
    image: '/api/placeholder/600/400',
    features: [
      'Studio layout with sleeping loft',
      'Sleeps up to 2 guests',
      'Private balcony with mountain views',
      'Kitchenette & stone fireplace'
    ],
    imagePosition: 'right'
  }
];
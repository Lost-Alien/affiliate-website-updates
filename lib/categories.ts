export interface Subcategory {
  name: string
  slug: string
  active: boolean
  count: number
  description?: string
}

export interface Category {
  name: string
  slug: string
  description: string
  active: boolean
  subcategories: Subcategory[]
}

export const CATEGORIES: Category[] = [
  {
    name: 'Audio',
    slug: 'audio',
    description: 'Expert reviews, comparisons, and buying guides for headphones, earbuds, speakers, microphones, and audio equipment.',
    active: true,
    subcategories: [
      { name: 'Headphones', slug: 'headphones', active: false, count: 0, description: 'Over-ear and on-ear wireless and wired headphones.' },
      { name: 'Earbuds', slug: 'earbuds', active: false, count: 0, description: 'True wireless earbuds with active noise cancellation and long battery life.' },
      { name: 'Speakers', slug: 'speakers', active: false, count: 0, description: 'Bluetooth portable speakers, home theater audio, and smart speakers.' },
      { name: 'Microphones', slug: 'microphones', active: false, count: 0, description: 'USB and XLR microphones for podcasting, streaming, and vocals.' },
      { name: 'DACs & Amps', slug: 'dacs-amps', active: false, count: 0, description: 'Digital-to-analog converters and headphone amplifiers.' },
    ],
  },
  {
    name: 'Computers',
    slug: 'computers',
    description: 'Expert reviews, comparisons, and buying guides for laptops, desktops, components, and peripherals.',
    active: true,
    subcategories: [
      { name: 'Laptops', slug: 'laptops', active: true, count: 1, description: 'Ultrabooks, gaming laptops, MacBooks, and budget laptops.' },
      { name: 'Desktops', slug: 'desktops', active: false, count: 0, description: 'Prebuilt desktop PCs, mini PCs, and workstation builds.' },
      { name: 'Peripherals', slug: 'peripherals', active: false, count: 0, description: 'Mechanical keyboards, gaming mice, webcams, and accessories.' },
      { name: 'Storage', slug: 'storage', active: false, count: 0, description: 'NVMe SSDs, external hard drives, and flash storage.' },
      { name: 'Processors', slug: 'processors', active: false, count: 0, description: 'CPUs and computer processor chips.' },
    ],
  },
  {
    name: 'Monitors',
    slug: 'monitors',
    description: 'Expert reviews, comparisons, and buying guides for gaming monitors, professional displays, and everyday screens.',
    active: true,
    subcategories: [
      { name: 'Budget', slug: 'budget', active: false, count: 0, description: 'Affordable high-value monitors for work and study.' },
      { name: 'Gaming', slug: 'gaming', active: false, count: 0, description: 'High refresh rate, low response time gaming monitors.' },
      { name: '4K & 5K', slug: '4k-5k', active: false, count: 0, description: 'Ultra high resolution displays for crisp details.' },
      { name: 'Ultrawide', slug: 'ultrawide', active: false, count: 0, description: 'Curved and flat ultrawide monitors for productivity.' },
      { name: 'Professional', slug: 'professional', active: false, count: 0, description: 'Color-accurate monitors for photo and video editing.' },
    ],
  },
  {
    name: 'Wearables',
    slug: 'wearables',
    description: 'Expert reviews, comparisons, and buying guides for smartwatches, fitness trackers, and wearable technology.',
    active: true,
    subcategories: [
      { name: 'Smartwatches', slug: 'smartwatches', active: false, count: 0, description: 'Apple Watch, Galaxy Watch, Garmin, and feature smartwatches.' },
      { name: 'Fitness Trackers', slug: 'fitness-trackers', active: false, count: 0, description: 'Activity bands, GPS trackers, and sleep monitors.' },
      { name: 'Smart Rings', slug: 'smart-rings', active: false, count: 0, description: 'Subtle smart rings for health and recovery tracking.' },
      { name: 'Hearables', slug: 'hearables', active: false, count: 0, description: 'Smart earwear with bio-sensing capabilities.' },
      { name: 'Smart Glasses', slug: 'smart-glasses', active: false, count: 0, description: 'Augmented reality and audio smart eyewear.' },
    ],
  },
  {
    name: 'Home Office',
    slug: 'home-office',
    description: 'Expert reviews, comparisons, and buying guides for home office furniture, ergonomics, and remote work equipment.',
    active: true,
    subcategories: [
      { name: 'Desks', slug: 'desks', active: false, count: 0, description: 'Standing desks, electric sit-stand desks, and compact tables.' },
      { name: 'Chairs', slug: 'chairs', active: false, count: 0, description: 'Ergonomic office chairs and mesh gaming chairs.' },
      { name: 'Accessories', slug: 'accessories', active: false, count: 0, description: 'Desk mats, monitor arms, cable management, and gear.' },
      { name: 'Webcams', slug: 'webcams', active: false, count: 0, description: '4K and 1080p webcams for streaming and video calls.' },
      { name: 'Lighting', slug: 'lighting', active: false, count: 0, description: 'Monitor light bars, ring lights, and ambient desk lights.' },
    ],
  },
]

export interface CategoryContentItem {
  title: string
  description: string
  category: string
  subcategorySlug: string
  href: string
  image: string
  rating?: number
  price?: string
  amazonUrl?: string
  type: 'article' | 'review' | 'comparison'
  specs?: { label: string; value: string }[]
}

export const SAMPLE_PRODUCTS: CategoryContentItem[] = [
  {
    title: 'ASUS ROG Strix G16 (G615LR-S5190WS)',
    description: 'The ultimate gaming powerhouse featuring Intel Core Ultra 9 275HX, RTX 5070 Ti 12GB, 32GB DDR5 RAM, and a stunning 2.5K 240Hz display. Built for gamers who demand the very best.',
    category: 'Computers',
    subcategorySlug: 'laptops',
    href: '/products/asus-rog-strix-g16',
    image: '/products/asus-rog-strix-g16.jpg',
    rating: 9.4,
    price: '₹2,75,990',
    amazonUrl: 'https://www.amazon.in/ASUS-Gaming-Windows-Eclipse-G615LR-S5190WS/dp/B0F5BH7D1L?crid=38OIH0C33VG9Q&dib=eyJ2IjoiMSJ9.fhNj6crAx9P1CUwwwNxBXRO9aij3P0zV4POeWD-dPm4zDHbPozhGiOUZEi1AWOcP1rj8vIvChgB3FE8RkYVOo4CXa9DOyx159AQaT24WvahnxhrOQcthkfy_A3g9c9jQhtX05-7wmeUFC_HW7Xz0Nw8s23ZFzDrC7ZyaJKnFRig3A7v-WvkKPkfqI2pNV6MboPZxveHexz47N3kfvpuQyn2j8-UUrpwAqM9uyGZF0a8.Pn-RDc8LLBwgRuXSwlLhQARnE0K4TOEHMCQrWl3YyZc&dib_tag=se&keywords=rog%2Bstrix%2Bg16&qid=1784631896&sprefix=rog%2B%2Caps%2C295&sr=8-7&th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=aadd764dc4c6da405d29919bcab54154&ref_=as_li_ss_tl',
    type: 'review',
    specs: [
      { label: 'Processor', value: 'Intel Core Ultra 9 275HX (up to 5.4GHz, 24 cores)' },
      { label: 'GPU', value: 'NVIDIA RTX 5070 Ti 12GB GDDR7 (140W TGP)' },
      { label: 'RAM', value: '32GB DDR5' },
      { label: 'Storage', value: '1TB PCIe 4.0 NVMe SSD' },
      { label: 'Display', value: '16" 2.5K QHD+ (2560×1600) 240Hz IPS' },
      { label: 'Battery', value: '90Whr, up to 10 hours' },
      { label: 'OS', value: 'Windows 11 Home' },
      { label: 'Weight', value: '2.65 kg' },
    ],
  },
]

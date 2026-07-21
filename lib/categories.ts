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
      { name: 'Headphones', slug: 'headphones', active: true, count: 24, description: 'Over-ear and on-ear wireless and wired headphones.' },
      { name: 'Earbuds', slug: 'earbuds', active: true, count: 31, description: 'True wireless earbuds with active noise cancellation and long battery life.' },
      { name: 'Speakers', slug: 'speakers', active: true, count: 18, description: 'Bluetooth portable speakers, home theater audio, and smart speakers.' },
      { name: 'Microphones', slug: 'microphones', active: true, count: 12, description: 'USB and XLR microphones for podcasting, streaming, and vocals.' },
      { name: 'DACs & Amps', slug: 'dacs-amps', active: false, count: 0, description: 'Digital-to-analog converters and headphone amplifiers.' },
    ],
  },
  {
    name: 'Computers',
    slug: 'computers',
    description: 'Expert reviews, comparisons, and buying guides for laptops, desktops, components, and peripherals.',
    active: true,
    subcategories: [
      { name: 'Laptops', slug: 'laptops', active: true, count: 42, description: 'Ultrabooks, gaming laptops, MacBooks, and budget laptops.' },
      { name: 'Desktops', slug: 'desktops', active: true, count: 18, description: 'Prebuilt desktop PCs, mini PCs, and workstation builds.' },
      { name: 'Peripherals', slug: 'peripherals', active: true, count: 34, description: 'Mechanical keyboards, gaming mice, webcams, and accessories.' },
      { name: 'Storage', slug: 'storage', active: true, count: 21, description: 'NVMe SSDs, external hard drives, and flash storage.' },
      { name: 'Processors', slug: 'processors', active: false, count: 0, description: 'CPUs and computer processor chips.' },
    ],
  },
  {
    name: 'Monitors',
    slug: 'monitors',
    description: 'Expert reviews, comparisons, and buying guides for gaming monitors, professional displays, and everyday screens.',
    active: true,
    subcategories: [
      { name: 'Budget', slug: 'budget', active: true, count: 19, description: 'Affordable high-value monitors for work and study.' },
      { name: 'Gaming', slug: 'gaming', active: true, count: 28, description: 'High refresh rate, low response time gaming monitors.' },
      { name: '4K & 5K', slug: '4k-5k', active: true, count: 22, description: 'Ultra high resolution displays for crisp details.' },
      { name: 'Ultrawide', slug: 'ultrawide', active: true, count: 14, description: 'Curved and flat ultrawide monitors for productivity.' },
      { name: 'Professional', slug: 'professional', active: true, count: 16, description: 'Color-accurate monitors for photo and video editing.' },
    ],
  },
  {
    name: 'Wearables',
    slug: 'wearables',
    description: 'Expert reviews, comparisons, and buying guides for smartwatches, fitness trackers, and wearable technology.',
    active: true,
    subcategories: [
      { name: 'Smartwatches', slug: 'smartwatches', active: true, count: 26, description: 'Apple Watch, Galaxy Watch, Garmin, and feature smartwatches.' },
      { name: 'Fitness Trackers', slug: 'fitness-trackers', active: true, count: 18, description: 'Activity bands, GPS trackers, and sleep monitors.' },
      { name: 'Smart Rings', slug: 'smart-rings', active: true, count: 6, description: 'Subtle smart rings for health and recovery tracking.' },
      { name: 'Hearables', slug: 'hearables', active: true, count: 22, description: 'Smart earwear with bio-sensing capabilities.' },
      { name: 'Smart Glasses', slug: 'smart-glasses', active: false, count: 0, description: 'Augmented reality and audio smart eyewear.' },
    ],
  },
  {
    name: 'Home Office',
    slug: 'home-office',
    description: 'Expert reviews, comparisons, and buying guides for home office furniture, ergonomics, and remote work equipment.',
    active: true,
    subcategories: [
      { name: 'Desks', slug: 'desks', active: true, count: 15, description: 'Standing desks, electric sit-stand desks, and compact tables.' },
      { name: 'Chairs', slug: 'chairs', active: true, count: 22, description: 'Ergonomic office chairs and mesh gaming chairs.' },
      { name: 'Accessories', slug: 'accessories', active: true, count: 28, description: 'Desk mats, monitor arms, cable management, and gear.' },
      { name: 'Webcams', slug: 'webcams', active: true, count: 14, description: '4K and 1080p webcams for streaming and video calls.' },
      { name: 'Lighting', slug: 'lighting', active: false, count: 0, description: 'Monitor light bars, ring lights, and ambient desk lights.' },
    ],
  },
]

// Sample products/articles mapping per category and subcategory
export interface CategoryContentItem {
  title: string
  description: string
  category: string
  subcategorySlug: string
  href: string
  image: string
  rating?: number
  type: 'article' | 'review' | 'comparison'
}

export const SAMPLE_PRODUCTS: CategoryContentItem[] = [
  {
    title: 'Best Budget Noise Cancelling Headphones in India (Under Rs. 5,000)',
    description: 'We tested boAt, JBL, and Blaupunkt to find the best noise-canceling performance under Rs. 5,000.',
    category: 'Audio',
    subcategorySlug: 'headphones',
    href: '/article/best-budget-noise-cancelling-headphones-india',
    image: '/placeholder-audio.jpg',
    type: 'article',
  },
  {
    title: 'Best Wireless Earbuds Under $100',
    description: 'Top picks for budget-conscious listeners who want great sound without breaking the bank.',
    category: 'Audio',
    subcategorySlug: 'earbuds',
    href: '/article/best-wireless-earbuds-budget',
    image: '/placeholder-audio.jpg',
    type: 'article',
  },
  {
    title: 'Sony WH-1000XM5 Deep Review & ANC Test',
    description: 'Detailed hands-on evaluation of battery life, sound quality, active noise cancellation, and comfort.',
    category: 'Audio',
    subcategorySlug: 'headphones',
    href: '/review/sony-wh-1000xm5',
    image: '/placeholder-audio.jpg',
    rating: 9.3,
    type: 'review',
  },
  {
    title: 'Best Wireless Earbuds Shootout: AirPods Pro vs Sony WF-1000XM5',
    description: 'Comparing sound quality, noise cancellation, battery life, and microphone clarity.',
    category: 'Audio',
    subcategorySlug: 'earbuds',
    href: '/compare/wireless-earbuds',
    image: '/placeholder-audio.jpg',
    type: 'comparison',
  },
  {
    title: 'Best Mechanical Keyboards for Coding in India (Under Rs. 10,000)',
    description: 'Compare tactile and linear hot-swappable keyboards like Keychron, Aula, and Kreo for developers.',
    category: 'Computers',
    subcategorySlug: 'peripherals',
    href: '/article/best-mechanical-keyboards-coding-india',
    image: '/placeholder-computer.jpg',
    type: 'article',
  },
  {
    title: 'Best Monitors for Coding in India under Rs. 15,000',
    description: 'We evaluated 27-inch 2K QHD and eye-care IPS displays from BenQ, LG, and Acer for developers.',
    category: 'Monitors',
    subcategorySlug: 'budget',
    href: '/article/best-coding-monitors-under-15000-india',
    image: '/placeholder-monitor.jpg',
    type: 'article',
  },
]

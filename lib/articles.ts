export interface ArticleItem {
  title: string
  excerpt: string
  category: string
  categorySlug: string
  href: string
  readTime: string
  imageUrl: string
  datePublished: string // YYYY-MM-DD
  featured?: boolean
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    title: 'Samsung Galaxy Watch8 Review: The Smartest Android Watch Yet',
    excerpt: '3nm processor, Super AMOLED with 3,000 nits, sleep apnea detection, vascular load monitoring, antioxidant index — the smartest Galaxy Watch reviewed.',
    category: 'Wearables',
    categorySlug: 'wearables',
    href: '/article/samsung-galaxy-watch8-review',
    readTime: '8 min read',
    imageUrl: '/products/samsung-galaxy-watch8.png',
    datePublished: '2026-07-28',
    featured: true,
  },
  {
    title: 'Best 5G Smartphones in India (2026): Flagship Cameras & Displays',
    excerpt: 'Comparing Samsung Galaxy 5G, Vivo V70 Elite 5G, 120Hz Dynamic AMOLED displays, and 90W fast charging.',
    category: 'Mobiles',
    categorySlug: 'mobiles',
    href: '/article/best-flagship-5g-smartphones-india',
    readTime: '7 min read',
    imageUrl: '/products/samsung-galaxy-s25.png',
    datePublished: '2026-07-26',
    featured: true,
  },
  {
    title: 'Best Smart Home Appliances & QLED TVs in India (2026)',
    excerpt: 'Hands-on testing of VW 32-inch QLED Smart TV, Lloyd 1.5 Ton 5-in-1 AC, and Dreame self-emptying robot vacuum.',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    href: '/article/best-smart-tvs-and-appliances-india',
    readTime: '8 min read',
    imageUrl: '/products/vw-32-inch-qled-smart-tv.png',
    datePublished: '2026-07-26',
    featured: true,
  },
  {
    title: 'Samsung Galaxy S26 Plus 5G Review: The Ultimate AI Flagship',
    excerpt: 'Our deep dive into the Samsung Galaxy S26 Plus 5G, featuring 12GB RAM, 512GB storage, and advanced Photo Assist AI capabilities.',
    category: 'Mobiles',
    categorySlug: 'mobiles',
    href: '/article/samsung-galaxy-s26-plus-review',
    readTime: '6 min read',
    imageUrl: '/products/samsung-galaxy-s26-plus.png',
    datePublished: '2026-07-26',
    featured: true,
  },
  {
    title: 'ASUS ROG Strix G16 Review & Gaming Benchmarks',
    excerpt: 'Windows gaming beast tested: Intel Core Ultra 9 275HX, RTX 5070 Ti GPU, 2.5K 240Hz IPS display — full benchmark breakdown.',
    category: 'Computers',
    categorySlug: 'computers',
    href: '/article/asus-rog-strix-g16-review',
    readTime: '8 min read',
    imageUrl: '/products/asus-rog-strix-g16.png',
    datePublished: '2026-07-20',
  },
  {
    title: 'Bose QuietComfort Ultra vs Sennheiser Momentum 4',
    excerpt: 'We wore these on local trains, flights, and loud office floors to find the undisputed noise-cancelling king.',
    category: 'Audio',
    categorySlug: 'audio',
    href: '/article/bose-quietcomfort-ultra-review',
    readTime: '7 min read',
    imageUrl: '/products/bose-quietcomfort.png',
    datePublished: '2026-07-15',
  },
  {
    title: 'Best Smart Plugs with Energy Monitoring in India (2026)',
    excerpt: 'Automate geysers, air conditioners, and water pumps while cutting monthly electricity bills with 16A smart plugs.',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    href: '/article/best-smart-plugs-india',
    readTime: '6 min read',
    imageUrl: '/products/tp-link-tapo-smart-plug.png',
    datePublished: '2026-07-10',
  },
  {
    title: 'Best Premium Noise Cancelling Headphones in India',
    excerpt: 'Top over-ear headphones with active noise cancellation, long battery life, and comfortable ear cushions.',
    category: 'Audio',
    categorySlug: 'audio',
    href: '/article/best-premium-noise-cancelling-headphones-india',
    readTime: '6 min read',
    imageUrl: '/products/sennheiser-momentum-4.png',
    datePublished: '2026-06-28',
  },
  {
    title: 'Apple MacBook Pro M4 Review: Developers Benchmark Test',
    excerpt: 'In-depth developer benchmark review of Apple MacBook Pro M4. Tested Xcode compilation speed, Docker monorepo performance, Liquid Retina XDR display, and 18+ hour battery.',
    category: 'Computers',
    categorySlug: 'computers',
    href: '/article/macbook-pro-m4-review',
    readTime: '9 min read',
    imageUrl: '/products/apple-macbook-pro-m4.png',
    datePublished: '2026-07-27',
    featured: true,
  },
  {
    title: 'Samsung Galaxy S25 Review: Camera & Performance Lab Test',
    excerpt: 'Full lab testing review of Samsung Galaxy S25 featuring 6.7-inch 120Hz Dynamic AMOLED, Snapdragon 8 Elite, 50MP OIS camera, and 7 years of OS updates.',
    category: 'Mobiles',
    categorySlug: 'mobiles',
    href: '/article/samsung-galaxy-s25-ultra-review',
    readTime: '8 min read',
    imageUrl: '/products/samsung-galaxy-s25.png',
    datePublished: '2026-07-26',
    featured: true,
  },
  {
    title: 'Best Laptops for Software Engineers & Machine Learning (2026)',
    excerpt: 'Evaluating top developer laptops in India: Apple MacBook Pro M4 vs ASUS ROG Strix G16 for Docker microservices, Xcode compilation, and PyTorch CUDA training.',
    category: 'Computers',
    categorySlug: 'computers',
    href: '/article/best-laptops-for-programming-and-machine-learning-india',
    readTime: '10 min read',
    imageUrl: '/products/apple-macbook-pro-m4.png',
    datePublished: '2026-07-27',
  },
  {
    title: 'Best Robot Vacuum Cleaners with Mop in India (2026)',
    excerpt: 'Comparing Dreame L10s Ultra and ECOVACS Deebot T50 Pro for Indian marble, tile, and carpet floors. Tested 7000Pa vs 15000Pa suction and self-emptying docks.',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    href: '/article/best-robot-vacuums-with-mop-india',
    readTime: '9 min read',
    imageUrl: '/products/dreame-robot-vacuum-mop.png',
    datePublished: '2026-07-26',
  },
  {
    title: 'Sennheiser Momentum 4 Review: 60-Hour Battery & Acoustic Test',
    excerpt: 'Full acoustic lab review of Sennheiser Momentum 4 Wireless featuring 42mm transducers, adaptive ANC, aptX Adaptive Bluetooth codec, and 60-hour playtime.',
    category: 'Audio',
    categorySlug: 'audio',
    href: '/article/sennheiser-momentum-4-review',
    readTime: '8 min read',
    imageUrl: '/products/sennheiser-momentum-4.png',
    datePublished: '2026-06-28',
  },
  {
    title: 'Lloyd 1.5 Ton 3 Star Inverter AC Review: Extreme Cooling Test',
    excerpt: 'Summer cooling test review of Lloyd 1.5 Ton 3 Star Inverter Split AC featuring 5-in-1 convertible tonnage, anti-viral filter, and 100% copper condenser.',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    href: '/article/lloyd-1-5-ton-inverter-ac-review',
    readTime: '7 min read',
    imageUrl: '/products/lloyd-1-5-ton-inverter-ac.png',
    datePublished: '2026-07-26',
  },
  {
    title: 'Best TWS Wireless Earbuds Under ₹5,000 in India (2026)',
    excerpt: 'Acoustic testing of budget TWS earbuds in India: ANC depth in decibels, ENC dual-mic call clarity, spatial audio support, and real-world battery endurance.',
    category: 'Audio',
    categorySlug: 'audio',
    href: '/article/best-tws-earbuds-under-5000-india',
    readTime: '7 min read',
    imageUrl: '/products/bose-quietcomfort.png',
    datePublished: '2026-07-25',
  },

]

export function getSortedArticles(): ArticleItem[] {
  return [...ARTICLES_DATA].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )
}

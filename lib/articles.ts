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
    title: 'Best 5G Smartphones in India (2026): Flagship Cameras & Displays',
    excerpt: 'Comparing Samsung Galaxy 5G, Vivo V70 Elite 5G, 120Hz Dynamic AMOLED displays, and 90W fast charging.',
    category: 'Mobiles',
    categorySlug: 'mobiles',
    href: '/article/best-5g-smartphones-under-30000-india',
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
    title: 'Best Tablets for Students, Note-Taking & Digital Art (2026)',
    excerpt: 'Comparing tablets in India with included stylus S-Pen support, WQXGA AMOLED displays, and Samsung DeX multitasking.',
    category: 'Computers',
    categorySlug: 'computers',
    href: '/article/best-tablets-for-students-and-creatives-india',
    readTime: '6 min read',
    imageUrl: '/products/samsung-galaxy-tab.png',
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
    title: 'Best Budget Noise Cancelling Headphones in India',
    excerpt: 'Top over-ear headphones with active noise cancellation, long battery life, and comfortable ear cushions under budget.',
    category: 'Audio',
    categorySlug: 'audio',
    href: '/article/best-budget-noise-cancelling-headphones-india',
    readTime: '6 min read',
    imageUrl: '/products/sennheiser-momentum-4.png',
    datePublished: '2026-06-28',
  },
  {
    title: 'Best Mechanical Keyboards for Coding & Gaming in India (2026)',
    excerpt: 'We compared tactile vs linear switches, hot-swap PCBs, Bluetooth connectivity, and compact layouts for Indian developers.',
    category: 'Computers',
    categorySlug: 'computers',
    href: '/article/best-mechanical-keyboards-coding-india',
    readTime: '7 min read',
    imageUrl: '/products/asus-tuf-gaming-a15.png',
    datePublished: '2026-07-10',
  },
  {
    title: 'Best Coding Monitors Under ₹15,000 in India (2026)',
    excerpt: 'IPS vs VA panels, flicker-free backlights, blue light filter modes, and HDMI/DP connectivity compared for developers.',
    category: 'Computers',
    categorySlug: 'computers',
    href: '/article/best-coding-monitors-under-15000-india',
    readTime: '6 min read',
    imageUrl: '/products/asus-tuf-gaming-a15.png',
    datePublished: '2026-07-15',
  },
  {
    title: 'Best Wireless Earbuds on a Budget in India (2026)',
    excerpt: 'Budget TWS earbuds tested for ANC depth, ENC call clarity, IPX water resistance, and real-world battery life in Indian conditions.',
    category: 'Audio',
    categorySlug: 'audio',
    href: '/article/best-wireless-earbuds-budget',
    readTime: '5 min read',
    imageUrl: '/products/bose-quietcomfort.png',
    datePublished: '2026-07-05',
  },
]

export function getSortedArticles(): ArticleItem[] {
  return [...ARTICLES_DATA].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )
}

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
      { name: 'Headphones', slug: 'headphones', active: true, count: 2, description: 'Over-ear and on-ear wireless and wired headphones.' },
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
      { name: 'Laptops', slug: 'laptops', active: true, count: 2, description: 'Ultrabooks, gaming laptops, MacBooks, and budget laptops.' },
      { name: 'Tablets', slug: 'tablets', active: true, count: 1, description: 'Android and iOS tablets for students, artists, and professionals.' },
      { name: 'Desktops', slug: 'desktops', active: false, count: 0, description: 'Prebuilt desktop PCs, mini PCs, and workstation builds.' },
      { name: 'Peripherals', slug: 'peripherals', active: false, count: 0, description: 'Mechanical keyboards, gaming mice, webcams, and accessories.' },
      { name: 'Storage', slug: 'storage', active: false, count: 0, description: 'NVMe SSDs, external hard drives, and flash storage.' },
      { name: 'Processors', slug: 'processors', active: false, count: 0, description: 'CPUs and computer processor chips.' },
    ],
  },
  {
    name: 'Mobiles',
    slug: 'mobiles',
    description: 'Expert reviews, comparisons, and buying guides for smartphones across all brands and budgets.',
    active: true,
    subcategories: [
      { name: 'Android', slug: 'android', active: true, count: 1, description: 'Android smartphones from Samsung, Vivo, OnePlus, and more.' },
      { name: 'Smartphones', slug: 'smartphones', active: true, count: 2, description: 'Flagship and mid-range smartphones reviewed and compared.' },
      { name: 'iPhone', slug: 'iphone', active: false, count: 0, description: 'Apple iPhone lineup reviews and comparisons.' },
      { name: 'Budget Phones', slug: 'budget-phones', active: false, count: 0, description: 'Best smartphones under ₹20,000 in India.' },
    ],
  },
  {
    name: 'Smart Home',
    slug: 'smart-home',
    description: 'Expert reviews, comparisons, and buying guides for robot vacuums, smart displays, and home automation devices.',
    active: true,
    subcategories: [
      { name: 'Robot Vacuums', slug: 'robot-vacuums', active: true, count: 2, description: 'Self-emptying and mopping robot vacuum cleaners.' },
      { name: 'Smart Plugs', slug: 'smart-plugs', active: true, count: 2, description: 'Wi-Fi smart plugs with energy monitoring and automation.' },
      { name: 'Smart TVs', slug: 'tvs', active: true, count: 1, description: 'Budget and mid-range smart TVs reviewed for Indian buyers.' },
      { name: 'Appliances', slug: 'appliances', active: true, count: 1, description: 'Air conditioners, washing machines, and home appliances.' },
      { name: 'Smart Displays', slug: 'smart-displays', active: false, count: 0, description: 'Echo Show, Nest Hub, and smart home display screens.' },
    ],
  },
  {
    name: 'Monitors',
    slug: 'monitors',
    description: 'Expert reviews, comparisons, and buying guides for gaming monitors, professional displays, and everyday screens.',
    active: false,
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
    active: false,
    subcategories: [
      { name: 'Smartwatches', slug: 'smartwatches', active: false, count: 0, description: 'Apple Watch, Galaxy Watch, Garmin, and feature smartwatches.' },
      { name: 'Fitness Trackers', slug: 'fitness-trackers', active: false, count: 0, description: 'Activity bands, GPS trackers, and sleep monitors.' },
      { name: 'Smart Rings', slug: 'smart-rings', active: false, count: 0, description: 'Subtle smart rings for health and recovery tracking.' },
    ],
  },
  {
    name: 'Home Office',
    slug: 'home-office',
    description: 'Expert reviews, comparisons, and buying guides for home office furniture, ergonomics, and remote work equipment.',
    active: false,
    subcategories: [
      { name: 'Desks', slug: 'desks', active: false, count: 0, description: 'Standing desks, electric sit-stand desks, and compact tables.' },
      { name: 'Chairs', slug: 'chairs', active: false, count: 0, description: 'Ergonomic office chairs and mesh gaming chairs.' },
      { name: 'Accessories', slug: 'accessories', active: false, count: 0, description: 'Desk mats, monitor arms, cable management, and gear.' },
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
  badge?: string
}

export const SAMPLE_PRODUCTS: CategoryContentItem[] = [
  // ─── LAPTOPS ───────────────────────────────────────────────────────────────
  {
    title: 'ASUS ROG Strix G16 (G615LR-S5190WS)',
    description: 'The ultimate gaming powerhouse — Intel Core Ultra 9 275HX, RTX 5070 Ti 12GB, 32GB DDR5, and a stunning 2.5K 240Hz display. Unmatched performance for serious gamers.',
    category: 'Computers',
    subcategorySlug: 'laptops',
    href: '/products/asus-rog-strix-g16',
    image: '/products/asus-rog-strix-g16.jpg',
    rating: 9.4,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/dp/B0F5BH7D1L?th=1&linkCode=ll2&tag=techstor0caaf-21&linkId=5d528a812b0131c07a2021e4fa256922&ref_=as_li_ss_tl',
    type: 'review',
    badge: '#1 Gaming Laptop',
    specs: [
      { label: 'Processor', value: 'Intel Core Ultra 9 275HX (up to 5.4GHz)' },
      { label: 'GPU', value: 'NVIDIA RTX 5070 Ti 12GB GDDR7' },
      { label: 'RAM', value: '32GB DDR5' },
      { label: 'Storage', value: '1TB PCIe 4.0 NVMe SSD' },
      { label: 'Display', value: '16" 2.5K QHD+ 240Hz IPS' },
    ],
  },
  {
    title: 'Apple MacBook Pro 13" M4 (2024)',
    description: 'Apple\'s most powerful 13-inch MacBook Pro featuring the M4 chip with 10-core CPU and 10-core GPU. Exceptional performance, all-day battery life, and the iconic Liquid Retina display.',
    category: 'Computers',
    subcategorySlug: 'laptops',
    href: '/products/apple-macbook-pro-m4',
    image: '/products/apple-macbook-pro-m4.png',
    rating: 9.2,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Apple-MacBook-13-inch-10%E2%80%91core-Unified/dp/B0DLHYDDFY?linkCode=ll2&tag=techstor0caaf-21&linkId=4ad9b60e3c4f42cc4e9ac49d4c8967e7&ref_=as_li_ss_tl',
    type: 'review',
    badge: 'Best MacBook',
    specs: [
      { label: 'Chip', value: 'Apple M4 (10-core CPU, 10-core GPU)' },
      { label: 'RAM', value: '16GB Unified Memory' },
      { label: 'Storage', value: '512GB SSD' },
      { label: 'Display', value: '13.3" Liquid Retina, 2560×1664, 500nits' },
      { label: 'Battery', value: 'Up to 22 hours' },
    ],
  },
  // ─── HEADPHONES ─────────────────────────────────────────────────────────────
  {
    title: 'Bose QuietComfort Wireless Headphones',
    description: 'Bose\'s flagship noise-cancelling headphones with world-class ANC, plush ear cushions, and up to 24 hours battery life. The gold standard for travel and focus.',
    category: 'Audio',
    subcategorySlug: 'headphones',
    href: '/products/bose-quietcomfort',
    image: '/products/bose-quietcomfort.png',
    rating: 9.1,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Bose-QuietComfort-Bluetooth-Headphones-Cancelling/dp/B0FDKPFLFP?linkCode=ll2&tag=techstor0caaf-21&linkId=122c872c91a5eabaf2731569876ee2aa&ref_=as_li_ss_tl',
    type: 'review',
    badge: 'Best ANC',
    specs: [
      { label: 'Driver', value: '35mm TriPort acoustic architecture' },
      { label: 'ANC', value: 'World-class Active Noise Cancellation' },
      { label: 'Battery', value: '24 hours (ANC on)' },
      { label: 'Connectivity', value: 'Bluetooth 5.3, multipoint' },
      { label: 'Weight', value: '250g' },
    ],
  },
  {
    title: 'Sennheiser Momentum 4 Wireless',
    description: 'Audiophile-grade sound meets exceptional noise cancellation. The Momentum 4 delivers a massive 60-hour battery, refined ANC, and signature Sennheiser sound quality.',
    category: 'Audio',
    subcategorySlug: 'headphones',
    href: '/products/sennheiser-momentum-4',
    image: '/products/sennheiser-momentum-4.png',
    rating: 9.0,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Sennheiser-Momentum-Wireless-Headphones-Cancelling-ANC/dp/B0B6G9TPNQ?linkCode=ll2&tag=techstor0caaf-21&linkId=624f127efe2e59a13c34318c7b90d7ee&ref_=as_li_ss_tl',
    type: 'review',
    badge: 'Audiophile Pick',
    specs: [
      { label: 'Driver', value: '42mm dynamic driver' },
      { label: 'ANC', value: 'Adaptive ANC with 3 modes' },
      { label: 'Battery', value: '60 hours (ANC off), 50hrs (ANC on)' },
      { label: 'Connectivity', value: 'Bluetooth 5.2, multipoint 2 devices' },
      { label: 'Weight', value: '293g' },
    ],
  },
  // ─── MOBILES ────────────────────────────────────────────────────────────────
  {
    title: 'Samsung Galaxy 5G Smartphone',
    description: 'Samsung\'s flagship Android phone featuring a 120Hz Dynamic AMOLED display, pro-grade 50MP camera, and 5000 mAh fast-charging battery.',
    category: 'Mobiles',
    subcategorySlug: 'smartphones',
    href: '/products/samsung-galaxy-s25',
    image: '/products/samsung-galaxy-s25.png',
    rating: 9.5,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Samsung-Galaxy-Display-Refresh-Storage/dp/B0FNWNZZ1B?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Editor\'s Choice',
    specs: [
      { label: 'Display', value: '6.7-inch 120Hz Dynamic AMOLED' },
      { label: 'Processor', value: 'Octa-Core 5G Processor' },
      { label: 'Camera', value: '50MP OIS Triple Camera' },
      { label: 'Battery', value: '5000 mAh Fast Charge' },
    ],
  },
  {
    title: 'Vivo X100 Pro 5G',
    description: 'Vivo\'s premium Android flagship with Zeiss optics, Dimensity 9300+ processor, 120W FlashCharge, and 1.5K 120Hz curved AMOLED display.',
    category: 'Mobiles',
    subcategorySlug: 'android',
    href: '/products/vivo-smartphone',
    image: '/products/vivo-smartphone.png',
    rating: 8.5,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/vivo-Storage-Additional-Exchange-Offers/dp/B0GX94B58L?linkCode=ll2&tag=techstor0caaf-21&linkId=0ad2973400e1638013e37d63debba88a&ref_=as_li_ss_tl',
    type: 'review',
    badge: 'Great Value',
    specs: [
      { label: 'Display', value: 'AMOLED, high refresh rate' },
      { label: 'Camera', value: 'Multi-lens camera system' },
      { label: 'Battery', value: 'Fast charging support' },
      { label: 'OS', value: 'Android (Funtouch OS / Origin OS)' },
    ],
  },
  {
    title: 'Vivo V70 Elite 5G',
    description: 'Vivo\'s pro-grade portrait camera smartphone with Studio Aura Light fill system, 1.5K 120Hz curved AMOLED, and 90W FlashCharge.',
    category: 'Mobiles',
    subcategorySlug: 'smartphones',
    href: '/products/vivo-v70-elite',
    image: '/products/vivo-v70-elite.png',
    rating: 9.2,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/vivo-V70-Elite-Additional-Exchange/dp/B0GHS4WQYV?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Best Camera',
    specs: [
      { label: 'Display', value: '6.78-inch 1.5K 120Hz AMOLED' },
      { label: 'Camera', value: 'Studio Aura Light Portrait' },
      { label: 'Battery', value: '5500 mAh + 90W Charge' },
    ],
  },
  {
    title: 'ASUS TUF Gaming A15',
    description: 'ASUS budget gaming laptop featuring NVIDIA GeForce RTX 3050 4GB GPU, 144Hz display, and upgradeable RAM & dual NVMe SSD slots.',
    category: 'Computers',
    subcategorySlug: 'laptops',
    href: '/products/asus-tuf-gaming-a15',
    image: '/products/asus-tuf-gaming-a15.png',
    rating: 9.1,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/ASUS-3050-4GB-Upgradeable-Graphite-FA506NCQ-HN006W/dp/B0GW85JTBN?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Great Value',
    specs: [
      { label: 'GPU', value: 'NVIDIA RTX 3050 4GB' },
      { label: 'Display', value: '15.6-inch 144Hz FHD' },
      { label: 'Durability', value: 'MIL-STD-810H Military' },
    ],
  },
  {
    title: 'Samsung Galaxy Tab S9 FE',
    description: 'Samsung multi-tasking tablet with included S-Pen stylus, DeX desktop mode, WQXGA display, and fast wireless charging.',
    category: 'Computers',
    subcategorySlug: 'tablets',
    href: '/products/samsung-galaxy-tab',
    image: '/products/samsung-galaxy-tab.png',
    rating: 9.3,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Samsung-Storage-Creative-Wireless-Charging/dp/B0GL8J486T?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Best for Productivity',
    specs: [
      { label: 'Stylus', value: 'S-Pen Included in Box' },
      { label: 'Feature', value: 'Samsung DeX Desktop Mode' },
      { label: 'Audio', value: 'Quad Speakers with Dolby Atmos' },
    ],
  },
  // ─── SMART HOME ─────────────────────────────────────────────────────────────
  {
    title: 'ECOVACS DEEBOT T50 PRO',
    description: 'ECOVACS\' flagship robot vacuum with ZeroTangle anti-tangle tech, ultra-thin design, advanced obstacle avoidance, and powerful suction. Set it and forget it — truly.',
    category: 'Smart Home',
    subcategorySlug: 'robot-vacuums',
    href: '/products/ecovacs-t50-pro',
    image: '/products/ecovacs-t50-pro.png',
    rating: 8.8,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/ECOVACS-T50-PRO-Ultra-Thin-Zerotangle/dp/B0DRJPJLNQ?linkCode=ll2&tag=techstor0caaf-21&linkId=42263cbb289297ede12d9457887f1871&ref_=as_li_ss_tl',
    type: 'review',
    badge: 'Editor\'s Choice',
    specs: [
      { label: 'Suction', value: '12,800 Pa max suction' },
      { label: 'Navigation', value: 'AI object avoidance + LiDAR' },
      { label: 'Height', value: 'Ultra-thin 8.3cm' },
      { label: 'Special', value: 'ZeroTangle anti-hair wrap technology' },
      { label: 'Mopping', value: 'Vibrating mop with auto-lift' },
    ],
  },
  {
    title: 'TP-Link Tapo P110 Wi-Fi Smart Plug',
    description: 'TP-Link Tapo P110 features real-time energy monitoring, schedule timers, remote control, and seamless integration with Alexa & Google Assistant.',
    category: 'Smart Home',
    subcategorySlug: 'smart-plugs',
    href: '/products/tp-link-tapo-smart-plug',
    image: '/products/tp-link-tapo-smart-plug.png',
    rating: 9.1,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/TP-Link-Tapo-P110-Energy-Monitoring/dp/B097XZ3X7H?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Top Pick',
    specs: [
      { label: 'Rating', value: '16A High Power Support' },
      { label: 'Feature', value: 'Real-time Energy Monitoring' },
      { label: 'Voice Control', value: 'Amazon Alexa & Google Assistant' },
      { label: 'App', value: 'Tapo App (iOS & Android)' },
    ],
  },
  {
    title: 'VW 32-inch VW32MAX QLED Smart TV',
    description: 'Visio World (VW) 32-inch Frameless QLED Smart TV with Quantum Dot color tech, 20W stereo speakers, and built-in Android Smart OS.',
    category: 'Smart Home',
    subcategorySlug: 'tvs',
    href: '/products/vw-32-inch-qled-smart-tv',
    image: '/products/vw-32-inch-qled-smart-tv.png',
    rating: 8.9,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/inches-Frameless-Ready-QLED-VW32MAX/dp/B0GXK5K633?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Best Budget TV',
    specs: [
      { label: 'Display', value: '32-inch HD Ready QLED' },
      { label: 'Design', value: 'Ultra-thin Frameless Metal' },
      { label: 'Audio', value: '20W Stereo Speakers' },
    ],
  },
  {
    title: 'Lloyd 1.5 Ton Inverter AC',
    description: 'Lloyd 1.5 Ton 3 Star 5-in-1 Convertible Inverter Split AC with 100% copper condenser coils and 52°C extreme ambient cooling capability.',
    category: 'Smart Home',
    subcategorySlug: 'appliances',
    href: '/products/lloyd-1-5-ton-inverter-ac',
    image: '/products/lloyd-1-5-ton-inverter-ac.png',
    rating: 9.0,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Lloyd-Convertible-Installation-Indication-GLS18I3AGGSC/dp/B0GJDVGS6P?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Great Value',
    specs: [
      { label: 'Capacity', value: '1.5 Ton (Medium Rooms)' },
      { label: 'Feature', value: '5-in-1 Convertible Power' },
      { label: 'Condenser', value: '100% Grooved Copper' },
    ],
  },
  {
    title: 'Dreame L10s Ultra Robot Vacuum & Mop',
    description: 'Dreame self-emptying robot vacuum cleaner & mop featuring MopExtend corner reaching arm, anti-tangle hair cutting roller, and 7000Pa suction.',
    category: 'Smart Home',
    subcategorySlug: 'robot-vacuums',
    href: '/products/dreame-robot-vacuum-mop',
    image: '/products/dreame-robot-vacuum-mop.png',
    rating: 9.4,
    price: 'Check Price',
    amazonUrl: 'https://www.amazon.in/Self-Emptying-Hands-Off-Collection-MopExtend-Anti-Tangle/dp/B0H2DD8Z5T?tag=techstor0caaf-21',
    type: 'review',
    badge: 'Best Hands-Off',
    specs: [
      { label: 'Suction', value: '7000Pa Max Suction' },
      { label: 'Feature', value: 'MopExtend Arm + Anti-Tangle' },
      { label: 'Dock', value: '75-Day Hands-Off Empty Base' },
    ],
  },
]

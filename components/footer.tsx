import Link from 'next/link'

const footerLinks = {
  categories: [
    { name: 'Audio', href: '/category/audio' },
    { name: 'Computers', href: '/category/computers' },
    { name: 'Monitors', href: '/category/monitors' },
    { name: 'Wearables', href: '/category/wearables' },
    { name: 'Home Office', href: '/category/home-office' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How We Test', href: '/how-we-test' },
    { name: 'Editorial Guidelines', href: '/editorial-guidelines' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl font-semibold text-foreground">
              TechSelect
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Expert product reviews and buying guides you can trust. We test everything we recommend.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} TechSelect. All rights reserved. As an affiliate, we may earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}

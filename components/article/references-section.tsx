import { ExternalLink, BookOpen } from 'lucide-react'

const references = [
  {
    title: 'Sony WH-1000XM5 Review: A New Standard',
    source: 'Gadgets360',
    url: 'https://www.gadgets360.com/audio/reviews/sony-wh-1000xm5-review',
  },
  {
    title: 'Best Wireless Headphones in India 2024',
    source: 'Beebom',
    url: 'https://beebom.com/best-wireless-headphones-india/',
  },
  {
    title: 'Sony WH-1000XM5 vs Bose QuietComfort Ultra',
    source: 'TechRadar India',
    url: 'https://www.techradar.com/in/reviews/sony-wh-1000xm5',
  },
  {
    title: 'Best ANC Headphones Buying Guide',
    source: 'Indian Express Tech',
    url: 'https://indianexpress.com/article/technology/gadgets/',
  },
]

export function ReferencesSection() {
  return (
    <section className="mt-12 pt-8 border-t border-border">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-xl font-semibold text-foreground">References &amp; Further Reading</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        We researched and cross-referenced multiple sources to ensure accuracy. Here are some helpful resources:
      </p>
      <ul className="space-y-3">
        {references.map((ref, index) => (
          <li key={index}>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ExternalLink className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent" />
              <span>
                <span className="group-hover:text-accent transition-colors">{ref.title}</span>
                <span className="text-muted-foreground/70"> — {ref.source}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

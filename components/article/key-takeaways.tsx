import { CheckCircle } from 'lucide-react'

interface KeyTakeawaysProps {
  items: string[]
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="mt-8 p-6 bg-card rounded-xl border border-border">
      <h2 className="font-serif text-xl font-semibold text-foreground mb-4">Key Takeaways</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { BookOpen } from 'lucide-react'

interface BuyingGuideItem {
  title: string
  content: string
}

interface BuyingGuideProps {
  items: BuyingGuideItem[]
}

export function BuyingGuide({ items }: BuyingGuideProps) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">Buying Guide</h2>
      </div>
      
      <div className="bg-card rounded-xl border border-border p-6">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Not sure which earbuds are right for you? Here is what to consider when making your decision.
        </p>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

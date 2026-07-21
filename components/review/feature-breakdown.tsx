import { Star } from 'lucide-react'

interface Feature {
  title: string
  rating: number
  content: string
}

interface FeatureBreakdownProps {
  features: Feature[]
}

export function FeatureBreakdown({ features }: FeatureBreakdownProps) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Detailed Breakdown</h2>
      
      <div className="space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">{feature.title}</h3>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-muted rounded-full">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-semibold text-foreground">{feature.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

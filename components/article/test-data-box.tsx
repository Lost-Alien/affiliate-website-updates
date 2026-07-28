import React from 'react'
import { Activity, ShieldCheck } from 'lucide-react'

export interface TestMetric {
  label: string
  value: string
  benchmark: string
  status: 'excellent' | 'good' | 'average'
}

interface TestDataBoxProps {
  productName: string
  testedBy: string
  testDate: string
  metrics: TestMetric[]
  summary: string
}

export function TestDataBox({ productName, testedBy, testDate, metrics, summary }: TestDataBoxProps) {
  return (
    <div className="my-8 bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-foreground">TechSelect Lab Testing Data</h3>
            <p className="text-xs text-muted-foreground">
              Empirical benchmarks recorded for {productName} · Tested by <span className="font-medium text-foreground">{testedBy}</span> ({testDate})
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-500/20 self-start sm:self-auto">
          <ShieldCheck className="h-3.5 w-3.5" />
          Lab Verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-muted/40 rounded-xl p-4 border border-border/50">
            <p className="text-xs text-muted-foreground font-medium mb-1">{metric.label}</p>
            <p className="text-xl font-bold text-foreground">{metric.value}</p>
            <p className="text-xs text-muted-foreground mt-1">vs Benchmark: <span className="font-semibold text-foreground/90">{metric.benchmark}</span></p>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-xs sm:text-sm text-foreground/90 leading-relaxed">
        <strong>Lab Note:</strong> {summary}
      </div>
    </div>
  )
}

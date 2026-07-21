import { Activity } from 'lucide-react'

interface PerformanceNote {
  scenario: string
  notes: string
}

interface PerformanceNotesProps {
  notes: PerformanceNote[]
}

export function PerformanceNotes({ notes }: PerformanceNotesProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-2xl font-semibold text-foreground">Real-World Performance</h2>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="divide-y divide-border">
          {notes.map((note, index) => (
            <div key={index} className="p-4 hover:bg-muted/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-semibold text-foreground min-w-[140px]">{note.scenario}</span>
                <span className="text-muted-foreground">{note.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

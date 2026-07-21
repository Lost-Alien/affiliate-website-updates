interface ComparisonTableProps {
  headers: string[]
  rows: string[][]
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="mt-8">
      <h2 className="font-serif text-xl font-semibold text-foreground mb-4">Quick Comparison</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full">
          <thead>
            <tr className="bg-muted">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold text-foreground whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-card hover:bg-muted/50 transition-colors">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 text-sm whitespace-nowrap ${
                      cellIndex === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

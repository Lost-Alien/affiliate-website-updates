import { Check, X } from 'lucide-react'

interface Product {
  id: string
  name: string
  specs: Record<string, string>
}

interface DetailedComparisonProps {
  products: Product[]
}

export function DetailedComparison({ products }: DetailedComparisonProps) {
  const specKeys = Object.keys(products[0].specs)

  const renderValue = (value: string) => {
    if (value === 'Yes') {
      return <Check className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto" />
    }
    if (value === 'No') {
      return <X className="h-5 w-5 text-red-600 dark:text-red-400 mx-auto" />
    }
    return <span className="text-sm text-foreground">{value}</span>
  }

  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Detailed Specs Comparison</h2>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground min-w-[140px]">
                  Specification
                </th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className="px-4 py-3 text-center text-sm font-semibold text-foreground min-w-[120px]"
                  >
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {specKeys.map((spec) => (
                <tr key={spec} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-sm text-muted-foreground">{spec}</td>
                  {products.map((product) => (
                    <td key={product.id} className="px-4 py-3 text-center">
                      {renderValue(product.specs[spec])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

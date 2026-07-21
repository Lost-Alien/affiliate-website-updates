import DynamicCategoryPage from '../[category]/page'

export default async function MonitorsCategoryPage() {
  return <DynamicCategoryPage params={Promise.resolve({ category: 'monitors' })} />
}

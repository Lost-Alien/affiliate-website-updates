import DynamicCategoryPage from '../[category]/page'

export default async function WearablesCategoryPage() {
  return <DynamicCategoryPage params={Promise.resolve({ category: 'wearables' })} />
}

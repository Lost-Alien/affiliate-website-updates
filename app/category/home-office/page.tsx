import DynamicCategoryPage from '../[category]/page'

export default async function HomeOfficeCategoryPage() {
  return <DynamicCategoryPage params={Promise.resolve({ category: 'home-office' })} />
}

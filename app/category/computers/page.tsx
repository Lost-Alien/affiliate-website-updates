import DynamicCategoryPage from '../[category]/page'

export default async function ComputersCategoryPage() {
  return <DynamicCategoryPage params={Promise.resolve({ category: 'computers' })} />
}

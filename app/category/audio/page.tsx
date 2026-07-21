import DynamicCategoryPage from '../[category]/page'

export default async function AudioCategoryPage() {
  return <DynamicCategoryPage params={Promise.resolve({ category: 'audio' })} />
}

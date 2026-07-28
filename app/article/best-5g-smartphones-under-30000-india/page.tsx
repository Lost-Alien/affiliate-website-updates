import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Best 5G Smartphones in India | TechSelect',
  description: 'Redirecting to top 5G smartphones buying guide on TechSelect.',
}

export default function Best5GSmartphonesLegacyRedirect() {
  redirect('/article/best-flagship-5g-smartphones-india')
}

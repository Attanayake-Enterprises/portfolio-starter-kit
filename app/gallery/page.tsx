import Link from 'next/link'
import { GalleryCategories } from 'app/components/gallery-categories'
import { GalleryGrid } from 'app/components/gallery-grid'
import { company } from 'app/data/company'

export const metadata = {
  title: 'Gallery',
  description: `Product gallery and project showcase for ${company.name}.`,
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">Gallery</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm">
        Below are some images of our work — spare parts, wear components, and
        industrial fabrication from our factory in Kelaniya.
      </p>

      <h2 className="font-medium text-lg mb-4 tracking-tight">Categories</h2>
      <GalleryCategories />

      <h2 className="font-medium text-lg mt-12 mb-6 tracking-tight">All Photos</h2>
      <GalleryGrid columns={2} />

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        Need a custom part?{' '}
        <Link
          href="/#contact"
          className="underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600"
        >
          Contact us
        </Link>{' '}
        with your requirements or send a sample for replication.
      </p>
    </section>
  )
}

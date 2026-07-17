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
    <section className="mx-auto w-full max-w-3xl space-y-8">
      <div className="section-card">
        <h1 className="mb-2 text-2xl font-semibold uppercase tracking-[0.16em] text-black">
          Gallery
        </h1>
        <p className="text-sm leading-6 text-neutral-600">
          Below are some images of our work — spare parts, wear components, and industrial fabrication from our factory in Kelaniya.
        </p>
      </div>

      <div className="section-card">
        <h2 className="mb-4 text-lg font-semibold uppercase tracking-[0.16em] text-black">
          Categories
        </h2>
        <GalleryCategories />
      </div>

      <div className="section-card">
        <h2 className="mb-5 text-lg font-semibold uppercase tracking-[0.16em] text-black">
          All Photos
        </h2>
        <GalleryGrid columns={2} />
      </div>

      <p className="text-sm text-neutral-600">
        Need a custom part?{' '}
        <Link href="/#contact" className="font-medium text-black underline underline-offset-4">
          Contact us
        </Link>{' '}
        with your requirements or send a sample for replication.
      </p>
    </section>
  )
}

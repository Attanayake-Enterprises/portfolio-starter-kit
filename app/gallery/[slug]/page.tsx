import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GalleryGrid } from 'app/components/gallery-grid'
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from 'app/data/company'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(galleryCategories).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const category = galleryCategories[slug as GalleryCategory]

  if (!category) {
    return { title: 'Not Found' }
  }

  return {
    title: category.title,
    description: category.description,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const category = galleryCategories[slug as GalleryCategory]

  if (!category) {
    notFound()
  }

  const items = galleryItems.filter((item) => item.category === slug)

  return (
    <section className="space-y-6">
      <div className="section-card">
        <Link href="/gallery" className="mb-4 inline-block text-sm uppercase tracking-[0.18em] text-black hover:text-neutral-600">
          ← Back to gallery
        </Link>
        <h1 className="mb-2 text-2xl font-semibold uppercase tracking-[0.16em] text-black">
          {category.title}
        </h1>
        <p className="text-sm leading-6 text-neutral-600">{category.description}</p>
      </div>

      <div className="section-card">
        <GalleryGrid category={slug as GalleryCategory} />
      </div>

      <p className="text-sm text-neutral-600">
        {items.length} {items.length === 1 ? 'photo' : 'photos'}
      </p>
    </section>
  )
}

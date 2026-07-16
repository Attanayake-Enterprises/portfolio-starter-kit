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
    <section>
      <Link
        href="/gallery"
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-6 inline-block"
      >
        ← Back to gallery
      </Link>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        {category.title}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm">
        {category.description}
      </p>
      <GalleryGrid category={slug as GalleryCategory} />
      <p className="mt-8 text-sm text-neutral-500">
        {items.length} {items.length === 1 ? 'photo' : 'photos'}
      </p>
    </section>
  )
}

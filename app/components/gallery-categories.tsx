import Link from 'next/link'
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from 'app/data/company'

export function GalleryCategories() {
  const categories = Object.entries(galleryCategories) as [
    GalleryCategory,
    (typeof galleryCategories)[GalleryCategory],
  ][]

  return (
    <div className="space-y-3">
      {categories.map(([slug, { title, description }]) => {
        const count = galleryItems.filter((item) => item.category === slug).length

        return (
          <Link key={slug} href={`/gallery/${slug}`} className="block border border-black/15 bg-white p-4 transition-colors hover:bg-black hover:text-white">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-black">
                {title}
              </h3>
              <p className="text-sm tabular-nums text-neutral-600">
                {count} {count === 1 ? 'photo' : 'photos'}
              </p>
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
          </Link>
        )
      })}
    </div>
  )
}

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
    <div className="space-y-6">
      {categories.map(([slug, { title, description }]) => {
        const count = galleryItems.filter((item) => item.category === slug).length

        return (
          <Link
            key={slug}
            href={`/gallery/${slug}`}
            className="block group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline underline-offset-4 decoration-neutral-400">
                {title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm tabular-nums">
                {count} {count === 1 ? 'photo' : 'photos'}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
              {description}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

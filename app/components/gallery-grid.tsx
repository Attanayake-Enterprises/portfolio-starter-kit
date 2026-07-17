import Image from 'next/image'
import { galleryItems, type GalleryCategory } from 'app/data/company'

type GalleryGridProps = {
  category?: GalleryCategory
  limit?: number
  columns?: 2 | 3
}

export function GalleryGrid({
  category,
  limit,
  columns = 2,
}: GalleryGridProps) {
  let items = category
    ? galleryItems.filter((item) => item.category === category)
    : galleryItems

  if (limit) {
    items = items.slice(0, limit)
  }

  return (
    <div
      className={
        columns === 3
          ? 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid grid-cols-1 gap-3 sm:grid-cols-2'
      }
    >
      {items.map((item) => (
        <figure key={item.src} className="group border border-black/15 bg-white">
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {item.caption && (
            <figcaption className="border-t border-black/15 px-3 py-2 text-sm text-neutral-600">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

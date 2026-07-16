import { baseUrl } from 'app/sitemap'
import { company, galleryCategories } from 'app/data/company'

export async function GET() {
  const itemsXml = Object.entries(galleryCategories)
    .map(
      ([slug, category]) =>
        `<item>
          <title>${category.title}</title>
          <link>${baseUrl}/gallery/${slug}</link>
          <description>${category.description}</description>
          <pubDate>${new Date().toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${company.name}</title>
        <link>${baseUrl}</link>
        <description>${company.tagline}</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}

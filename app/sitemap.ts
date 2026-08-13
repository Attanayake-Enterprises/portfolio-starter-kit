import { galleryCategories } from 'app/data/company'

export const baseUrl = 'https://attanayake-enterprises.vercel.app'

export default async function sitemap() {
  const categoryRoutes = Object.keys(galleryCategories).map((slug) => ({
    url: `${baseUrl}/gallery/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const routes = [
    { route: '', priority: 1 },
    { route: '/plant-spare-parts', priority: 0.9 },
    { route: '/custom-fabrication', priority: 0.9 },
    { route: '/gallery', priority: 0.8 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority,
  }))

  return [...routes, ...categoryRoutes]
}

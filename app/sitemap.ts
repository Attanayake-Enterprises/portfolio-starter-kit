import { galleryCategories } from 'app/data/company'

export const baseUrl = 'https://attanayake-enterprises.vercel.app'

export default async function sitemap() {
  const categoryRoutes = Object.keys(galleryCategories).map((slug) => ({
    url: `${baseUrl}/gallery/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = ['', '/gallery'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...categoryRoutes]
}

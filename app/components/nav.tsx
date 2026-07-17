import Image from 'next/image'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/gallery': {
    name: 'gallery',
  },
  '/#contact': {
    name: 'contact',
  },
}

export function Navbar() {
  return (
    <aside className="mb-8 border-b border-black/10 py-4 sm:mb-10 lg:mb-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3 self-start">
          <div className="flex h-11 w-11 items-center justify-center border border-black/10 bg-white p-2">
            <Image src="/logo.svg" alt="Attanayake Enterprises logo" width={24} height={24} priority />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Attanayake Enterprises
            </p>
            <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-600">
              precision metal solutions
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2" id="nav">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="border border-black/10 bg-white px-3 py-1.5 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

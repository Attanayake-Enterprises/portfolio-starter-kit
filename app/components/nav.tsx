import Image from 'next/image'
import Link from 'next/link'

const navItems = {
  '/plant-spare-parts': {
    name: 'Batching Plant, Mixing and Asphalt Plant Spare Parts',
  },
  '/custom-fabrication': {
    name: 'fabrication',
  },
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
    <aside className="site-header mb-7 px-4 py-4 sm:mb-9 sm:px-5 lg:mb-11 lg:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3 self-start">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white p-2 sm:h-11 sm:w-11">
            <Image src="/logo.svg" alt="Attanayake Enterprises logo" width={24} height={24} priority />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm sm:tracking-[0.2em]">
              Attanayake Enterprises
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/80 sm:text-[11px] sm:tracking-[0.24em]">
              precision metal solutions
            </p>
          </div>
        </Link>

        <nav
          className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:flex sm:flex-wrap sm:items-stretch sm:justify-end"
          id="nav"
          aria-label="Primary navigation"
        >
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="flex min-h-11 items-center justify-center border border-white/35 px-3 py-2.5 text-center text-[11px] uppercase leading-snug tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black first:col-span-2 sm:min-h-0 sm:px-3 sm:py-2 sm:text-sm sm:tracking-[0.18em] sm:first:col-auto"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

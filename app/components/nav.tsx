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
    <aside className="mb-10 tracking-tight lg:mb-14">
      <div className="lg:sticky lg:top-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-full border border-neutral-200/80 bg-white/70 px-3 py-2 shadow-[0_8px_30px_-20px_rgba(17,24,39,0.35)] backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <Image
                src="/logo.svg"
                alt="Attanayake Enterprises logo"
                width={24}
                height={24}
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Attanayake Enterprises
              </p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
                Precision metal solutions
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-1" id="nav">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="rounded-full px-3 py-1.5 text-sm text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}

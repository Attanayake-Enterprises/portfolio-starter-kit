import { ImageResponse } from 'next/og'
import { company } from 'app/data/company'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || company.name

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-neutral-900">
        <div tw="flex flex-col w-full py-12 px-8 items-center justify-center">
          <p tw="text-neutral-400 text-2xl mb-4">{company.tagline}</p>
          <h2 tw="flex flex-col text-5xl font-bold tracking-tight text-white text-center">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: 'output: export' (static HTML) was removed so the live-deals
  // feature can run as a server app on Vercel. The /api/deals webhook
  // (POST receiver), Redis runtime calls, revalidatePath('/sales') and
  // `revalidate = 0` routes all require a server runtime — static export
  // cannot host them and crashed the build.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
}

export default nextConfig

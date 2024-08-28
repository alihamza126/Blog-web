import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import { cx } from './utils'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import NextTopLoader from 'nextjs-toploader'
import siteMetadata from './utils/SiteMetaData'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-in' })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-mr' })

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'Social_Twitter_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cx(manrope.variable, inter.variable)}>
      <body
        className={`${inter.className}font-mr dark:bg-dark`}
      >
        <Script>
          {
            `
          if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }

          `
          }

        </Script>
        <NextTopLoader color='#33C27A' showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

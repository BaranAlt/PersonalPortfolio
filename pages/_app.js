import Head from 'next/head'
import { ThemeProvider } from '../contexts/theme'
import { about } from '../data/portfolio'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Navbar.css'
import '../styles/About.css'
import '../styles/Projects.css'
import '../styles/ProjectCard.css'
import '../styles/Skills.css'
import '../styles/Contact.css'
import '../styles/ScrollToTop.css'
import '../styles/Footer.css'
import 'animate.css'

// google analytics
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ga_measurement_id, pageview } from '../lib/google-analytics'
// /google analytics

function MyApp({ Component, pageProps }) {
  // google analytics
  const router = useRouter()
  useEffect(() => {
    if (!ga_measurement_id) return
    const handleRouteChange = (url) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{about.names.join(' ') || 'Portfolio'}</title>

        {/* Favicon Links */}
        <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/images/favicon-16x16.png" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

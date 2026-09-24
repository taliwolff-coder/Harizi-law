import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import Home from './pages/Home'
import About from './pages/About'
import Attorney from './pages/Attorney'
import PracticeIndex from './pages/PracticeIndex'
import PracticeDetail from './pages/PracticeDetail'
import Insights from './pages/Insights'
import InsightArticle from './pages/InsightArticle'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pb-[52px] lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attorney" element={<Attorney />} />
          <Route path="/practice" element={<PracticeIndex />} />
          <Route path="/practice/:slug" element={<PracticeDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/accessibility" element={<Legal kind="accessibility" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}

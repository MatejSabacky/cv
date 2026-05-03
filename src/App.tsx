import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import CareerIndex from './pages/CareerIndex'
import CareerDetail from './pages/CareerDetail'
import SpaceIndex from './pages/SpaceIndex'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import ProjectsIndex from './pages/ProjectsIndex'
import ProjectDetail from './pages/ProjectDetail'
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
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<CareerIndex />} />
        <Route path="/career/:slug" element={<CareerDetail />} />
        <Route path="/space" element={<SpaceIndex />} />
        <Route path="/space/blog" element={<BlogIndex />} />
        <Route path="/space/blog/:slug" element={<BlogPost />} />
        <Route path="/space/projects" element={<ProjectsIndex />} />
        <Route path="/space/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

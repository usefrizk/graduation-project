import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DetailsPage from './pages/DetailsPage'
import TemplatePage from './pages/_TemplatePage'

// Simple page switcher so the flow runs today.
// When more pages arrive, replace it with react-router-dom (see README).
export default function App() {
  const [page, setPage] = useState('landing')
  const [profile, setProfile] = useState(null) // saved from DetailsPage, used by later pages
  const go = (p) => { setPage(p); window.scrollTo(0, 0) }

  switch (page) {
    case 'login': return <LoginPage go={go} />
    case 'signup': return <SignupPage go={go} />
    case 'details': return <DetailsPage go={go} onSubmit={setProfile} />
    // TODO (teammates): add 'plan' | 'meals' | 'injuries' | 'progress' | 'supplements'
    case 'plan': return <TemplatePage go={go} profile={profile} />
    default: return <LandingPage go={go} />
  }
}

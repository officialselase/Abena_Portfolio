import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div
          className={`page-transition ${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === 'fadeOut') {
              setTransitionStage('fadeIn')
              setDisplayLocation(location)
            }
          }}
        >
          <Outlet context={{ key: displayLocation.pathname }} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout

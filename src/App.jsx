import { useState } from 'react'
import Header from './components/Header'
import PortfolioGuide from './components/PortfolioGuide'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <PortfolioGuide />
      <Footer />
    </div>
  )
}

export default App

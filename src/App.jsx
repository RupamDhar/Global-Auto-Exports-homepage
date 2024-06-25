import HeroSection from '../components/HeroSection'
import LandingHubSection from '../components/LandingHubSection'
import Navbar from '../components/Navbar'
import OptionSection from '../components/OptionSection'
import OurHelpSection from '../components/OurHelpSection'
import ServiceSection from '../components/ServiceSection'
import TechSolutionSection from '../components/TechSolutionSection'
import WhyUsSection from '../components/WhyUsSection'
import './App.css'

function App() {


  return (
    <>
      <Navbar />

      <HeroSection />

      <ServiceSection />

      <TechSolutionSection />

      <LandingHubSection />

      <OptionSection />

      <WhyUsSection />

      <OurHelpSection />

      {/* <div style={{ height: '200vh' }}></div> */}
    </>
  )
}

export default App

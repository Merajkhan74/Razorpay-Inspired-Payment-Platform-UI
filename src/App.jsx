
import './App.css'
import CoreFeatures from './component/CoreFeatures'
import Features from './component/PaymentSuite'
import FeaturesCard from './component/BusinessBanking'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import PaymentSuite from './component/PaymentSuite'
import BusinessBanking from './component/BusinessBanking'
import ProductSuite from './component/ProductSuite'
import CompaniesSection from './component/CompaniesSection'
import Testimonial from './component/Testimonial'
import CTASection from './component/CTASection'
import Footer from './component/Footer'

function App() {
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <PaymentSuite/>
      <BusinessBanking/>
      <ProductSuite/>
      <CoreFeatures/>
      <CompaniesSection/>
      <Testimonial/>
      <CTASection/>
      <Footer/>
    </>
  )
}

export default App

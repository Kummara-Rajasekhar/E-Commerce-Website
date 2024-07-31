import React from 'react'
import Banner from './Banner.jsx'
import HomeCategory from './HomeCategory.jsx'
import CategoryShowCase from './CategoryShowCase.jsx'
import Register from './Register.jsx'
import LocationSprade from './LocationSprade.jsx'
import About from './About.jsx'
import AppSection from './AppSection.jsx'
import Sponsor from './Sponsor.jsx'
const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSprade/>
      <About/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home;

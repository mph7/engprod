import './App.css'
import HeroSection from "./container/HeroSection/HeroSection.jsx";
import PageHeader from "./container/PageHeader/PageHeader.jsx";
import WhatIs from "./container/WhatIs/WhatIs.jsx";
import ExpertiseAreas from "./container/ExpertiseAreas/ExpertiseAreas.jsx";
import Activities from "./container/Activities/Activities.jsx";
import Visit from "./container/Visit/Visit.jsx";
import Week from "./container/Week/Week.jsx";
import Athletic from "./container/Athletic/Athletic.jsx";
import Testimonials from "./container/Testimonials/Testimonials.jsx";
import Faq from "./container/Faq/Faq.jsx";
import Footer from "./container/Footer/Footer.jsx";

function App() {
  return(
    <>
      <PageHeader></PageHeader>
      <HeroSection></HeroSection>
      <WhatIs></WhatIs>
      <ExpertiseAreas></ExpertiseAreas>
      <Activities></Activities>
      <Visit></Visit>
      <Week></Week>
      <Athletic></Athletic>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Footer></Footer>
    </>
  )
}

export default App

import './App.css'
import HeroSection from "./container/HeroSection/HeroSection.jsx";
import PageHeader from "./container/PageHeader/PageHeader.jsx";
import WhatIs from "./container/WhatIs/WhatIs.jsx";
import ExpertiseAreas from "./container/ExpertiseAreas/ExpertiseAreas.jsx";

function App() {
  return(
    <>
      <PageHeader></PageHeader>
      <HeroSection></HeroSection>
      <WhatIs></WhatIs>
      <ExpertiseAreas></ExpertiseAreas>
    </>
  )
}

export default App

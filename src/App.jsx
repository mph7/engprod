import './App.css'
import HeroSection from "./container/HeroSection/HeroSection.jsx";
import PageHeader from "./container/PageHeader/PageHeader.jsx";
import WhatIs from "./container/WhatIs/WhatIs.jsx";

function App() {
  return(
    <>
      <PageHeader></PageHeader>
      <HeroSection></HeroSection>
      <WhatIs></WhatIs>
    </>
  )
}

export default App

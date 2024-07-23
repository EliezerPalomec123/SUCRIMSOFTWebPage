import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent'
import { BannerComponent } from './components/BannerComponent'
import { UsComponent } from './components/UsComponent'
import { UsLgComponent } from './components/UsLgComponent'
import { MoreUsComponent } from './components/MoreUsComponent'
import { TecnologiasComponent } from './components/TecnologiasComponent'
import { ServiciosComponent } from './components/ServiciosComponent'
import { ContactFormComponent } from './components/ContactFormComponent'
import { Footercomponent } from './components/Footercomponent'

function App() {

  return (
    <>
      <HeaderComponent/>
      <BannerComponent/>
      <UsComponent/>
      <UsLgComponent/>
      <MoreUsComponent/>
      <TecnologiasComponent/>
      <ServiciosComponent/>
      <ContactFormComponent/>
      <Footercomponent/>
    </>
  )
}

export default App

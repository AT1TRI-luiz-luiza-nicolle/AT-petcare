import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VLibras from '@djpfs/react-vlibras'
import './App.css'
import Home from './components/home'

function App() {
  return (
    <>
    <VLibras forceOnload={true}/>
    
      <Home/>
    </>
  )
}

export default App

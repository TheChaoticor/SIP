import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navigation from './Components/Navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
    </>
  )
}

export default App

import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-700 p-4 text-center text-xl font-serif text-slate-200'> Count : {count} </h1>
    </>
  )
}

export default App

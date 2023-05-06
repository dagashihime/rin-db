import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const data = fetch('/api/dry')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
    })

  return (
    <>
      <div className='text-6xl'>
        Rin cute
      </div>
    </>
  )
}

export default App

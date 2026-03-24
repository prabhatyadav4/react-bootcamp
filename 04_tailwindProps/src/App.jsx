import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-black text-amber-50'>Tailwind Test</div>
     <Card title = "Prabhat" description = "Clicked by Prabhat Yadav"/>
     <Card title = "Mayank" description = "Clicked by Mayank Sharma"/>
     <Card/>
    </>
  )
}

export default App
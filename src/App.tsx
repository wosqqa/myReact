import { useContext, useState, useMemo } from 'react'
import './App.scss'
import usetCon from './store'
function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('2022.10.19')
  return (
    <div className='App'>
      <div className='back'></div>
      <div className='title'>天天挖矿</div>
      <div className='rule'></div>
      <div className='gold'></div>
      <div className='card'></div>
      <div className='billing'></div>
      <div className='dtore'></div>
    </div>
  )
}

export default App

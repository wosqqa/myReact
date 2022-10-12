import { useContext, useState, useMemo } from 'react'
import './App.scss'
import usetCon from './store'
function App() {
  return (
    <div className='App'>
      <div className='topbox'>
        <div className='back'></div>
        <div className='title'>天天挖矿</div>
        <div className='rule'></div>
        <div className='gold'>100g</div>
      </div>
      <div className='centerbox'>
        <div className='progress'>
          <div className='v' style='{{width:50%}}'></div>
          <div className='power-num'>体力值：453</div>
        </div>
      </div>
      <div className='bottom'>
        <div className='card'></div>
        <div className='billing'></div>
        <div className='dtore'></div>
      </div>
    </div>
  )
}

export default App

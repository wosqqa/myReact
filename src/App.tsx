import { useContext, useState, useMemo } from 'react'
import './App.scss'
import usetCon from './store'
import bgold from './assets/img/b.png'
function App() {

  const [bubbleInfo, setBubbleInfo] = useState([
    {
      idx: 1, //下标
      mineral: 0 //矿产值：0不展示，大于0为当前气泡的矿产值
    },
    {
      idx: 2,
      mineral: '100'
    },
    {
      idx: 3,
      mineral: '180'
    },
    {
      idx: 4,
      mineral: '30'
    }
  ])
  let bInfo = bubbleInfo.map((b) => (
    <div className='item' key={b.idx}>
      <img src={bgold} alt='' />
      {b.mineral}
    </div>
  ))

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
          <div className='v' style={{ width: '50%' }}></div>
          <div className='power-num'>体力值：453</div>
        </div>
        <div className='kgren'></div>
        <div className='other-mining'>{bInfo}</div>
      </div>
      <div className='bottom'>
        <div className='using-props'>
          <div className='using-item p-1'>
            <div className='count-down'>00:00:01</div>
            <div className='pic'>
              <div className='v'>1.5倍</div>
            </div>
          </div>
          <div className='using-item p-2'>
            <div className='count-down'>00:00:01</div>
            <div className='pic'>
              <div className='v'>1.5倍</div>
            </div>
          </div>
        </div>
        <div className='card'></div>
        <div className='billing'></div>
        <div className='dtore'></div>
      </div>
    </div>
  )
}

export default App

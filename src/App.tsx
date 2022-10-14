import { useReducer, useState, useMemo } from 'react'
import './App.scss'
import UserCon from './store'
import RuleDialog from './components/RulePopup'
import StorePopup from './components/StorePopup'
import bgold from './assets/img/b.png'
const dialogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 1:
      return <RuleDialog />
    case 2:
      return <StorePopup />
    case undefined:
      return ''
    default:
      return state
  }
}
function App() {
  let [dialog, setDialog] = useState({
    dialogShow: false,
    dialogType: 1,
  })
  const [dialogBox, dialogBoxDispath] = useReducer(dialogReducer, '')
  let changeDialog = (show: boolean, type: number) => {
    setDialog({ dialogShow: show, dialogType: type })
    dialogBoxDispath({ type })
  }
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
    <UserCon.Provider
      value={{
        changeDialog,
        ...dialog
      }}
    >
      <div className='App'>
        <div className='topbox'>
          <div className='back'></div>
          <div className='title'>
            天天挖矿
          </div>
          <div className='rule' onClick={() => changeDialog(true, 1)}></div>
          <div className='gold'>100g</div>
        </div>
        <div className='centerbox'>
          <div className='progress'>
            <div className='v' style={{ width: '50%' }}></div>
            <div className='power-num'>体力值： </div>
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
          <div className='card' onClick={() => changeDialog(true, 3)}></div>
          <div className='billing' onClick={() => changeDialog(true, 4)}></div>
          <div className='dtore' onClick={() => changeDialog(true, 2)}></div>
        </div>
        {dialogBox}
      </div>
    </UserCon.Provider>
  )
}

export default App

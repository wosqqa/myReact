import { useReducer, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import UserCon from './UserCon'
import RuleDialog from './components/RulePopup'
import StorePopup from './components/StorePopup'
import bgold from './assets/img/b.png'
import { setUsername } from './demo/MemberSlice'
import { useGetHanbaoListQuery } from './demo/MemberApi'

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
  const { data, isSuccess, isLoading } = useGetHanbaoListQuery(null, {
    selectFromResult: (result) => {
      // 指定useQuery的返回结果，可以对返回结果二次加工
      return result
    },
    pollingInterval: 0, //设置轮训的时间 单位毫秒
    skip: false, //是否跳过当前请求， 默认false
    refetchOnMountOrArgChange: false, //设置是否每次的都加载数据， false使用缓存，true每次加载数据，数字缓存的时间
    refetchOnFocus: true, // 是否在重新获取焦点时重载数据
    refetchOnReconnect: true //是否在重新连接后重载数据
  })
  console.log('获取数据',data, isSuccess, isLoading)
  const rct = useSelector((state) => state)
  const member = rct.member
  const dispatch = useDispatch()
  let [dialog, setDialog] = useState({
    dialogShow: false,
    dialogType: 1,
  })
  const [dialogBox, dialogBoxDispath] = useReducer(dialogReducer, '')
  let changeDialog = (show: boolean, type: number) => {
    setDialog({ dialogShow: show, dialogType: type })
    dialogBoxDispath({ type })
    dispatch(setUsername('新名称'))
    const {
      data: data2,
      isSuccess: isSuccess2,
      isLoading: isLoading2
    } = useGetHanbaoListQuery(null, {
      selectFromResult: (result) => {
        // 指定useQuery的返回结果，可以对返回结果二次加工
        return result
      },
    })
  console.log('点击获取获取数据', data2, isSuccess2, isLoading2)
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
            {member.username}挖矿{isSuccess && data.dig_status}
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

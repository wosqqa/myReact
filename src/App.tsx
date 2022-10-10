import { useContext, useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './List'
import AllContext from './AllContext'

function App() {
  const allCon = useContext(AllContext)
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('2022.10.19')
  const [ulist, setUlist] = useState([
    {
      name: '广场打卡',
      location: '上海东方明珠塔',
      pic: 'https://resources.yiqibuduoduo.com/group/20200917/1051112613.jpg',
      accid: '1002',
      create_at: '06:51',
      id: 10
    },
    {
      name: '外滩打卡',
      location: '上海中心大厦',
      pic: 'https://resources.yiqibuduoduo.com/group/20200917/1051112613.jpg',
      accid: '1012',
      create_at: '07:20',
      id: 101
    }
  ])
  const [doctxt, setDoctxt] = useState('初始化Vite+React')
  let changeTxt = () => setTitle((title) => title + '打卡记录')
  let changeList = () => { 
    allCon.totalAmount = allCon.totalAmount + 8
    setUlist([
      {
        name: '外滩打卡',
        location: '上海中心大厦',
        pic: 'https://resources.yiqibuduoduo.com/group/20200917/1051112613.jpg',
        accid: '10122',
        create_at: '03:20',
        id: 3322
      },
      ...ulist
    ])
    
  }
  let delList = (id: Number) => { 
    const nlist = ulist.filter(item => item.id != id);
    console.log('删除了', nlist, id)
    setUlist(nlist)
  }
  const titleOption = useMemo(() => {
    return { title }
  }, [title])
  let userArr = ulist.map((item) => (
    <div className='item' key={item.id}>
      <img src={item.pic} className='icon' onClick={() => delList(item.id)} />
      <div className='name'>
        {allCon.totalAmount}
        {item.name}
      </div>
      <div className='time'>{item.create_at}</div>
    </div>
  ))
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((c) => c + 2)}>
          {allCon.totalPrice}count is {count}
        </button>
        <p onClick={changeList}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>{userArr}</div>
      <p className='read-the-docs' onClick={changeTxt}>
        {doctxt}
      </p>
      <List
        list={ulist}
        title={title}
        onChangeList={changeList}
        onDelList={delList}
      />
    </div>
  )
}

export default App

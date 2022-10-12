import { useContext, useState, useMemo } from 'react'
import './Store.scss'
function App() {
  const item = { mineral: '', coin: '', left_num: '', store_txt :''}
  return (
    <div className='store-popup'>
      <img src='./img/close.png' alt='' className='close' />
      <div className='t'>商店</div>
      <div className='desc' v-if='true'>
        {item.store_txt}
      </div>
      <div className='goods-ls'>
        <div className='goods-item'>
          <div className='num'>{item.mineral}g</div>
          <img v-show='i == 0' className='icon' src='./img/500g.png' alt='' />
          <img v-show='i == 1' className='icon' src='./img/1000g.png' alt='' />
          <img v-show='i == 2' className='icon' src='./img/2000g.png' alt='' />
          <img v-show='i == 3' className='icon' src='./img/5000g.png' alt='' />
          <div className='price'>价格:{item.coin}金币</div>
          <div className='left'>剩{item.left_num}个</div>
          <div className='btn' key='able' v-if='count[i] <= 0'>
            立即出售
          </div>
          <div className='btn disable' key='disable' v-else>
            {}s后可出售
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { useContext, useState, useMemo } from 'react'
import Backdrop from './backdropDom'
import userCon from '../UserCon'
import './Store.scss'
import closeImg from '../assets/img/close.png'
function StorePopup() {
  let store = useContext(userCon)
  const item = { mineral: '23', coin: '32', left_num: '23', store_txt: '423' }
  return (
    <Backdrop>
      <div className='store-popup'>
        <img
          src={closeImg}
          alt=''
          className='close'
          onClick={() => store.changeDialog(false)}
        />
        <div className='t'>商店</div>
        <div className='desc' v-if='true'>
          {item.store_txt}
        </div>
        <div className='goods-ls'>
          <div className='goods-item'>
            <div className='num'>{item.mineral}g</div>
            <img v-show='i == 0' className='icon' src='./img/500g.png' alt='' />
            <img
              v-show='i == 1'
              className='icon'
              src='./img/1000g.png'
              alt=''
            />
            <img
              v-show='i == 2'
              className='icon'
              src='./img/2000g.png'
              alt=''
            />
            <img
              v-show='i == 3'
              className='icon'
              src='./img/5000g.png'
              alt=''
            />
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
    </Backdrop>
  )
}

export default StorePopup

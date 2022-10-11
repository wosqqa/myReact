import { useState, useRef, useContext, useEffect } from 'react'
import './List.css'
import AllContext from './AllContext'
import usetCon from './store'
function List(props:any) {
  const [inTxt, setInTxt] = useState('')
  const allCon = useContext(AllContext)
  const divRef = useRef()
  
  let userArr = props.list.map((item, index) => (
    <div className='item' key={item.id}>
      <img
        src={item.pic}
        className='icon'
        onClick={() => props.onDelList(index)}
      />
      <div className='name'>
        {allCon.totalAmount}
        {item.name}
      </div>
      <div className='time'>{item.create_at}</div>
    </div>
  ))
  useEffect(() => {
    console.log('参数', props)
  }, [allCon, props])
  return (
    <usetCon.Consumer>
      {(ctx) => { 
        return (
          <div className='libox'>
            <input
              type='text'
              placeholder='添加列表'
              value={ctx.totalPrice}
              onChange={(e) => setInTxt(e.target.value)}
            />
            <div ref={divRef} className='liday' onClick={props.onChangeList}>
              <span className='icon'></span>
              {props.title}-{inTxt}
            </div>
            <div className='content'>{userArr}</div>
          </div>
        )
      }}
    </usetCon.Consumer>
  )
}

export default List
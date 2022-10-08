import { useState } from 'react'
import './List.css'

function List(props:any) {
  const [user, setUser] = useState(props.list)
  console.log('参数', props.children)
  let userArr = user.map((u) => (
    <div className='item' key={u.id}>
      <img src={u.pic} className='icon' />
      <div className='name'>{u.name}</div>
      <div className='time'>{u.create_at}</div>
    </div>
  ))
  return (
    <div className='libox'>
      <div className='liday'>
        <span className='icon'></span>{props.title}
      </div>
      <div className='content'>{userArr}</div>
    </div>
  )
}

export default List

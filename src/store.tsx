import React from 'react'
// import AllContext from './AllContext'

// //使用RTK构建store
// const store = configureStore({
//   reducer: {
//     member: AllContext,
//     user: {
//       totalAmount: 10,
//       totalPrice: 980,
//       addItem: () => {},
//       removeItem: () => {},
//       clearItem: () => {}
//     }
//   }
// })

const usetCon = React.createContext({
  totalAmount: 10,
  totalPrice: 980,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {}
})
export default usetCon

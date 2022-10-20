import React from 'react'

import { Provider, useDispatch, useSelector } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import AllContext from './demo/AllContext'
import stuSlice from './demo/Students'
// //使用RTK构建store
const store = configureStore({
  reducer: {
    user: stuSlice.reducer
  }
})

const UserCon = React.createContext({
  dialogShow: true,
  dialogType: 0,
  totalAmount: 10,
  totalPrice: 980,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {}
})
export default UserCon

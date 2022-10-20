import { createSlice } from '@reduxjs/toolkit'
const stuSlice = createSlice({
  name: 'stu',
  initialState: {
    dialogShow: true,
    dialogType: 0,
    totalAmount: 10,
    totalPrice: 980,
    name: '孙悟空',
    age: 18,
    gender: '男',
    address: '花果山'
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload
    }
  }
})

export default stuSlice
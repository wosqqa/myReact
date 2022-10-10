import AllContext from './AllContext'

//使用RTK构建store
const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
  reducer: {
    member: AllContext,
    user: {
      totalAmount: 10,
      totalPrice: 980,
      addItem: () => {},
      removeItem: () => {},
      clearItem: () => {}
    }
  }
})

export default store

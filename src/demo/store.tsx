import { configureStore } from '@reduxjs/toolkit'
import stuSlice from './Students'
import { memberReducer } from './MemberSlice'
import MemberApi from './MemberApi'
// //使用RTK构建store
const store = configureStore({
  reducer: {
    [MemberApi.reducerPath]: MemberApi.reducer,
    stu: stuSlice.reducer,
    member: memberReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MemberApi.middleware)
})

export default store

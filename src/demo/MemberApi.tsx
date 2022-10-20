import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
//创建API对象
const membeApi = createApi({
  reducerPath: 'membeApi', //Api标识，不能和其他的Api或reducer重名
  baseQuery: fetchBaseQuery({
    //指定查询的基础信息，发送请求使用的工具
    baseUrl:
      'https://mock.apifox.cn/m2/1743794-0-default/'
  }),
  tagTypes: ['hanbao'], // 指定Api的标签类型
  endpoints(build) {
    // endpoints用来指定Api的各种功能，
    // build 构建请求的信息
    return {
      getHanbaoList: build.query({
        query() {
          return '43618404?apifoxToken=27GMxIfw0iqPbLVyV8VydyiU7pGSgOgA'
        },
        transformResponse(baseQueryReturnValue: any) {
          console.log('接口数据',baseQueryReturnValue.data)
          return baseQueryReturnValue.data
        },
        providesTags: ['hanbao'] // 缓存tag
      }),
      getHanbaoById: build.query({
        query(id) {
          return `hanbaos/${id}`
        },
        transformResponse(baseQueryReturnValue: any) {
          return baseQueryReturnValue.data
        },
        keepUnusedDataFor: 5 //设置数据的缓存时间 单位秒，默认60秒
      }),
      deleteHaobao: build.mutation({
        query(id) {
          return {
            url: `hanbaos/${id}`,
            method: 'post'
          }
        },
        invalidatesTags: ['hanbao'] // 操作后失效的tag
      })
    }
  }
})
// Api对象创建后，对象中会根据各种方法生成对应的钩子函数
// 通过这些钩子函数可以向服务期发送请求，钩子函数的命名规则 getHanbanList -> useGetHanbaoListQuery
export const {
  useGetHanbaoListQuery,
  useGetHanbaoByIdQuery,
  useDeleteHaobaoMutation
} = membeApi
export default membeApi

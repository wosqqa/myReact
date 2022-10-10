import React from 'react'

const AllContext = React.createContext({
  items: [{ name: '衣服' }, { name: '鞋子' }],
  totalAmount: 10,
  totalPrice: 980,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  cartsDispatch: () => {}
})

export default AllContext

import React from 'react'

const Context = React.createContext({
  favList: [],
  addItemToFavList: () => {},
  removeItemFromFavList: () => {},
})

export default Context

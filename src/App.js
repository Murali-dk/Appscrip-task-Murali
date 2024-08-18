import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import LoginForm from './components/LoginForm'
import Favorite from './components/Favorite'
import Context from './Context'

import './App.css'

class App extends Component {
  state = {favList: []}

  addFav = data => {
    const newData = {...data, favorite: true}
    this.setState(preveState => ({
      favList: [...preveState.favList, newData],
    }))
  }

  removeFav = data => {
    const {favList} = this.state
    const filterData = favList.filter(eachData => eachData.id !== data.id)
    this.setState({favList: filterData})
  }

  render() {
    const {favList} = this.state
    return (
      <Context.Provider
        value={{
          favList,
          addItemToFavList: this.addFav,
          removeItemFromFavList: this.removeFav,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/favorite-items" component={Favorite} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App

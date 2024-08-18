import {Component} from 'react'

import Header from '../Header'
import Products from '../Products'
import Filter from '../Filter'
import Context from '../../Context'

import './index.css'

const getMultipleView = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    view: getMultipleView.initial,
    apiResponseProducts: [],
    filterVisible: true,
    sortProduct: '',
  }

  componentDidMount() {
    this.getProductsApi()
    document.title = 'Appscript'
  }

  getProductsApi = async () => {
    this.setState({view: getMultipleView.inProgress})
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({apiResponseProducts: data, view: getMultipleView.success})
  }

  getSortProductApi = async () => {
    this.setState({view: getMultipleView.inProgress})
    const {sortProduct} = this.state
    const url = `https://fakestoreapi.com/products?sort=${sortProduct}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({apiResponseProducts: data, view: getMultipleView.success})
  }

  listOfProducts = (addItemToFavList, removeItemFromFavList, favList) => {
    const {apiResponseProducts, view} = this.state
    const load = view === 'IN_PROGRESS'

    return (
      <Products
        data={apiResponseProducts}
        load={load}
        addItemToFavList={addItemToFavList}
        removeItemFromFavList={removeItemFromFavList}
        favList={favList}
      />
    )
  }

  hideFilter = () => {
    this.setState({filterVisible: false})
  }

  showFilter = () => {
    this.setState({filterVisible: true})
  }

  updateCategoryProduct = data => {
    this.setState({apiResponseProducts: data})
  }

  sortingProducts = event => {
    this.setState({sortProduct: event.target.value}, this.getSortProductApi)
  }

  toggleFilter = () => {
    this.setState(preveState => ({filterVisible: !preveState.filterVisible}))
  }

  getSuccessView = (addItemToFavList, removeItemFromFavList, favList) => {
    const {filterVisible} = this.state
    return (
      <>
        <Header />
        <ul className="tags">
          <li>Home</li>
          <hr />
          <li>Shop</li>
        </ul>
        <center>
          <div className="product-content">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>
              Lorem ipsum Some common synonyms of summary are compendious,
              concise, laconic, pithy, succinct, and terse. very brief in
              statement or expression, explanation.
            </p>
          </div>
        </center>
        <hr className="nav-complete" />
        <div className="small-divice-filter">
          <h3 onClick={this.toggleFilter} className="filter-small-divice">
            FILTER
          </h3>
          {filterVisible ? (
            <h4 onClick={this.hideFilter} className="fileter-hide-show">
              &lt; HIDE FILTER
            </h4>
          ) : (
            <h4 onClick={this.showFilter} className="fileter-hide-show">
              &gt; SHOW FILTER
            </h4>
          )}
          <hr />
          <select onChange={this.sortingProducts} className="recommend-content">
            <option value="recommended">RECOMMENDED</option>
            <option value="newest-first">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="desc">PRICE: HIGH TO LOW</option>
            <option value="asc">PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <hr />
        <div className="filter-and-products">
          <Filter
            updateCategoryProductt={this.updateCategoryProduct}
            filterVisible={filterVisible}
          />
          {this.listOfProducts(
            addItemToFavList,
            removeItemFromFavList,
            favList,
          )}
        </div>
      </>
    )
  }

  getView = (addItemToFavList, removeItemFromFavList, favList) => {
    const {view} = this.state
    switch (view) {
      case getMultipleView.success:
        return this.getSuccessView(
          addItemToFavList,
          removeItemFromFavList,
          favList,
        )
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {addItemToFavList, removeItemFromFavList, favList} = value

          return (
            <div className="Home-backgrond">
              {this.getSuccessView(
                addItemToFavList,
                removeItemFromFavList,
                favList,
              )}
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home

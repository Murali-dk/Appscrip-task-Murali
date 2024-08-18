import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

import './index.css'

const Products = props => {
  const {data, load, addItemToFavList, removeItemFromFavList, favList} = props
  const alreadyLogin = Cookies.get('userDetail')

  const addToFavourite = id => {
    const findData = data.find(eachProduct => id === eachProduct.id)
    addItemToFavList(findData)
  }

  const removeFavourite = id => {
    const findRemoveItem = favList.find(eachData => eachData.id === id)
    removeItemFromFavList(findRemoveItem)
  }

  if (load) {
    return (
      <div className="loader">
        <Loader type="TailSpin" color="blue" width={80} height={80} />
      </div>
    )
  }

  return (
    <ul className="list-of-products">
      {data.map(eachProduct => {
        const {category, id, title, image} = eachProduct
        const isFav = favList.find(eachItem => eachItem.id === id)

        return (
          <li key={id} className="each-product">
            <div>
              {alreadyLogin !== undefined ? (
                <Link to={`/products/${id}`}>
                  <img className="product-img" alt={category} src={image} />
                </Link>
              ) : (
                <img className="product-img" alt={category} src={image} />
              )}
              <h2>{title}</h2>
              <Link to="/login">
                <p>Sign in</p>
              </Link>
            </div>
            <div>
              {isFav ? (
                <button className="heart-btn" type="button">
                  {' '}
                  <FaHeart
                    className="red-fav"
                    onClick={() => removeFavourite(id)}
                  />
                </button>
              ) : (
                <button
                  className="heart-btn"
                  type="button"
                  onClick={() => addToFavourite(id)}
                >
                  {' '}
                  <FaRegHeart className="favorite" />
                </button>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Products

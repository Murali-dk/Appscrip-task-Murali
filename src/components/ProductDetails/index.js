import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import './index.css'

const views = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

const ProductDetails = props => {
  const [productDetail, updateProduct] = useState({})
  const [showView, setView] = useState(views.initial)

  const {category, description, image, price, title} = productDetail

  const {match} = props
  const {params} = match
  const {id} = params

  useEffect(() => {
    setView(views.inProgress)
    const getApiResponse = async () => {
      const url = `https://fakestoreapi.com/products/${id}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      updateProduct(data)
      setView(views.success)
    }
    getApiResponse()
  }, [id])

  const getLoader = () => (
    <div className="loader">
      <Loader type="TailSpin" color="blue" width={80} height={80} />
    </div>
  )

  const successView = () => (
    <div className="singleItem-detail">
      <img className="single-img" alt={title} src={image} />
      <div className="item-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
      </div>
    </div>
  )

  const shower = () => {
    switch (showView) {
      case views.inProgress:
        return getLoader()
      case views.success:
        return successView()
      default:
        return null
    }
  }

  return (
    <div>
      <Header />
      {shower()}
    </div>
  )
}

export default ProductDetails

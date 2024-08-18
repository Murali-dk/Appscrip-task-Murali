import {useEffect, useState} from 'react'

import './index.css'

const Filter = props => {
  const {filterVisible, updateCategoryProductt} = props
  const [categoriesList, setCategory] = useState([])
  const [filterCategory, setFilterCategory] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const categoryUrl = 'https://fakestoreapi.com/products/categories'
      const response = await fetch(categoryUrl)
      const categoryList = await response.json()
      setCategory(categoryList)
    }

    getCategories()
  }, [categoriesList])

  useEffect(() => {
    const getFilterCategory = async () => {
      if (filterCategory.length > 0) {
        fetch(
          `https://fakestoreapi.com/products/category/${
            filterCategory[filterCategory.length - 1]
          }`,
        )
          .then(res => res.json())
          .then(json => updateCategoryProductt(json))
      }
    }
    getFilterCategory()
  }, [filterCategory])

  const selectCategory = event => {
    if (event.target.checked) {
      setFilterCategory(preve => [...preve, event.target.id])
    } else if (event.target.checked === false) {
      const filt = filterCategory.filter(each => event.target.id !== each)
      setFilterCategory(filt)
    }
  }

  if (filterVisible) {
    return (
      <div className="filter-container">
        <input id="id" type="checkbox" height={50} width={50} />
        <label htmlFor="id">CUSTOMIZBLE</label>
        <hr />
        <div className="categories">
          <h3 style={{fontWeight: 'bold', marginTop: '20px'}}>CATEGORIIES </h3>
          <ul>
            {categoriesList.map(each => (
              <li key={each}>
                <input
                  onChange={selectCategory}
                  name="category"
                  type="radio"
                  id={each}
                />
                <label htmlFor={each}>{each}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  return null
}

export default Filter

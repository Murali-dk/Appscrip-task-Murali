import Header from '../Header'
import Context from '../../Context'

import './index.css'

const Favorite = () => (
  <Context.Consumer>
    {value => {
      const {favList} = value

      const itemInFav = favList.length > 0

      const getInformation = () => {
        if (itemInFav) {
          return favList.map(eachIem => (
            <li className="card">
              <img
                style={{width: '150px'}}
                alt={eachIem.title}
                src={eachIem.image}
              />
              <h1>{eachIem.title}</h1>
            </li>
          ))
        }
        return null
      }

      const getEmptyView = () => (
        <div className="empty">
          <h1>NO FAVORITE ITEMS</h1>
          <img
            className="empty-img"
            alt="no data"
            src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-485.jpg?"
          />
        </div>
      )

      return (
        <div>
          <Header />
          {itemInFav ? (
            <ul className="items-cont">{getInformation()}</ul>
          ) : (
            getEmptyView()
          )}
        </div>
      )
    }}
  </Context.Consumer>
)

export default Favorite

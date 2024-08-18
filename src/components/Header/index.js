import {Link} from 'react-router-dom'
import {VscThreeBars} from 'react-icons/vsc'
import {CiSearch} from 'react-icons/ci'
import {FaRegHeart} from 'react-icons/fa'
import {IoBagHandleOutline} from 'react-icons/io5'
import {SiReactquery} from 'react-icons/si'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-section">
      <div className="icon-size">
        <VscThreeBars className="nav-icon hide-large" />
        <Link style={{textDecoration: 'none'}} to="/">
          <button className="non-btn" type="button">
            {' '}
            <SiReactquery className="nav-icon" />
          </button>
        </Link>
      </div>
      <h1 className="logo-head">Logo</h1>
      <div className="icons">
        <CiSearch className="nav-icon" />
        <Link style={{textDecoration: 'none'}} to="/favorite-items">
          <button className="non-btn" type="button">
            Favorite
            <FaRegHeart className="nav-icon" />
          </button>
        </Link>
        <IoBagHandleOutline className="nav-icon" />
        <select className="select-lan">
          <option>ENG</option>
          <option>Tamil</option>
        </select>
      </div>
    </nav>
    <ul className="large-divice-tags">
      <li>SHOP</li>
      <li>SKILLS</li>
      <li>STORIES</li>
      <li>ABOUT</li>
      <li>CONTACT US</li>
    </ul>
    <hr className="nav-complete" />
  </>
)
export default Header

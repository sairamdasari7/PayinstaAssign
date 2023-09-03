import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/schedules">
          Schedules
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Membership
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Pricing
        </Link>
      </li>
    </ul>
    <div>
      <ul className="nav-items-list-2">
        <li className="link-item-1">
          <Link className="route-link-3" to="/contact">
            Offers
          </Link>
        </li>
        <li className="link-item-1">
          <Link className="route-link-2" to="/bloglist">
            <button className="courses" type="button">
              Courses
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header

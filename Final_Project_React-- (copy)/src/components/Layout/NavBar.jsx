import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MealDB Finder
        </Link>

        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function NavBar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MealDB Finder
        </Link>

        <div className="navbar-nav me-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>

        <div className="d-flex align-items-center gap-2">
          {user ? (
            <>
              <span className="text-white">Signed in as: {user}</span>
              <button className="btn btn-sm btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link className="btn btn-sm btn-outline-light" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
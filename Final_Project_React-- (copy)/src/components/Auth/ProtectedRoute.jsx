import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const currentUser = localStorage.getItem('currentUser')

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProtectedRoute
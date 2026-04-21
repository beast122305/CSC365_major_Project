import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="text-center py-5">
      <h1>404</h1>
      <p>The page you requested was not found.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage
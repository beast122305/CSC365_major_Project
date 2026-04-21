import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    const result = login(username, password)

    if (result.success) {
      navigate('/')
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '420px' }}>
      <h1 className="h3 mb-3">Login or Create Account</h1>
      <p className="mb-3">
        Enter a username and password. If the username does not exist, a new
        local account will be created.
      </p>

      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Login / Sign Up
        </button>
      </form>
    </div>
  )
}

export default LoginPage
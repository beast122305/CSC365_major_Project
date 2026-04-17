import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  function login(username, password) {
    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername || !trimmedPassword) {
      return { success: false, message: 'Username and password are required.' }
    }

    const storedPassword = localStorage.getItem(`user_${trimmedUsername}`)

    if (storedPassword) {
      if (storedPassword !== trimmedPassword) {
        return { success: false, message: 'Incorrect password.' }
      }
    } else {
      localStorage.setItem(`user_${trimmedUsername}`, trimmedPassword)
    }

    localStorage.setItem('currentUser', trimmedUsername)
    setUser(trimmedUsername)

    return { success: true }
  }

  function logout() {
    localStorage.removeItem('currentUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useAuth() {
  return useContext(AuthContext)
}
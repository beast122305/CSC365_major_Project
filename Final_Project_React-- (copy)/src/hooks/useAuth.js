import { useEffect, useState } from 'react'

function useAuth() {
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
      if (storedPassword === trimmedPassword) {
        localStorage.setItem('currentUser', trimmedUsername)
        setUser(trimmedUsername)
        return { success: true }
      }

      return { success: false, message: 'Incorrect password.' }
    }

    localStorage.setItem(`user_${trimmedUsername}`, trimmedPassword)
    localStorage.setItem('currentUser', trimmedUsername)
    setUser(trimmedUsername)
    return { success: true }
  }

  function logout() {
    localStorage.removeItem('currentUser')
    setUser(null)
  }

  return { user, login, logout }
}

export default useAuth
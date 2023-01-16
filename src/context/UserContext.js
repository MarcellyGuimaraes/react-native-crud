import { createContext } from 'react'
import users from '../data/users'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        state: { users },
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

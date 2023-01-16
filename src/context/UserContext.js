import { useReducer } from 'react'
import { createContext } from 'react'
import users from '../data/users'

const initialState = { users }
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const reducer = (state, action) => {
    console.warn(action)
    return state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext

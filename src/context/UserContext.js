import { useReducer } from 'react'
import { createContext } from 'react'
import users from '../data/users'

const initialState = { users }
const UserContext = createContext({})

const actions = {
  createUser(state, action) {
    const user = action.payload
    user.id = Math.random()
    return {
      ...state,
      users: [...state.users, user],
    }
  },
  deleteUser(state, action) {
    const user = action.payload
    return {
      ...state,
      users: state.users.filter((u) => u.id !== user.id),
    }
  },
}

export const UserProvider = ({ children }) => {
  const reducer = (state, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
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

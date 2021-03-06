import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/userType"


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get('http://jsonplaceholder.typicode.com/users')
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'You have mistake'})
    }
  }
}

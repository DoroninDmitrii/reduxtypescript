import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";


const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {}
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {}
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {}
    case TodoActionTypes.SET_TODO_PAGE:
      return {}  


    default:
      return state 
  }

}

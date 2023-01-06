import { combineReducers } from "redux"
import { ADD_PERSON, DELETE_PERSON } from "./ActionTypes"


const defaultState = {
  users: ["Siva", "Kalyan", "Anil", "Kumar"],
  persons: [
    {fname:"siva",lname:"Kalyan",email:"sivacoolkalyan"}
  ],
  products: [],
  books: []
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADDUSER":
      let newUsers = [...state.users]
      newUsers.push(action.payload)
      return { ...state, users: newUsers }
    case "DELETEUSER":
      let updateUsers = state.users.filter((user) => user !== action.payload)
      return { ...state, users: updateUsers }

    default:
      return state;
  }

}

export const personsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      let newPersons = [...state]
      newPersons.push(action.payload)

      return newPersons;
      case DELETE_PERSON:
        return state.filter((person)=>person.email !== action.payload.email)

    default:
      return state.persons
  }
}

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {


    default:
      return state
  }

}

export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {


    default:
      return state
  }

}

export const rootReducer = combineReducers({
  users: userReducer,
  persons: personsReducer,
  products: productsReducer,
  books : booksReducer
})
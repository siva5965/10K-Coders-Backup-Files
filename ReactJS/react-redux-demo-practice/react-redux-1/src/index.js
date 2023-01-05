import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { addUserAction } from './Components/Actions';

const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultState = {
  users : ["Cycle","Bike","car","Tractor"]
}

const reducer = (state = defaultState, action) =>{
  switch (action.type) {
    case "ADDUSER":
      let newUsers = [...state.users]
      newUsers.push(action.payload)
      return{...state,users : newUsers}
    case "DELETEUSER":
      let updateUsers = state.users.filter((user)=>user !== action.payload)
      return{...state,users : updateUsers}
    
  
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store)
store.dispatch(addUserAction())

root.render(
  <React.StrictMode>
    <Provider store = {store}>
     <App /> 
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

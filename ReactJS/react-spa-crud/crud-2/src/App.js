
import './App.css';
import Users from './Components/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import EditUser from './Components/EditUser';
import DeleteUser from './Components/DeleteUser'
import CreateUser from './Components/CreateUser';
import NavBar from './Components/NavBar';

function App() {

  return (
    // <div className="App">

      // {/* <Users/> */}
    // </div>

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Users/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
          <Route path='/delete/:id' element={<DeleteUser/>}/>
          <Route path='/create' element={<CreateUser/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

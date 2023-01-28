
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './Components/CreateUser';
import DeleteUser from './Components/DeleteUser';
import EditUser from './Components/EditUser';
import Layout from './Components/Layout';
import NavBar from './Components/NavBar';
import Users from './Components/Users';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route index element={<Users/>}/>
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/delete/:id' element={<DeleteUser />} />
          <Route path='/create' element={<CreateUser />} />

        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

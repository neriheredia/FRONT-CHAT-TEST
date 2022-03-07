import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mensseger from './pages/mensseger/Mensseger';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
    const { user } = useContext(AuthContext)

    console.log(user);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={user ? <Mensseger /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

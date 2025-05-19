import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { Route, Routes,Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './contexts/authContext';
import Contact from "./pages/Contact";

function App() {
  const { user } = useContext(AuthContext);
	return (
		<div>
    
			<Routes>
				<Route path='/' element={user ? <Dashboard /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
				<Route path='*' element={<Navigate to={"/login"} />} />
				<Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;

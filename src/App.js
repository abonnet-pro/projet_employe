import './App.css';
import {UserContext} from "./services/usersContext.service";
import NavBar from "./features/common/navbar";
import {useState} from "react";
import {getLocalStorage, USER_KEY} from "./services/localStorage.service";
import {contextPrototype} from "./services/usersContext.service";
import {Route, Routes} from "react-router";
import Home from "./features/home/home";
import Login from "./features/login/component/login.component";
import Logout from "./features/login/component/logout.component";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [user, setUser] = useState(getLocalStorage(USER_KEY));

    contextPrototype.user = user;
    contextPrototype.setUser = setUser;

    return (
        <UserContext.Provider value={ contextPrototype }>
            <NavBar/>
            <main>
                <ToastContainer hideProgressBar/>

                <Routes>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='/login' element={ <Login/> }/>
                    <Route path="/logout" element={ <Logout setUser={ setUser }/> }/>
                </Routes>

            </main>
        </UserContext.Provider>
    );
}

export default App;

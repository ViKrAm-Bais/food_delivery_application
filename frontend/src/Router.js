import React, {Fragment} from 'react';
import { useContext } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DetailView from './components/Restaurant/DetailView';
import AuthContext from './context/AuthContext';

export default function Router() {
    const {loggedIn} = useContext(AuthContext);
    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    {
                        loggedIn === false && 
                        <>
                            <Route exact path="/register">
                                <Register/>
                            </Route> 
                            <Route exact path="/login">
                                <Login/>
                            </Route>
                        </>
                    }
                    {
                        loggedIn === true &&
                        <>
                            <Route exact path="/register">
                                {/* <MyOrder/> */}
                            </Route>
                        </>
                    }
                    
                    <Route exact path='/details/:id' component={DetailView}/>
                    
            </Switch>
        </BrowserRouter>
    )
}

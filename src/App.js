import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter,Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import React,{useContext } from 'react';
import AuthContext from './store/auth-context';
import Buy from './pages/Buy'
import Password from "./pages/Password";
import BookNow from "./pages/BookNow";

function App() {
  const authctx = useContext(AuthContext);
  return (
    
    
        <BrowserRouter>
        <Navbar />
        <Switch>
          {authctx.isLoggedIn && (
             <Route path="/" exact component={Home} />
          )}
         
         
         
         {authctx.isLoggedIn && (<Route path='/recipe/:Buy'>
              <Buy />
          </Route>
         )}

        {authctx.isLoggedIn && (
             <Route path="/about" exact component={About} />
          )}
        {authctx.isLoggedIn && (
             <Route path="/cars" exact component={BookNow} />
          )}


        {authctx.isLoggedIn && (
             <Route path="/contact" exact component={Contact} />
          )}

        {authctx.isLoggedIn && (
             <Route path="/password" exact component={Password} />
          )}
          
          {!authctx.isLoggedIn && (
          <Route path="/signin" exact component={Signin} />
          )}

          {!authctx.isLoggedIn &&(
          <Route path="/login" exact>
            <Login />  
          </Route>
          )}
            
          <Route path="*">
            <Redirect to = '/signin' />
          </Route>

        </Switch>
        <Footer />
        </BrowserRouter>
   
  );
}

export default App;

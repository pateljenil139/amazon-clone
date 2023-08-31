import React, { useEffect } from 'react';
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Checkout from "./Checkout"
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function HeaderWrapper() {
  const location = useLocation();
  const shouldRenderHeader = location.pathname !== '/login';

  return (
    <>
      {shouldRenderHeader && <Header />}
      <Outlet />
    </>
  );
}

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authuser => {
      console.log("THE USER IS >>>", authuser);
      if (authuser) {
        dispatch({
          type: 'SET_USER',
          user: authuser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeaderWrapper />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckInternetConnection from './components/CheckInternetConnection';
import Title from './components/layout/Title';
import './index.css'

const HomePage = React.lazy(() => import('homePage/App'));
const AboutPage = React.lazy(() => import('aboutPage/App'));
const Navigation = React.lazy(() => import('navigation/App'));
const UserForm = React.lazy(() => import('userForm/App'));
const UserDetails = React.lazy(() => import('userDetails/App'));
const Login = React.lazy(() => import('login/App'));
const Signup = React.lazy(() => import('signup/App'));

window.__POWERED_BY_HOST__ = true;

const App = () => {
     
  return (

     <CheckInternetConnection>
      <Title/>
      <Suspense>
        <Routes>
          <Route path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          
          <Route path="/home"
            element={
              <>
                <Navigation />
                <HomePage />
              </>
            }
          />
          <Route path="/about"
            element={
              <>
                <Navigation />
                <AboutPage />
              </>
            }
          />
          <Route path="/createUser"
            element={
              <>
                <Navigation />
                <UserForm updating={false}  />
              </>
            }
          />
          <Route path="/updateUser/:id"
            element={
              <>
                <Navigation />
                <UserForm updating={true} />
              </>
            }
          />
          <Route path="/userDetails/:id"
            element={
              <>
                <Navigation />
                <UserDetails />
              </>
            }
          />
        </Routes>
      </Suspense>
    </CheckInternetConnection>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


// import { lazy } from 'react';

    // PrivateRoute component for rendering private routes
// const PrivateRoute = ({ element: Element, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={
//         isAuthenticated() ? (
//           <Element />
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       }
//     />
//   );
// };


// Dummy login function to simulate authentication
const login = () => {
  // Assuming your authentication logic sets a token in localStorage upon successful login
  localStorage.setItem('token', 'dummy_token');
};

// Dummy logout function to simulate logging out
const logout = () => {
  // Clear the token from localStorage upon logout
  localStorage.removeItem('token');
};

// Dummy authentication check
const isAuthenticated = () => {
  // Check if token exists in localStorage
  return !!localStorage.getItem('token');
};

// PrivateRoute component for rendering private routes
const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? (
          <Element />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

// PublicRoute component for rendering public routes
const PublicRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? (
          <Navigate to="/" replace />
        ) : (
          <Element />
        )
      }
    />
  );
};

// Main App component
const App = () => {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState(isAuthenticated());

  useEffect(() => {
    // Update authentication state on component mount
    setIsAuthenticatedState(isAuthenticated());
  }, []);

  return (
    <Router>
      <Routes>
        <PublicRoute path="/login" element={<LoginPage onLogin={login} />} />
        <PrivateRoute path="/" element={<HomePage />} />
        <PrivateRoute path="/private" element={<PrivatePage />} />
      </Routes>
    </Router>
  );
};

// Login page component
const LoginPage = ({ onLogin }) => {
  const handleLogin = () => {
    // Call login function (dummy authentication)
    onLogin();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Home page component (accessible only when authenticated)
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    
    </div>
  );
};

// Private page component (accessible only when authenticated)
const PrivatePage = () => {
  return (
    <div>
      <h1>Private Page</h1>
      <button onClick={logout}>Logout</button>
      <p>This is a private page.</p>
    </div>
  );
};

export default App;



// working Routes 

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import Login from "./user/login";
// import Contact from "./Contact";
// import Navbar from "./NavBar";
// import NoPage from "./NoPage";
// import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute component

// const isAuthenticated = () => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   console.log(token)
//   return token && token !== null;
// };
// const routes = [
//   {
//     path: '/',
//     element: <Layout />,
//     public: true
//   },
//   {
//     path: '/login',
//     element: <Login />,
//     public: true
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//     public: true
//   },
//   {
//     path: '/dashboard',
//     element: <Navbar />,
//     // public: true,
//     private: true
//   }
// ];

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         {routes?.map((route, index) => {
//           console.log(route.path)
//           if (route.public) {
//             return <Route key={index} path={route.path} element={route.element} />;
//           } 
//           else if (route.private) {

//             return  isAuthenticated() ? <Route key={index} path={route.path} element={route.element} /> :  <Route path="*" element={<Navigate to="/login" replace />} />;
//           }
//         })}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;


import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Lazy load components
const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./user/login"));
const Task = lazy(() => import("./Task"));
const Navbar =lazy(()=> import("./NavBar"));
const NoPage = lazy(()=>import("./NoPage"));
const Count = lazy(()=>import("./Count"));

const isAuthenticated = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token)
  return token && token !== null;
};
const routes = [
  {
    path: '/',
    element: <Layout />,
    public: true
  },
  {
    path: '/404',
    element: <NoPage />,
    public: true
  },
  {
    path: '/login',
    element: <Login />,
    public: true
  },
  {
    path: '/Task',
    element: <Task />,
    public: true
  },
  {
    path: '/Home',
    element: <Home />,
    public: true
  },
  {
    path: '/dashboard',
    element: <Navbar />,
    // public: true,
    private: true
  },
  {
    path: '/count',
    element: <Count />,
    // public: true,
    private: true
  }
];

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes?.map((route, index) => {
          // console.log(route.path)
          if (route.public) {
            return <Route key={index} path={route.path} element={route.element} />;
          } 
          else if (route.private) {
           return  isAuthenticated() ? <Route key={index} path={route.path} element={route.element} /> :  <Route path="*" element={<Navigate to="/login" replace />} />;
          }
        })}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
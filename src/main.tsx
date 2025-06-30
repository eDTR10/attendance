import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider, createBrowserRouter } from "react-router-dom";

import './index.css'
import { Suspense, lazy } from "react";

import Loaderx from './components/loader/screenLoader.tsx';






// const Login = lazy(() =>
//   wait(1300).then(() => import("./screens/Authentication/Login/Login.tsx"))
// );







const AttendanceMainContainer2 = lazy(() =>
  wait(1300).then(() => import("./screens/Attendance/AttendanceMainContainer.tsx"))
);

const AttendanceMainContainer3 = lazy(() =>
  wait(300).then(() => import("./screens/Attendance/Display.tsx"))
);


const router = createBrowserRouter([
  {
    path: "/attendance",
    element:
      <Suspense fallback={<Loaderx />}>
        <AttendanceMainContainer2 />
      </Suspense>
    ,
  },
  {
    path: "/attendance/display",
    element:
      <Suspense fallback={<Loaderx />}>
        <AttendanceMainContainer3 />
      </Suspense>
    ,
  },
 
]);

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

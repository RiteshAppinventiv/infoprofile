import React from 'react';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from '../Components/Authentication/Authentication';
// import { createBrowserRouter } from "react-router-dom";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Login />,
//     },
//     {
//         path: "/signup",
//         element: <SignUp />,
//     },
// ]);



// function Index() {
//     return (
//         ReactDOM.createRoot(document.getElementById("root")).render(
//             <React.StrictMode>
//                 <RouterProvider router={router} />
//             </React.StrictMode>
//         )
//     );
// }

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Authentication />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;

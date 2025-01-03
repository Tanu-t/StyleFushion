import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import Store from "./store/index.js";

// function ErrorPage() {
//   return (
//     <div style={{ padding: '50px', textAlign: 'center' }}>
//       <h1>Oops! An error occurred.</h1>
//       <p>We couldn't load the page. Please try again.</p>
//     </div>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",
         element: <Home />,
        //  errorElement: <ErrorPage />,
         },
      {
        path: "/bag",
        element: <Bag />,
        // errorElement: <ErrorPage />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
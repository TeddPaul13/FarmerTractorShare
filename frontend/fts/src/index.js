import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import Safety from "./pages/safety";
import reportWebVitals from "./reportWebVitals";
import CreateAccount from "./components/createAccount";
import LogIntoAccount from "./components/logIntoAccount";
import ListTractor from "./components/listTractor";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/landingPage";
import ConfirmBookingDetails from "./components/ConfirmBookingDetails";
import BookingMessage from "./components/BookingMessage";
import ListConfirmation from "./components/ListConfirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/safety",
    element: <Safety />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <LogIntoAccount />,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
  {
    path: "/listatractor",
    element: <ListTractor />,
  },
  {
    path: "/confirmbooking",
    element: <ConfirmBookingDetails />,
  },
  {
    path: "/bookingmesssage",
    element: <BookingMessage />,
  },
  {
    path: "/listingmesssage",
    element: <ListConfirmation />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

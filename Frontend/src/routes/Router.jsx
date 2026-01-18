import { createBrowserRouter } from "react-router-dom";

import AuthForm from "../auth/AuthForm";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProtectRoute from "./ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthForm />
  },
  {
    element: <ProtectRoute />,
    children: [
      {
        path: "/dashboard",
        element: (
          <>
          <div className="app-container">
            <Navbar />
            <div className="app-content">
              <Dashboard />
            </div>
            <Footer />
          </div></>
        )
      }
    ]
  }
]);

export default router;

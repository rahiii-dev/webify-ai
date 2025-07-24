import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/modules/landing/pages/LandingPage";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> }
    ]
  }
]);

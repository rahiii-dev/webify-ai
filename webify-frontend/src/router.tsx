import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/modules/landing/pages/LandingPage";
import RootLayout from "@/layouts/RootLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashBoardHome from "./modules/dashboard/pages/DashBoardHome";
import NotFound from "./shared/components/NotFound";
import BuilderMainPage from "./modules/builder/pages/BuilderMainPage";
import ProtectedRoute from "./shared/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashBoardHome /> },
      { path: "website-builder", element: <BuilderMainPage /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

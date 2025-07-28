import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import RootLayout from "@/layouts/RootLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import NotFound from "@/shared/components/NotFound";
import PageLoader from "./shared/components/PageLoader";

const LandingPage = lazy(() => import("@/modules/landing/pages/LandingPage"));
const DashBoardHome = lazy(() => import("@/modules/dashboard/pages/DashBoardHome"));
const BuilderMainPage = lazy(() => import("@/modules/builder/pages/BuilderMainPage"));
const ProjectEditor = lazy(() => import("@/modules/editor/pages/ProjectEditorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <LandingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <DashBoardHome />
          </Suspense>
        ),
      },
      {
        path: "website-builder",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BuilderMainPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/editor/:id",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ProjectEditor />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


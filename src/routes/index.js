import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";


// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import AuthLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout/>,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },

        
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <Group /> },
        {path: "call", element: <CallPage />},
        { path: "profile", element: <Profile /> },
        
        
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);

const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);

const LoginPage = Loadable(
  lazy(() => import("../pages/auth/Login")),
);

const RegisterPage = Loadable(
  lazy(() => import("../pages/auth/Register")),
);

const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);

const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);

const Group = Loadable(lazy(() => import("../pages/dashboard/Group")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call")));

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const Profile = Loadable(
  lazy(() => import("../pages/dashboard/Profile")));

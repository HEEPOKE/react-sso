import { Suspense, lazy, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContext } from "../contexts";

const LoadingPage = lazy(() => import("../pages/loading"));
const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/auth/login"));
const RegisterPage = lazy(() => import("../pages/auth/register"));

export default function AppRouter() {
  const { isLogin } = useContext(AppContext);

  useEffect(() => {
    if (isLogin === "" && window.location.pathname !== "/auth/login") {
      window.location.href = "/auth/login";
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
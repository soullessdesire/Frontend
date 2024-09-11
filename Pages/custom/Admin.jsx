import { useState, useEffect, lazy } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const axios = lazy(() => import("axios"));

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("/auth", { token })
        .then((response) => setIsAuthenticated(response.data.level))
        .catch(() => {
          navigate("/login");
        });
    } else if (location.pathname !== "/register") {
      navigate("/login");
    }
  }, [navigate]);
  return <>{isAuthenticated === 3 ? <></> : <Navigate to={"/login"} />}</>;
}

export default Admin;

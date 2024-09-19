import { useState, lazy, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
const axios = lazy(() => import("axios"));

function Employee() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
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

export default Employee;

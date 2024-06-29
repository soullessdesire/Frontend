import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("/auth", { token })
        .then((response) => setIsAuthenticated(response.data.level))
        .catch(() => {
          // navigate("/login");
        });
    } else if (location.pathname !== "/register") {
      // navigate("/login");
    }
  }, [navigate, location.pathname]);
  return <>{isAuthenticated === 3 ? <></> : <Navigate to={"/login"} />}</>;
}

export default Admin;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clear } from "../utils/auth";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    clear();
    navigate("/login");
  }, [navigate]);
  return (
    <div style={{ background: "purple", width: "100%", height: "100vh" }}>
      Loading..................
    </div>
  );
};

export default Logout;

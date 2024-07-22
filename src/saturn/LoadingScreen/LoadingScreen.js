import React, { useEffect, useState } from "react";
import styles from "./LoadingScree.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }

    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <div className={loading ? styles.container_active : styles.container_disabled}>
        <div className={loading ? styles.container_core_active : styles.container_core_disabled}>
          <CircularProgress sx={{ color: "white" }} />
        </div>
        {children}
      </div>
    </>
  );
};

export default LoadingScreen;

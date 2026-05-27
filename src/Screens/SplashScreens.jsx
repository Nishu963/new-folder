import React from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.bottomContent}>

        <h1 style={styles.heading}>
          Welcome to PopX
        </h1>

        <p style={styles.text}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        
        <button
          style={styles.createButton}
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          style={styles.loginButton}
          onClick={() => navigate("/createaccount")}
        >
          Already Registered? Login
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "375px",
    maxWidth: "100vw",
    height: "min(812px, calc(100dvh - 40px))",
    margin: "20px auto",
    backgroundColor: "#f7f7f7",
    border: "1px solid #ddd",
    position: "relative",
    fontFamily: "Arial",
  },

  bottomContent: {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    padding: "0 20px",
    boxSizing: "border-box",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  text: {
    color: "#888",
    lineHeight: "1.5",
    marginBottom: "25px",
  },

  createButton: {
    width: "100%",
    height: "50px",
    backgroundColor: "#6c25ff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginBottom: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  loginButton: {
    width: "100%",
    height: "50px",
    backgroundColor: "#d9c2ff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default SplashScreen;

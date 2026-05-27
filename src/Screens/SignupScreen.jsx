import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupScreen() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const isFormFilled =
    email &&
    password.length >= 6;

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        <h1 style={styles.heading}>
          Signin to your
          <br />
          PopX account
        </h1>

        <p style={styles.subText}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

      
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {
            password.length > 0 &&
            password.length < 6 && (
              <p style={styles.error}>
                Password must be at least 6 characters
              </p>
            )
          }

        </div>

     
        <button
          style={{
            ...styles.loginButton,
            backgroundColor: isFormFilled
              ? "#6c25ff"
              : "#cfcfcf",
            cursor: isFormFilled
              ? "pointer"
              : "not-allowed",
          }}
          disabled={!isFormFilled}
          onClick={() => navigate("/createaccount")}
        >
          Login
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "375px",
    height: "812px",
    margin: "20px auto",
    border: "1px solid #dcdcdc",
    backgroundColor: "#f7f7f7",
    padding: "40px 22px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  },

  content: {
    width: "100%",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "700",
    color: "#1d1d1d",
    lineHeight: "1.25",
    marginBottom: "18px",
  },

  subText: {
    fontSize: "22px",
    color: "#8c8c8c",
    lineHeight: "1.5",
    marginBottom: "35px",
  },

  inputContainer: {
    position: "relative",
    marginBottom: "28px",
  },

  label: {
    position: "absolute",
    top: "-10px",
    left: "14px",
    backgroundColor: "#f7f7f7",
    padding: "0 6px",
    fontSize: "14px",
    color: "#8b3dff",
    fontWeight: "600",
  },

  input: {
    width: "100%",
    height: "52px",
    border: "2px solid #d9d9d9",
    borderRadius: "8px",
    padding: "0 14px",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#f7f7f7",
  },

  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "6px",
    marginLeft: "5px",
  },

  loginButton: {
    width: "100%",
    height: "56px",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "10px",
    transition: "0.3s",
  },
};

export default SignupScreen;
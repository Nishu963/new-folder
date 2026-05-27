import React from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {

  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        <h1 style={styles.heading}>
          Create your
          <br />
          PopX account
        </h1>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Full Name<span style={styles.star}>*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Phone number<span style={styles.star}>*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            style={styles.input}
          />
        </div>

        
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Email address<span style={styles.star}>*</span>
          </label>

          <input
            type="email"
            placeholder="Marry Doe"
            style={styles.input}
          />
        </div>

       
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Password <span style={styles.star}>*</span>
          </label>

          <input
            type="password"
            placeholder="Marry Doe"
            style={styles.input}
          />
        </div>

        
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Company name
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            style={styles.input}
          />
        </div>

     
        <div style={styles.radioSection}>

          <p style={styles.radioTitle}>
            Are you an Agency?
            <span style={styles.star}>*</span>
          </p>

          <div style={styles.radioContainer}>

            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="agency"
                checked
                readOnly
                style={styles.radio}
              />
              Yes
            </label>

            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="agency"
                style={styles.radio}
              />
              No
            </label>

          </div>
        </div>

      
        <button
          style={styles.button}
          onClick={() => navigate("/account")}
        >
          Create Account
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
    padding: "35px 20px",
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  heading: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#1d1d1d",
    lineHeight: "1.25",
    marginBottom: "30px",
  },

  inputContainer: {
    position: "relative",
    marginBottom: "24px",
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

  star: {
    color: "red",
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

  radioSection: {
    marginTop: "5px",
  },

  radioTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "14px",
  },

  radioContainer: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    color: "#555",
    fontWeight: "500",
  },

  radio: {
    width: "20px",
    height: "20px",
    accentColor: "#7b2cff",
    cursor: "pointer",
  },

  button: {
    marginTop: "auto",
    width: "100%",
    height: "56px",
    backgroundColor: "#6c25ff",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default CreateAccount;
import React from "react";
import profileImg from "../profile.png";

function App() {
  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.headerText}>Account Settings</h2>
      </div>

      {/* Main Content */}
      <div style={styles.contentArea}>

        {/* Profile Section */}
        <div style={styles.profileSection}>

          <div style={styles.profileTop}>

            {/* Profile Image */}
            <div style={styles.imageContainer}>
              <img
                src={profileImg}
                alt="Marry Doe"
                style={styles.profileImage}
              />

              {/* Camera Icon */}
              <div style={styles.cameraIconContainer}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "#ffffff" }}
                >
                  <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div style={styles.textContainer}>
              <h3 style={styles.name}>Marry Doe</h3>
              <p style={styles.email}>Marry@gmail.com</p>
            </div>

          </div>

          {/* Description */}
          <p style={styles.description}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

        </div>

        {/* Dashed Line */}
        <div style={styles.dashedLine}></div>

        {/* Bottom Dashed Line */}
        <div style={styles.bottomLine}></div>

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
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  },

  header: {
    height: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    borderBottom: "1px solid #ececec",
  },

  headerText: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#444444",
    margin: 0,
  },

  contentArea: {
    backgroundColor: "#ffffff",
    height: "calc(100% - 70px)",
    position: "relative",
  },

  profileSection: {
    padding: "28px 20px 24px 20px",
    backgroundColor: "#f7f8f9",
  },

  profileTop: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "24px",
  },

  imageContainer: {
    position: "relative",
    width: "76px",
    height: "76px",
  },

  profileImage: {
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  cameraIconContainer: {
    position: "absolute",
    bottom: "-2px",
    right: "-2px",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "#6B24FA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #f7f8f9",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  name: {
    fontSize: "17px",
    fontWeight: "700",
    color: "#333333",
    margin: 0,
  },

  email: {
    fontSize: "14px",
    color: "#666666",
    margin: 0,
    fontWeight: "500",
  },

  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#555555",
    fontWeight: "500",
    margin: 0,
  },

  dashedLine: {
    width: "100%",
    borderTop: "1.5px dashed #dcdcdc",
  },

  bottomLine: {
    position: "absolute",
    bottom: "40px",
    width: "100%",
    borderTop: "1.5px dashed #dcdcdc",
  },
};

export default App;

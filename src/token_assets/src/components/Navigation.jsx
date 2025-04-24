import React from 'react';
import { Link } from "react-router-dom";
import '../../../token_assets/assets/dbank.css';


function Navigation() {
    const styles = {
        wrapper: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#211F2B",
        },
        container: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          width: "300px",
          borderRadius: "14px",
          padding: "30px 30px 20px 30px",
          textAlign: "center",
        },
        logoPlaceholder: {
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px auto",
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
        },
        button: {
          display: "block",
          textDecoration: "none",
          borderRadius: "7px",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "600",
          border: "2px #617BFF solid",
          color: "white",
          backgroundColor: "#617BFF",
          padding: "15px",
          margin: "10px auto",
          width: "100%",
          transition: "all 0.2s",
        },
        gap: {
          height: "15px"
        },
        a:{
            textDecoration: "none"

        }
      };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* <div style={styles.logoPlaceholder}></div> */}
        {/* <img src="../../../token_assets/assets/dbank_logo.png" alt="Logo" style={styles.logoPlaceholder} /> */}
        {/* <img src={dbankLogo} alt="Logo" style={styles.logo} />  */}
        {/* <img src="../../../token_assets/assets/dbank_logo.png" alt="Logo" style={styles.logoPlaceholder} /> */}


        <img src="dbank_logo.png" alt="DBank logo" width="100" />


       <Link to="/dbank"><button style={styles.button} type="button">Transaction with Cash</button></Link>

        <div style={styles.gap}></div>
        <Link to="/token"><button style={styles.button} type="button">Transaction with Token</button></Link>

      </div>
    </div>

  )
}
export default Navigation;

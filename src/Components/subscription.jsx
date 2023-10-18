import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";

export default function Subscription() {
    const [showMessage,setShowMessgae]=useState(false)
  return (
    <div style={{ backgroundColor: "#63C5DA", margin: "30px 0", padding: "20px" }}>
      <Typography variant="h2" align="center" style={{ color: "#000", fontWeight: "bolder", marginBottom: "20px" }}>
        Subscribe to Our Newsletter
      </Typography>
      <div style={{ display: "flex", flexDirection:"row", alignItems: "center",justifyContent: "center" }}>
        <TextField
          variant="outlined"
          label="Email Address"
          value="muhbil171845@gmail.com"
          style={{ width: "100%", maxWidth: "400px", marginBottom: "20px", marginRight:"10px" }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ width: "10%" }}
          onClick={()=>setShowMessgae(!showMessage)}
        >
          Subscribe
        </Button>
      </div>
      {showMessage && (
            <Alert severity="success">Thanks for subscribing!</Alert>
)}
    </div>
  );
}

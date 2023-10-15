import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Subscription() {
    const [showMessage,setShowMessgae]=useState(false)
  return (
    <div style={{ backgroundColor: "#E5F1ED", margin: "30px 0", padding: "20px" }}>
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
            <div className="flex justify-center items-center mt-4">
            <p className="bg-green-500 text-white font-bold p-3">Thanks for subscribing!</p>
      </div>
)}
    </div>
  );
}

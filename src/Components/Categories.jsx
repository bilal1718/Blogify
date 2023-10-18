import React, { useState } from "react";
import "./categories.css";
import data from "./categories_data.jsx"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + cardsPerPage);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - cardsPerPage);
  };

  const visibleCards = data.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="body">
      <h1 className="heading">Categories</h1>
      <div className="card-container">
        <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
          <KeyboardArrowLeft style={{fontSize:"4rem"}} />
        </IconButton>
        <Grid container spacing={4} style={{ margin: "2px" }}>
          {visibleCards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" alt="Image" height="150" image={card.img} />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Link to={`/category/${card.title}`} style={{textDecoration:"none",fontSize:"1.2rem",color:"blue"}}>
                    Explore <span style={{fontSize:'24px'}}>&#8594;</span>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <IconButton
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= data.length}
        >
          <KeyboardArrowRight style={{fontSize:"4rem"}} />
        </IconButton>
      </div>
    </div>
  );
}

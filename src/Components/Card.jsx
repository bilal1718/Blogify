import React, { useState, useEffect } from 'react';
import { useDataContext } from './DataContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Header from "./header";
import "../App.css";
import { useParams } from 'react-router-dom';
import Footer from './footer';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Cardi = ({category}) => {
  const { data, setSelectedCategory } = useDataContext();
  const { selectedCategory } = useParams(); // Change 'category' to 'selectedCategory'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setSelectedCategory(category); // Update the selected category
  }, [selectedCategory, setSelectedCategory]);

  const newsWithImages = data.filter((post) => post.urlToImage);
  const filteredData = selectedCategory ? newsWithImages.filter((post) => post.category === selectedCategory) : newsWithImages;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);
  const rows = Math.ceil(currentData.length / 3);

  const renderPageNumbers = () => {
    return (
      <div className="flex space-x-2 mx-4 my-4">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-green-400' : 'bg-gray-200'}`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  const renderRows = () => {
    const cardRows = [];
    for (let i = 0; i < rows; i++) {
      const startIndex = i * 3;
      const endIndex = startIndex + 3;
      const rowCards = currentData.slice(startIndex, endIndex);
      cardRows.push(
        <Grid key={i} container spacing={4} style={{ margin: "2px" }}>
          {rowCards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card key={index}>
                <CardMedia component="img" alt="Image" height="150" image={card.urlToImage} />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Link to={card.url} target='_blank' style={{ textDecoration: "none", fontSize: "1.2rem", color: "blue" }}>
                    Explore <span style={{ fontSize: '24px' }}>&#8594;</span>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }
    return cardRows;
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div>{renderRows()}</div>
      </div>
      <div className="flex justify-center mt-4">
        {renderPageNumbers()}
      </div>
      <Footer />
    </div>
  );
};

export default Cardi;

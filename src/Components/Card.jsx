import React, { useState,useEffect } from 'react';
import { useDataContext } from './DataContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from "./header";
import "../App.css";
import { Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import Footer from './footer';

const Cardi = ({category}) => {
  const { data, setSelectedCategory } = useDataContext();
  const { category:selectedCategory } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    setSelectedCategory(selectedCategory || category);
  }, [selectedCategory, category, setSelectedCategory]);
  
const newsWithImages = data.filter((post) => post.urlToImage);
  const totalPages = Math.ceil(newsWithImages.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = newsWithImages.slice(startIndex, endIndex);
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
        const rowCards = newsWithImages.slice(startIndex, endIndex);
        cardRows.push(
          <div key={i} className="flex justify-center space-x-4 mb-4">
            {rowCards.map((post, index) => (
              <Card key={index}>
                <CardMedia
                  component="img"
                  alt="Image"
                  height="150"
                  image={post.urlToImage} // Use post-specific image URL
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Link color="secondary" href={post.url}>
                    Learn More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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

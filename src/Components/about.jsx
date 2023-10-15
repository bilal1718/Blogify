import * as React from "react";
import { useDataContext } from "./DataContext";
import { useParams } from "react-router-dom";
import "../about.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function About() {
  const { data } = useDataContext();
  const { category: selectedCategory } = useParams();

  return (
    <>
      <h1>Top Posts</h1>
      <div>
        {selectedCategory ? (
          <p>Displaying posts for category: {selectedCategory}</p>
        ) : (
          <p>Displaying top-featured posts</p>
        )}
      </div>
      <div className="cards-container">
        {data.map((post) => (
          <Card key={post.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={post.urlToImage}
              title={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* Add your post content here */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

export default function Hero(){
    return(
        <div>
            <Box
          sx={{
            bgcolor: "#003366",
            color: "#FFFFFF",
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              fontWeight="600"
              align="center"
              color="text.inherit"
              gutterBottom
            >
             The Goal is to create writing easy and fast.
            </Typography>
            <Typography variant="h5" align="center" color="text.inherit" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
         <Button variant="contained" endIcon={<SendIcon />}>
        <Link to="/category/blog">
        Explore Blogs
         </Link>
         </Button>
            </Stack>
          </Container>
        </Box>
        </div>
    )
}
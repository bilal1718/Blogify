import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link as MUILink, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', marginTop: 'auto' }}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ color: 'white' }}>
            &copy; {new Date().getFullYear()} Blogify&nbsp;
            Terms&nbsp; Privacy&nbsp;
          </Typography>
          <Box>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Important Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <MUILink
                  href="/category/business"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Business
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="/category/entertainment"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Entertainment
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="/category/health"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Health
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="/category/science"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Science
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="/category/sports"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Sports
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="/category/technology"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Technology
                </MUILink>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Company
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <MUILink
                  href=""
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  About
                </MUILink>
              </li>
              <li>
                <MUILink
                  href=""
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Contact
                </MUILink>
              </li>
              <li>
                <MUILink
                  href=""
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Blog
                </MUILink>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Social Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <MUILink
                  href=""
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  <LinkedInIcon sx={{ marginRight: '8px' }} /> Linkedin
                </MUILink>
              </li>
              <li>
                <MUILink
                  href=""
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  <TwitterIcon sx={{ marginRight: '8px' }} /> Twitter
                </MUILink>
              </li>
              <li>
                <MUILink
                  href=""
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  <GitHubIcon sx={{ marginRight: '8px' }} /> Github
                </MUILink>
              </li>
            </ul>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;

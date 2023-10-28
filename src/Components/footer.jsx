import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link as MUILink, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
function Footer() {
  return (
    <div>
    <AppBar position="static" sx={{
    fontSize:"1.6rem",
    backgroundColor: '#3f51b5',
    marginTop: '0',
    padding:"2rem 0" }}>
      <Container maxWidth="md">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ color: 'white',fontSize:"1.3rem" }}>
            &copy; {new Date().getFullYear()} Blogify&nbsp;
            Terms&nbsp; Privacy&nbsp;
          </Typography>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              Important Links
            </Typography>
            <ul style={{ listStyle: 'none', padding:"5px" }}>
              <li>
                <MUILink
                  href="/category/business"
                  color="inherit"
                  target="_blank"
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
                  target="_blank"
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
                  target="_blank"
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
                  target="_blank"
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
                  target="_blank"
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
                  target="_blank"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  Technology
                </MUILink>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              Company
            </Typography>
            <ul style={{ listStyle: 'none', padding: "5px" }}>
              <li>
                <MUILink
                  href=""
                  target="_blank"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                   <InfoIcon sx={{ marginRight: '8px' }} /> About
                </MUILink>
              </li>
              <li>
                <MUILink
                  href=""
                  target="_blank"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                   <EmailIcon sx={{ marginRight: '8px' }} /> Contact
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="/category/blog"
                  target="_blank"
                  color="inherit"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  <ChatIcon sx={{marginRight:"8px"}}/>Blog
                </MUILink>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: 'white' }}>
              Social Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: "5px" }}>
              <li>
                <MUILink
                  href="https://www.linkedin.com/in/muhammad-bilal-61bb43266/"
                  color="inherit"
                  target="_blank"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  <LinkedInIcon sx={{ marginRight: '8px' }} /> Linkedin
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="https://twitter.com/BilalCodes649"
                  color="inherit"
                  target="_blank"
                  variant="body1"
                  sx={{ color: 'white',textDecoration: 'none' }}
                >
                  <TwitterIcon sx={{ marginRight: '8px' }} /> Twitter
                </MUILink>
              </li>
              <li>
                <MUILink
                  href="https://github.com/bilal1718"
                  target="_blank"
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
    </div>
  );
}

export default Footer;

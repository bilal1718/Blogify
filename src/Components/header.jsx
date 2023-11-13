import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDataContext } from './DataContext';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const CustomTab = styled(Tab)(() => ({
  '&.Mui-selected': {
    fontWeight: 'bold', // Make the active tab bold
  },
}));
const CustomTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: theme.spacing(2), // Adjust the left margin as needed
  '& .MuiTabs-indicator': {
    backgroundColor: 'white', // Set indicator line color to black
  },
}));

export default function Header() {
  const [value, setValue] = React.useState('home');
  const { data,setSelectedCategory } = useDataContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

  };
  const handleCategoryClick = (category) => {
    const lowercaseCategory = category.toLowerCase();
    setSelectedCategory(lowercaseCategory);
    handleMenuClose();
    navigate(`/category/${lowercaseCategory}`);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Blogify
          </Typography>
          <CustomTabs
            value={value}
            onChange={handleChange}
            textColor="white" // Set text color to white
            aria-label="navigation tabs"
          >
            <CustomTab component={Link} to="/" value="home" label="Home"  />
            <CustomTab component={Link} to="/category/blog" value="blog" label="Blog" />
            <CustomTab value="about" label="About" />
            <CustomTab value="contact" label="Contact" />
            <CustomTab
              value="category"
              label="Category"
              aria-controls="category-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            />
          </CustomTabs>
          <Menu
            id="category-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/category/business" onClick={() => handleCategoryClick('business')}>Business</MenuItem>
            <MenuItem component={Link} to="/category/entertainment" onClick={() => handleCategoryClick('entertainment')}>Entertainment</MenuItem>
            <MenuItem component={Link} to="/category/health" onClick={() => handleCategoryClick('health')}>Health</MenuItem>
            <MenuItem component={Link} to="/category/science" onClick={() => handleCategoryClick('science')}>Science</MenuItem>
            <MenuItem component={Link} to="/category/sports" onClick={() => handleCategoryClick('sports')}>Sports</MenuItem>
            <MenuItem component={Link} to="/category/technology" onClick={() => handleCategoryClick('technology')}>Technology</MenuItem>
          </Menu>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      <Link to="/sign-up"><Button variant="contained" style={{marginLeft:"8px",fontWeight:"bold",background:"white",color:"black"}}>
        Log In
      </Button>
      </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Container, IconButton, useMediaQuery } from '@material-ui/core';
import { AccountCircle, Search, ShoppingCart } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useTheme } from '@material-ui/core/styles';

const MobilePanel = () => {
  const [anchorElLang, setAnchorElLang] = React.useState(null);
  const [anchorElJump, setAnchorElJump] = React.useState(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const handleLangMenuClick = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleJumpMenuClick = (event) => {
    setAnchorElJump(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setAnchorElLang(null);
  };

  const handleJumpMenuClose = () => {
    setAnchorElJump(null);
  };

  const buttonStyle = {
    color: 'gray',
    '&:hover': {
      color: 'black',
    },
  };

  const appBarStyle = {
    backgroundColor: 'white',
  };

  const iconColor = 'black'; // Define icon color here

  const imgStyle = {
    marginRight: '8px',
    width: '24px', // Adjust the size as needed
    height: '24px', // Adjust the size as needed
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      {isLargeScreen ? (
        <Container>
          <Toolbar>
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" style={imgStyle} />
            <Button
              style={buttonStyle}
              onClick={handleLangMenuClick}
              endIcon={<ArrowDropDownIcon />}
            >
              United States
            </Button>
            <Menu
              anchorEl={anchorElLang}
              keepMounted
              open={Boolean(anchorElLang)}
              onClose={handleLangMenuClose}
            >
              <MenuItem onClick={handleLangMenuClose}>English</MenuItem>
              <MenuItem onClick={handleLangMenuClose}>Spanish</MenuItem>
              <MenuItem onClick={handleLangMenuClose}>French</MenuItem>
            </Menu>

            <div style={{ flexGrow: 1 }}></div>

            <Button
              style={buttonStyle}
              href="https://example.com/help"
            >
              Help
            </Button>
            <Button
              style={buttonStyle}
              href="https://example.com/contact"
            >
              Contact
            </Button>

            <IconButton color="inherit" style={{ color: iconColor }}>
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit" style={{ color: iconColor }}>
              <Search />
            </IconButton>
            <IconButton color="inherit" style={{ color: iconColor }}>
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </Container>
      ) : (
        <Toolbar>
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" style={imgStyle} />
          <Button
            style={buttonStyle}
            onClick={handleLangMenuClick}
            endIcon={<ArrowDropDownIcon />}
          >
            Language
          </Button>
          <Menu
            anchorEl={anchorElLang}
            keepMounted
            open={Boolean(anchorElLang)}
            onClose={handleLangMenuClose}
          >
            <MenuItem color="black" onClick={handleLangMenuClose}>English</MenuItem>
            <MenuItem color="black" onClick={handleLangMenuClose}>Spanish</MenuItem>
            <MenuItem color="black" onClick={handleLangMenuClose}>French</MenuItem>
          </Menu>

          <div style={{ flexGrow: 1 }}></div>

          <Button
            style={buttonStyle}
            onClick={handleJumpMenuClick}
            endIcon={<ArrowDropDownIcon />}
          >
            Jump to
          </Button>
          <Menu
            anchorEl={anchorElJump}
            keepMounted
            open={Boolean(anchorElJump)}
            onClose={handleJumpMenuClose}
          >
            <MenuItem onClick={handleJumpMenuClose}>
              <a href="https://docs.madrasthemes.com/front/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Help
              </a>
            </MenuItem>
            <MenuItem onClick={handleJumpMenuClose}>
              <a href="https://front.madrasthemes.com/main/contacts-agency/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Contact
              </a>
            </MenuItem>
          </Menu>

          <IconButton color="inherit" style={{ color: iconColor }}>
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" style={{ color: iconColor }}>
            <Search />
          </IconButton>
          <IconButton color="inherit" style={{ color: iconColor }}>
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default MobilePanel;

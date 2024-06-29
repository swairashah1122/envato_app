import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SecondPanel = () => {
  const [anchorElDropdown, setAnchorElDropdown] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleDropdownClick = (event) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorElDropdown(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const buttonStyle = {
    color: 'gray',
    '&:hover': {
      color: 'black',
    },
  };

  const panelStyle = {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
  };

  const drawerItems = (
    <List>
      {['Home', 'Pages', 'Blogs', 'Shop', 'Demos', 'Docs'].map((text, index) => (
        <ListItem button key={text} onClick={handleDropdownClose}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" style={panelStyle}>
      <Container>
        <Toolbar style={{ justifyContent: 'space-between'}}>
          <Typography variant="h6" style={{ fontWeight:'bold',marginRight: 'auto', fontSize: isMobile ? '24px' : '40px', color: '#377DFF' }}>
            Front
          </Typography>

          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Grid container spacing={2} alignItems="center" justify="flex-end">
              {['Home', 'Pages', 'Blogs', 'Shop', 'Demos', 'Docs'].map((item, index) => (
                <Grid item key={index}>
                  <IconButton
                    style={{ ...buttonStyle, fontSize: '17px' }}
                    color="inherit"
                    onClick={handleDropdownClick}
                  >
                    {item}
                    <ArrowDropDownIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElDropdown}
                    keepMounted
                    open={Boolean(anchorElDropdown)}
                    onClose={handleDropdownClose}
                  >
                    <MenuItem onClick={handleDropdownClose}>Option 1</MenuItem>
                    <MenuItem onClick={handleDropdownClose}>Option 2</MenuItem>
                  </Menu>
                </Grid>
              ))}
            </Grid>
          )}

          <Drawer  open={mobileMenuOpen} onClose={handleMobileMenuToggle}>
            <div
            style={{width:'200px'}}
              role="presentation"
              onClick={handleMobileMenuToggle}
              onKeyDown={handleMobileMenuToggle}
            >
              {drawerItems}
            </div>
          </Drawer>

          {!isMobile && (
            <Button color="inherit" variant="contained" style={{ backgroundColor: '#377DFF', color: 'white', padding: '10px', fontWeight: 'bold', minWidth: '120px' }}>
              Buy Now
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SecondPanel;
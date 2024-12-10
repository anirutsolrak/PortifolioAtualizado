import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { colors, shadows } from '../../theme/colors';
import logobanner from '../../assets/logobanner.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setShowMenu(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setShowMenu(false);
  };

  const links = [
    { label: 'HOME', path: '/perfil' },
    { label: 'ARTIGOS', path: '/perfil/articles' },
    { label: 'SOBRE', path: '/perfil/about' },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            alignItems: 'center',
            padding: '1rem 2rem',
            minHeight: '80px',
            backgroundColor: colors.background,
            justifyContent: { xs: 'space-between', md: 'space-between' },
            minWidth: '98vw',
            zIndex: 20,
          }}
        >
          <img
            src={logobanner}
            alt="Logo"
            style={{ height: '50px', objectFit: 'contain' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="h4"
              sx={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: '1.8rem',
                letterSpacing: '0.5px',
              }}
            >
              DESENVOLVEDOR FRONT-END
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-expanded={anchorElNav ? 'true' : undefined}
              size="large"
              sx={{ color: colors.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={showMenu}
              onClose={handleCloseNavMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: colors.white,
                  color: colors.text,
                  borderRadius: '15px',
                  boxShadow: shadows.card,
                  maxWidth: '200px',
                },
                '& .MuiMenuItem-root': {
                  '&:hover': {
                    backgroundColor: colors.hover,
                  },
                },
              }}
            >
              {links.map((link) => (
                <MenuItem
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    handleCloseNavMenu();
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {links.map((link) => (
              <Button
                key={link.path}
                onClick={() => navigate(link.path)}
                sx={{
                  color:
                    location.pathname === link.path
                      ? colors.secondary
                      : colors.primary,
                  fontWeight: 500,
                  fontSize: '1rem',
                  letterSpacing: '1px',
                  padding: '0.5rem 1rem',
                  '&:hover': {
                    backgroundColor: colors.hover,
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navbar;

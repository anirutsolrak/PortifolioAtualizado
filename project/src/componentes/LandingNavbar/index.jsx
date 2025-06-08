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
import { useNavigate } from 'react-router-dom';
import { colors, shadows } from '../../theme/colors';
import logobanner from '../../assets/logobanner.png';

const LandingNavbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    handleCloseNavMenu();
  };

  const links = [
    { label: 'INÍCIO', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'SERVIÇOS', action: () => scrollToSection('services') },
    { label: 'PROCESSO', action: () => scrollToSection('processo') },
    { label: 'CONTATO', action: () => scrollToSection('contato') },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: colors.background,
        boxShadow: shadows.card,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          alignItems: 'center',
          padding: '1rem 2rem',
          minHeight: '80px',
          justifyContent: { xs: 'space-between', md: 'space-between' },
          width: '100%',
        }}
      >
        <Box 
          sx={{ cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logobanner}
            alt="Logo"
            style={{ height: '50px', objectFit: 'contain' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: colors.primary,
              fontWeight: 700,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              letterSpacing: '0.5px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Especialista em React e IA
          </Typography>
        </Box>

        {/* Menu Mobile */}
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
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: colors.white,
                color: colors.text,
                borderRadius: '15px',
                boxShadow: shadows.card,
              },
              '& .MuiMenuItem-root': {
                '&:hover': {
                  backgroundColor: colors.hover,
                  color: colors.accent,
                },
              },
            }}
          >
            {links.map((link) => (
              <MenuItem
                key={link.label}
                onClick={link.action}
                sx={{
                  color: colors.text,
                  '&:hover': {
                    color: colors.accent,
                  }
                }}
              >
                {link.label}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => {
                navigate('/perfil');
                handleCloseNavMenu();
              }}
              sx={{
                color: colors.text,
                '&:hover': {
                  color: colors.accent,
                }
              }}
            >
              PORTFÓLIO COMPLETO
            </MenuItem>
          </Menu>
        </Box>

        {/* Menu Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {links.map((link) => (
            <Button
              key={link.label}
              onClick={link.action}
              sx={{
                color: colors.primary,
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '1px',
                padding: '0.5rem 1rem',
                '&:hover': {
                  backgroundColor: colors.hover,
                  color: colors.accent,
                },
              }}
            >
              {link.label}
            </Button>
          ))}
          
          <Button
            onClick={() => navigate('/perfil')}
            variant="outlined"
            sx={{
              borderColor: colors.secondary,
              color: colors.secondary,
              fontWeight: 500,
              fontSize: '1rem',
              letterSpacing: '1px',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              '&:hover': {
                borderColor: colors.accent,
                color: colors.accent,
                backgroundColor: colors.hover,
              },
            }}
          >
            PORTFÓLIO COMPLETO
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LandingNavbar;
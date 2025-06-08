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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { colors, shadows } from '../../theme/colors';
import logobanner from '../../assets/logobanner.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElProjects, setAnchorElProjects] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProjectsMenu = (event) => {
    setAnchorElProjects(event.currentTarget);
  };

  const handleCloseProjectsMenu = () => {
    setAnchorElProjects(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleCloseProjectsMenu();
    handleCloseNavMenu();
  };

  const links = [
    { label: 'HOME', path: '/perfil' },
    { label: 'ARTIGOS', path: '/perfil/articles' },
    { label: 'SOBRE', path: '/perfil/about' },
  ];

  const projectItems = [
    { label: 'Dashboards', path: '/perfil/projetos/dashboards' },
    { label: 'Ferramentas Corporativas', path: '/perfil/projetos/ferramentas-corporativas' },
    { label: 'Projetos com IA', path: '/perfil/projetos/projetos-com-ia' },
    { label: 'Aplicações Web', path: '/perfil/projetos/aplicacoes-web' },
  ];

  return (
    <Box>
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
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                letterSpacing: '0.5px',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Epecialista em React e IA.
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
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    color: location.pathname === link.path ? colors.accent : colors.text,
                    '&:hover': {
                      color: colors.accent,
                    }
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
              <MenuItem
                onClick={handleOpenProjectsMenu}
                sx={{
                  color: colors.text,
                  '&:hover': {
                    color: colors.accent,
                  }
                }}
              >
                Projetos
                <KeyboardArrowDownIcon />
              </MenuItem>
            </Menu>
          </Box>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {links.map((link) => (
              <Button
                key={link.path}
                onClick={() => navigate(link.path)}
                sx={{
                  color: location.pathname === link.path ? colors.accent : colors.primary,
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

            {/* Botão de Projetos */}
            <Button
              variant="text"
              aria-haspopup="true"
              aria-controls="project-menu"
              onClick={handleOpenProjectsMenu}
              endIcon={<KeyboardArrowDownIcon />}
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
              Projetos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menu de Projetos (compartilhado para mobile e desktop) */}
      <Menu
        id="project-menu"
        anchorEl={anchorElProjects}
        open={Boolean(anchorElProjects)}
        onClose={handleCloseProjectsMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
        {projectItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => handleMenuItemClick(item.path)}
            sx={{
              color: colors.text,
              '&:hover': {
                color: colors.accent,
              }
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <Toolbar />
      <Box sx={{ pt: { xs: 2, sm: 3 } }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navbar;
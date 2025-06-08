import React, { useState } from 'react';
import { Box, Typography, Button, styled, createTheme, ThemeProvider, Menu, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors, shadows } from '../../theme/colors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const theme = createTheme();

const ProjectBar = styled(Box)(({ expanded }) => ({
  position: 'fixed',
  bottom: 0,
  right: 0,
  backgroundColor: colors.primary,
  color: colors.white,
  width: expanded ? '200px' : '50px',
  height: 'calc(100vh - 80px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  transition: 'width 0.3s ease-in-out, transform 0.3s ease-in-out',
  zIndex: 40,
  cursor: 'pointer',
  transform: expanded ? 'translateX(0)' : 'translateX(50px)',
  '& .label': {
    writingMode: expanded ? 'horizontal-tb' : 'vertical-rl',
    transform: expanded ? 'rotate(0deg)' : 'rotate(90deg)',
    transition: 'transform 0.3s ease-in-out',
    display: 'block',
    fontSize: expanded ? '1rem' : '1.2rem',
  },
}));

const BotaoProjetos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { label: 'Dashboards', path: '/perfil/projetos/dashboards' },
    { label: 'Ferramentas Corporativas', path: '/perfil/projetos/ferramentas-corporativas' },
    { label: 'Projetos com IA', path: '/perfil/projetos/projetos-com-ia' },
    { label: 'Aplicações Web', path: '/perfil/projetos/aplicacoes-web' },
  ];

  const showButton = location.pathname.startsWith('/perfil') && !location.pathname.includes('/projetos');

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setExpanded(false);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {showButton && (
        <>
          <ProjectBar expanded={expanded} onClick={handleExpand} sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <Typography className="label" variant="h6" sx={{ fontWeight: 'bold', margin: '0.5rem', color: colors.white }}>
              Projetos
            </Typography>
            {expanded && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.path} 
                    onClick={() => handleMenuItemClick(item.path)} 
                    fullWidth 
                    sx={{ 
                      backgroundColor: colors.secondary,
                      color: colors.white,
                      fontWeight: '700',
                      fontSize: '0.8rem',
                      textTransform: 'none',
                      padding: '0.6rem',
                      margin: '0.2rem',
                      '&:hover': {
                        backgroundColor: colors.accent,
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </ProjectBar>

          <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'fixed', bottom: 16, right: 16, zIndex: 50 }}>
            <Button
              variant="contained"
              aria-haspopup="true"
              aria-controls="project-menu"
              aria-label="Ver Projetos"
              onClick={handleClick}
              startIcon={<KeyboardArrowUpIcon />}
              sx={{
                backgroundColor: colors.secondary,
                color: colors.white,
                fontWeight: '700',
                fontSize: '1rem',
                borderRadius: '30px',
                border: `4px solid ${colors.white}`,
                px: 2,
                py: 1.5,
                '&:hover': {
                  backgroundColor: colors.accent,
                }
              }}
            >
              Ver Projetos
            </Button>
            <Menu
              id="project-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
              {menuItems.map((item) => (
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
          </Box>
        </>
      )}
    </ThemeProvider>
  );
};

export default BotaoProjetos;
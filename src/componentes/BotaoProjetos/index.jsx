import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  styled,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors } from '../../theme/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const ProjectBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  position: 'fixed',
  bottom: 0,
  right: isExpanded ? '0px' : '50px',
  backgroundColor: 'rgba(21, 53, 71, 0.8)',
  color: 'black',
  width: isExpanded ? '170px' : '30px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 10,
  alignItems: 'center',
  transition: 'width 0.3s ease-in-out, transform 0.3s ease-in-out',
  cursor: 'pointer',
  transform: isExpanded ? 'translateX(0)' : 'translateX(50px)',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  '& .label': {
    writingMode: isExpanded ? 'horizontal-tb' : 'vertical-rl',
    transform: isExpanded
      ? 'rotate(0deg)'
      : 'rotate(180deg) translateX(0%) translateY(0%)',
    transition: 'transform 0.3s ease-in-out, writing-mode 0.3s ease-in-out',
    display: 'block',
    fontSize: isExpanded ? '1rem' : '1.2rem',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    margin: '0.5rem',
    color: isExpanded ? colors.white : 'black',
  },
}));

const BotaoProjetos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { label: 'Websites', path: '/perfil/projetos/websites' },
    { label: 'Aplicações', path: '/perfil/projetos/aplicacoes' },
    { label: 'Projetos com IA', path: '/perfil/projetos/projetos-com-ia' },
  ];

  const showButton =
    location.pathname.startsWith('/perfil') &&
    !location.pathname.includes('/projetos');

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setExpanded(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {showButton && (
        <ProjectBar isExpanded={expanded} onClick={handleExpand}>
          <Typography
            className="label"
            variant="h6"
            sx={{ fontWeight: 'bold' }}
          >
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
                    color: 'black',
                    fontWeight: '700',
                    fontSize: '1rem',
                    textTransform: 'none',
                    padding: '0.8rem',
                    margin: '0.2rem',
                    '&:hover': {
                      backgroundColor: colors.primary,
                      color: colors.white,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </ProjectBar>
      )}
    </ThemeProvider>
  );
};

export default BotaoProjetos;

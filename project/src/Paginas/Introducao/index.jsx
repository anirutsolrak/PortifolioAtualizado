import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const colors = {
  background: '#E8EEF1',
  primary: '#153547',
  secondary: '#4AB5B3',
  accent: '#424242', // Mudado para cinza escuro
  text: '#2A4158',
  white: '#FFFFFF',
  hover: 'rgba(66, 66, 66, 0.1)', // Mudado para cinza escuro com transparência
  gradient: {
    primary: 'linear-gradient(135deg, #E8EEF1 0%, #F5F7F9 100%)',
    secondary: 'linear-gradient(135deg, rgba(181, 234, 215, 1) 0%, rgba(74, 181, 179, 1) 50%, rgba(21, 53, 71, 1) 100%)',
  },
};

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Introducao = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = () => {
    navigate('/perfil');
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: colors.background,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Gradiente animado */}
      {show && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: '400% 400%',
            backgroundImage: colors.gradient.secondary,
            animation: `${gradientAnimation} 10s ease infinite`,
            zIndex: 0,
          }}
        />
      )}

      {/* Círculo decorativo */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `4px solid ${colors.secondary}`,
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* Conteúdo da página */}
      {show && (
        <Box sx={{ textAlign: 'center', zIndex: 2 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              mb: 2,
              color: colors.primary,
              fontWeight: 'bold',
              textShadow: `2px 2px 4px ${colors.text}`,
            }}
          >
            Carlos Eduardo Turina
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: colors.text,
              fontWeight: 'medium',
            }}
          >
            Desenvolvimento Web que Pensa
Resultados que Crescem
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        onClick={handleClick}
        size="large"
        sx={{
          mt: 4,
          backgroundColor: colors.secondary,
          color: colors.white,
          fontWeight: '700',
          borderRadius: '30px',
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: colors.accent,
            color: colors.white,
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(66, 66, 66, 0.3)',
          },
          zIndex: 2,
        }}
      >
        Explore meu Portfólio
      </Button>
    </Box>
  );
};

export default Introducao;
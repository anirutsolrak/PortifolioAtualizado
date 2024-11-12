import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box, Button, Fade, Collapse } from '@mui/material';

const duration = 1000;

const Introducao = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Collapse in on mount
    setShow(true);
  }, []);

  const handleButtonClick = () => {
    setExiting(true); // Trigger fade-out and navigation
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        zIndex: 10,
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#153547',
          zIndex: 0,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#646CFF',
          zIndex: 1,
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
        }}
      />
      <Collapse in={show} timeout={duration}>
        <Fade
          in={!exiting}
          timeout={duration}
          onExited={() => navigate('/perfil')}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Box>
              <Typography
                variant="h6"
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  backgroundColor: '#646CFF',
                  color: '#FFFFFF',
                  border: 'solid black 1px',
                  borderRadius: '45%',
                  padding: '5px 15px',
                  zIndex: 2,
                }}
              >
                Carlos Eduardo Turina
              </Typography>
              <Typography
                variant="h4"
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  color: '#A2A2A2',
                  zIndex: 2,
                }}
              >
                DESENVOLVEDOR DE SOLUÇÕES WEB
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Collapse>
      <Button
        onClick={handleButtonClick}
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '10%',
          zIndex: 2,
          border: 'solid white 3px',
          height: '4rem',
          borderTopRightRadius: '50.11%',
          borderBottomRightRadius: '50.11%',
          backgroundColor: '#646CFF',
          color: '#FFFFFF',
          transition: 'transform 0.5s ease',
        }}
      >
        Explore meu trabalho
      </Button>
    </Box>
  );
};

export default Introducao;

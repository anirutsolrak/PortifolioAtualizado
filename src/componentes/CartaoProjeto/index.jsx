import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CartaoProjeto = ({ project }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(`/perfil/project/${project.id}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
        },
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia sx={{ height: 100, overflow: 'hidden', position: 'relative' }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            transform: isHovered ? 'translateY(-40%)' : 'translateY(0)',
            transition: 'transform 0.8s ease-in-out',
          }}
        />
      </CardMedia>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" component="h3">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: '#646CFF',
                color: 'white',
              }}
            />
          ))}
        </Box>
        <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => navigate(`/perfil/project/${project.id}`)}
            sx={{
              backgroundColor: '#646CFF',
              '&:hover': {
                backgroundColor: '#4B50FF',
              },
            }}
          >
            Ver Detalhes
          </Button>
          <Button
            variant="outlined"
            href={project.liveUrl}
            target="_blank"
            sx={{
              borderColor: '#646CFF',
              color: '#646CFF',
              '&:hover': {
                borderColor: '#4B50FF',
                backgroundColor: 'rgba(100, 108, 255, 0.08)',
              },
            }}
          >
            Ver Live
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartaoProjeto;
import React from 'react';
import { projects } from '../data/projects';
import CartaoProjeto from '../componentes/CartaoProjeto';
import { Grid, Typography, Box, Container } from '@mui/material';

const FerramentasCorporativasProjetos = () => {
  const projetosFerramentas = projects.filter(project => project.category === 'Ferramentas Corporativas');

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ flexGrow: 1, py: 8 }}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
          Ferramentas Corporativas
        </Typography>
        <Grid container spacing={4}>
          {projetosFerramentas.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <CartaoProjeto project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FerramentasCorporativasProjetos;
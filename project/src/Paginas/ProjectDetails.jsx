import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Chip, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { projects } from '../data/projects';
import BotaoProjetos from '../componentes/BotaoProjetos';
import { colors } from '../theme/colors';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Typography>Projeto não encontrado</Typography>;
  }

  const menuItems = [
    { label: 'Websites', path: '/perfil/projetos/websites' },
    { label: 'Aplicações', path: '/perfil/projetos/aplicacoes' },
    { label: 'Projetos com IA', path: '/perfil/projetos/projetos-com-ia' },
  ];

  const renderContent = (content) => {
    // Check if content contains HTML tags
    if (content.includes('<ul>')) {
      // Parse the HTML string to create a proper list
      const listItems = content.match(/<li>(.*?)<\/li>/g)
        .map(item => item.replace(/<\/?li>/g, ''));
      
      return (
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          {listItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
          ))}
        </ul>
      );
    }
    return content;
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: colors.accent,
              '&:hover': {
                backgroundColor: colors.hover,
              }
            }}
          >
            Voltar
          </Button>
          <BotaoProjetos menuItems={menuItems}/>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" component="h1" gutterBottom>
              {project.title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {project.technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  sx={{
                    backgroundColor: colors.accent,
                    color: 'white',
                  }}
                />
              ))}
            </Box>
            {project.sections.map((section, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1" component="div">
                  {renderContent(section.content)}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 24 }}>
              <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  marginBottom: '24px',
                }}
              />
              <Button
                variant="contained"
                fullWidth
                href={project.liveUrl}
                target="_blank"
                sx={{
                  backgroundColor: colors.accent,
                  mb: 2,
                  '&:hover': {
                    backgroundColor: colors.primary,
                  }
                }}
              >
                Ver Projeto Live
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
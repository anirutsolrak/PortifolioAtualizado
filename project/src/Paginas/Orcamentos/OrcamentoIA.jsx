import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FormularioContato from '../../componentes/Formulario';

const OrcamentoIA = () => {
  const beneficios = [
    {
      title: 'Automação Inteligente',
      description: 'Automatize processos repetitivos e libere sua equipe para tarefas estratégicas',
      icon: <SmartToyIcon color="primary" />
    },
    {
      title: 'Análise Preditiva',
      description: 'Tome decisões baseadas em dados com previsões precisas e insights valiosos',
      icon: <AutoGraphIcon color="primary" />
    },
    {
      title: 'Personalização Avançada',
      description: 'Ofereça experiências únicas para cada usuário com IA adaptativa',
      icon: <PsychologyIcon color="primary" />
    }
  ];

  const handleFormSuccess = () => {
    console.log('Formulário enviado com sucesso!');
  };

  const handleFormError = (error) => {
    console.error('Erro ao enviar formulário:', error);
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Soluções com Inteligência Artificial
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#153547', mb: 3 }}>
                Transforme seu Negócio com IA
              </Typography>
              <Typography variant="body1" paragraph>
                A Inteligência Artificial não é mais o futuro - é o presente. Em um mercado cada vez 
                mais competitivo, integrar IA em seus produtos e serviços não é apenas uma vantagem, 
                é uma necessidade para se manter relevante.
              </Typography>
              <Typography variant="body1" paragraph>
                Oferecemos soluções personalizadas de IA que se integram perfeitamente ao seu negócio, 
                desde chatbots inteligentes até sistemas complexos de análise preditiva, sempre com foco 
                em resultados tangíveis e ROI mensurável.
              </Typography>
            </Paper>

            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#153547', mb: 3 }}>
                Vantagens da IA para seu Negócio
              </Typography>
              <List>
                {beneficios.map((beneficio, index) => (
                  <ListItem key={index} sx={{ mb: 2 }}>
                    <ListItemIcon>
                      {beneficio.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={beneficio.title}
                      secondary={beneficio.description}
                      primaryTypographyProps={{ fontWeight: 'bold', color: '#153547' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 4, borderRadius: 2, position: 'sticky', top: 24 }}>
              <Typography variant="h5" gutterBottom align="center" sx={{ color: '#153547', mb: 3 }}>
                Inicie sua Jornada com IA
              </Typography>
              <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
                Descubra como a IA pode revolucionar seu negócio. Preencha o formulário 
                e receba uma consultoria personalizada gratuita.
              </Typography>
              <FormularioContato
                onSuccess={handleFormSuccess}
                onError={handleFormError}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrcamentoIA;
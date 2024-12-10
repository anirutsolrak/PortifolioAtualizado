import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import FormularioContato from '../../componentes/Formulario';

const OrcamentoFrontend = () => {
  const beneficios = [
    {
      title: 'Interfaces Modernas e Responsivas',
      description: 'Design adaptável a qualquer dispositivo, garantindo a melhor experiência para seus usuários',
      icon: <DevicesIcon color="primary" />
    },
    {
      title: 'Performance Otimizada',
      description: 'Carregamento rápido e experiência fluida para manter seus visitantes engajados',
      icon: <SpeedIcon color="primary" />
    },
    {
      title: 'Código Limpo e Manutenível',
      description: 'Desenvolvimento profissional seguindo as melhores práticas do mercado',
      icon: <CodeIcon color="primary" />
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
          Desenvolvimento Front-end Profissional
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#153547', mb: 3 }}>
                Por que escolher nosso serviço de Front-end?
              </Typography>
              <Typography variant="body1" paragraph>
                Em um mundo cada vez mais digital, sua presença online precisa ser excepcional. 
                Oferecemos desenvolvimento front-end especializado que combina design moderno com 
                performance otimizada, garantindo que sua aplicação se destaque no mercado.
              </Typography>
              <Typography variant="body1" paragraph>
                Utilizamos as tecnologias mais recentes como React, Material-UI e técnicas avançadas 
                de otimização para criar interfaces que não só impressionam visualmente, mas também 
                proporcionam uma experiência excepcional aos usuários.
              </Typography>
            </Paper>

            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#153547', mb: 3 }}>
                Benefícios
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
                Solicite um Orçamento
              </Typography>
              <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
                Estamos prontos para transformar sua visão em realidade. 
                Preencha o formulário abaixo e receba uma proposta personalizada.
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

export default OrcamentoFrontend;
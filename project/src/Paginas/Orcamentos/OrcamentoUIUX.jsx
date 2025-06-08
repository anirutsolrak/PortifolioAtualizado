import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormularioContato from '../../componentes/Formulario';

const OrcamentoUIUX = () => {
  const beneficios = [
    {
      title: 'Design Centrado no Usuário',
      description: 'Interfaces intuitivas que proporcionam a melhor experiência para seus usuários',
      icon: <TouchAppIcon color="primary" />
    },
    {
      title: 'Identidade Visual Única',
      description: 'Design exclusivo que reflete a personalidade da sua marca',
      icon: <BrushIcon color="primary" />
    },
    {
      title: 'Aumento de Conversão',
      description: 'Design estratégico focado em resultados e conversão de usuários',
      icon: <TrendingUpIcon color="primary" />
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
          Design UI/UX Profissional
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#153547', mb: 3 }}>
                Design que Converte
              </Typography>
              <Typography variant="body1" paragraph>
                No mundo digital atual, um design excepcional não é apenas sobre aparência - 
                é sobre criar experiências memoráveis que convertem visitantes em clientes fiéis.
              </Typography>
              <Typography variant="body1" paragraph>
                Nossa abordagem combina princípios modernos de design com pesquisa de usuário 
                aprofundada para criar interfaces que não só impressionam visualmente, mas também 
                geram resultados tangíveis para seu negócio.
              </Typography>
            </Paper>

            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ color: '#153547', mb: 3 }}>
                Por que Investir em UI/UX?
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
                Transforme sua Interface
              </Typography>
              <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
                Pronto para criar uma experiência única para seus usuários? 
                Preencha o formulário e receba uma análise gratuita do seu projeto.
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

export default OrcamentoUIUX;
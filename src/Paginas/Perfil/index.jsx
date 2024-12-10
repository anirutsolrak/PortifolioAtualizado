import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid2,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { colors, shadows } from '../../theme/colors';
import ProcessoDeDesenvolvimento from '../../componentes/ProcessoDeDesenvolvimento';
import DesignProcessBanner from '../../componentes/ProcessoDeDesenvolvimento/DesignProcessBanner';
import BotaoProjetos from '../../componentes/BotaoProjetos';
import AnimatedText from '../../componentes/AnimatedText';
import FormularioContato from '../../componentes/Formulario';

// Criando o tema (pode ser movido para um arquivo separado)
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

const handleFormSuccess = () => {
  console.log('Formulário enviado com sucesso!');
};

const handleFormError = (error) => {
  console.error('Erro ao enviar formulário:', error);
};

const Perfil = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Desenvolvimento Front-end',
      description:
        'Criação de interfaces modernas e responsivas com React, focando em performance e experiência do usuário.',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'Material-UI'],
      path: '/perfil/orcamento/frontend',
    },
    {
      title: 'Integração com IA',
      description:
        'Desenvolvimento de soluções web inteligentes utilizando APIs de IA para criar experiências personalizadas.',
      skills: ['OpenAI API', 'NLP', 'Automação', 'Integração API'],
      path: '/perfil/orcamento/ia',
    },
    {
      title: 'UI/UX Design',
      description:
        'Design de interfaces intuitivas e atraentes, com foco na experiência do usuário e conversão.',
      skills: ['Figma', 'Prototipagem', 'Design System', 'Wireframing'],
      path: '/perfil/orcamento/uiux',
    },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minWidth: '98vw' }}>
      <DesignProcessBanner />
      <BotaoProjetos />

      <Box id="services" sx={{ py: 8, backgroundColor: colors.white }}>
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 4, color: colors.primary, fontWeight: 600 }}
          >
            Serviços
          </Typography>
        </Container>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Grid2
              container
              spacing={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { md: 'center' },
              }}
            >
              {services.map((service, index) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={index}>
                  <Card
                    sx={{
                      height: { xs: 'auto', md: '100%' },
                      borderRadius: '20px',
                      boxShadow: shadows.card,
                      maxWidth: { xs: '100%', md: '350px' },
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: shadows.button,
                      },
                    }}
                    onClick={() => handleServiceClick(service.path)}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: {
                          xs: 'column',
                          sm: 'column',
                          md: 'column',
                        },
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          color: colors.primary,
                          fontWeight: 600,
                          mb: 2,
                          textAlign: 'center',
                          width: '100%',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1,
                          flex: 1,
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          width: '100%',
                        }}
                      >
                        {service.skills.map((skill, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              bgcolor: colors.secondary,
                              color: colors.white,
                              px: 2,
                              py: 0.5,
                              borderRadius: '15px',
                              fontSize: '0.85rem',
                              margin: '0.2rem',
                            }}
                          >
                            {skill}
                          </Typography>
                        ))}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.text,
                          mt: 2,
                          textAlign: 'center',
                          width: '100%',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </ThemeProvider>
      </Box>

      <Box sx={{ py: 8, backgroundColor: colors.background }}>
        <ProcessoDeDesenvolvimento />
      </Box>

      <Box sx={{ py: 8, backgroundColor: colors.white }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              color: colors.primary,
              fontWeight: 600,
            }}
          >
            Solicite seu Orçamento
          </Typography>
          <Grid2 container spacing={4} justifyContent="center">
            <Grid2 size={{ xs: 12, md: 8 }}>
            <FormularioContato
          onSuccess={handleFormSuccess}
          onError={handleFormError}
        />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};

export default Perfil;

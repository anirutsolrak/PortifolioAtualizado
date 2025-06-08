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
  Chip,
  Button,
  Toolbar
} from '@mui/material';
import { colors, shadows } from '../../theme/colors';
import ProcessoDeDesenvolvimento from '../../componentes/ProcessoDeDesenvolvimento';
import DesignProcessBanner from '../../componentes/ProcessoDeDesenvolvimento/DesignProcessBanner';
import FormularioContato from '../../componentes/Formulario';
import CartaoProjeto from '../../componentes/CartaoProjeto';
import LandingNavbar from '../../componentes/LandingNavbar';
import { projects } from '../../data/projects';

// Ícones para competências
import PeopleIcon from '@mui/icons-material/People';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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

const LandingPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Desenvolvimento Front-end',
      description: 'Criação de interfaces modernas e responsivas com React, focando em performance e experiência do usuário.',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'Material-UI'],
      path: '/perfil/orcamento/frontend',
    },
    {
      title: 'Integração com IA',
      description: 'Desenvolvimento de soluções web inteligentes utilizando APIs de IA para criar experiências personalizadas.',
      skills: ['OpenAI API', 'NLP', 'Automação', 'Integração API'],
      path: '/perfil/orcamento/ia',
    },
    {
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e atraentes, com foco na experiência do usuário e conversão.',
      skills: ['Figma', 'Prototipagem', 'Design System', 'Wireframing'],
      path: '/perfil/orcamento/uiux',
    },
  ];

  const competencias = [
    { label: 'Trabalho em equipe', icon: <PeopleIcon /> },
    { label: 'React.js', icon: <CodeIcon /> },
    { label: 'Python', icon: <CodeIcon /> },
    { label: 'JavaScript', icon: <CodeIcon /> }
  ];

  // Selecionar 3 projetos em destaque
  const projetosDestaque = projects.slice(0, 3);

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minWidth: '98vw' }}>
      {/* NAVBAR ESPECÍFICA PARA LANDING PAGE */}
      <LandingNavbar />
      <Toolbar />

      {/* SEÇÃO HERO */}
      <DesignProcessBanner />

      {/* SEÇÃO DE BENEFÍCIOS/DIFERENCIAIS */}
      <Box sx={{ py: 8, backgroundColor: colors.white }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, color: colors.primary, fontWeight: 600 }}
          >
            Por que Escolher Nossos Serviços?
          </Typography>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <StarIcon sx={{ fontSize: 60, color: colors.secondary, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, color: colors.primary, fontWeight: 600 }}>
                  Qualidade Premium
                </Typography>
                <Typography variant="body1" sx={{ color: colors.text }}>
                  Desenvolvimento profissional seguindo as melhores práticas do mercado, garantindo código limpo e manutenível.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <TrendingUpIcon sx={{ fontSize: 60, color: colors.secondary, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, color: colors.primary, fontWeight: 600 }}>
                  Resultados Comprovados
                </Typography>
                <Typography variant="body1" sx={{ color: colors.text }}>
                  Mais de 10 projetos desenvolvidos, com 5 em uso ativo, gerando resultados reais para empresas.
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <CodeIcon sx={{ fontSize: 60, color: colors.secondary, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, color: colors.primary, fontWeight: 600 }}>
                  Tecnologias Modernas
                </Typography>
                <Typography variant="body1" sx={{ color: colors.text }}>
                  Utilizamos as tecnologias mais atuais como React, IA e automação para criar soluções inovadoras.
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* SEÇÃO DE COMPETÊNCIAS */}
      <Box id="competencias" sx={{ py: 6, backgroundColor: colors.background }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" sx={{ mb: 4, color: colors.primary, fontWeight: 600 }}>
            Principais Competências
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {competencias.map((competencia) => (
              <Chip 
                key={competencia.label}
                icon={competencia.icon}
                label={competencia.label}
                sx={{ fontSize: '1rem', p: 2, bgcolor: colors.white, color: colors.primary, fontWeight: 500 }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* SEÇÃO DE SERVIÇOS */}
      <Box id="services" sx={{ py: 8, backgroundColor: colors.white }}>
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 2, color: colors.primary, fontWeight: 600 }}
          >
            Nossos Serviços
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 6, color: colors.text, fontWeight: 400 }}
          >
            Soluções completas para transformar sua presença digital
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
                        flexDirection: 'column',
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
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          width: '100%',
                          mb: 2
                        }}
                      >
                        {service.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: colors.secondary,
                              color: colors.white,
                              fontSize: '0.8rem'
                            }}
                          />
                        ))}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.text,
                          textAlign: 'center',
                          width: '100%',
                          mb: 2
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: colors.secondary,
                          color: colors.white,
                          fontWeight: 600,
                          borderRadius: '25px',
                          px: 3,
                          py: 1,
                          '&:hover': {
                            backgroundColor: colors.accent,
                          },
                        }}
                      >
                        Solicitar Orçamento
                      </Button>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </ThemeProvider>
      </Box>

      {/* SEÇÃO DE PROJETOS EM DESTAQUE */}
      <Box sx={{ py: 8, backgroundColor: colors.background }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 2, color: colors.primary, fontWeight: 600 }}
          >
            Projetos em Destaque
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 6, color: colors.text, fontWeight: 400 }}
          >
            Conheça alguns dos nossos trabalhos mais recentes
          </Typography>
          <Grid2 container spacing={4}>
            {projetosDestaque.map((project) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                <CartaoProjeto project={project} />
              </Grid2>
            ))}
          </Grid2>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/perfil')}
              sx={{
                borderColor: colors.secondary,
                color: colors.secondary,
                fontWeight: 600,
                borderRadius: '25px',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: colors.accent,
                  color: colors.accent,
                  backgroundColor: colors.hover,
                },
              }}
            >
              Ver Todos os Projetos
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SEÇÃO DO PROCESSO */}
      <Box id="processo" sx={{ py: 8, backgroundColor: colors.white }}>
        <ProcessoDeDesenvolvimento />
      </Box>

      {/* SEÇÃO DE CHAMADA PARA AÇÃO FINAL - CONTRASTE MELHORADO */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: colors.primary,
        backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1,
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3, 
                fontWeight: 700,
                color: colors.white,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Pronto para Transformar sua Ideia em Realidade?
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                color: colors.secondary,
                fontWeight: 600,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Entre em contato agora e receba um orçamento personalizado para seu projeto
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={scrollToContact}
              sx={{
                backgroundColor: colors.secondary,
                color: colors.white,
                fontWeight: 700,
                borderRadius: '30px',
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                border: `3px solid ${colors.white}`,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  backgroundColor: colors.white,
                  color: colors.primary,
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              Solicitar Orçamento Gratuito
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SEÇÃO DE CONTATO */}
      <Box id="contato" sx={{ py: 8, backgroundColor: colors.background }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 2,
              color: colors.primary,
              fontWeight: 600,
            }}
          >
            Fale Conosco
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: colors.text,
              fontWeight: 400,
            }}
          >
            Estamos prontos para dar vida ao seu projeto
          </Typography>
          <Grid2 container spacing={4} justifyContent="center">
            <Grid2 size={{ xs: 12, md: 8 }}>
              <FormularioContato />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
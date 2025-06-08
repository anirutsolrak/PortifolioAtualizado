import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../../theme/colors';
import AnimatedText from '../AnimatedText';

const HeroContainer = styled(Box)({
  backgroundColor: colors.background,
  position: 'relative',
  minHeight: '85vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: colors.gradient.primary,
});

const DesignProcessBanner = () => {
  return (
    <HeroContainer>
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: 8, width: '100%' }}>
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, sm: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              lineHeight: 1.2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              fontWeight: 700,
              width: '100%',
            }}
          >
            Desenvolvimento Web que Pensa
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              lineHeight: 1.6,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 600,
              width: '100%',
            }}
          >
            Resultados que Crescem
          </Typography>
          <Box sx={{ mb: 4, width: '100%', maxWidth: '900px' }}>
            <AnimatedText text="Especialista em React e IA. criando soluções que automatizam processos, engajam usuários e impulsionam seu negócio." />
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: colors.secondary,
              color: 'black',
              fontWeight: '700',
              borderRadius: '30px',
              zIndex: 30,
              border: `4px solid ${colors.white}`,
              px: { xs: 3, sm: 4, md: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: colors.accent,
                borderColor: colors.secondary,
                color: colors.white,
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(66, 66, 66, 0.3)',
              },
            }}
            onClick={() => {
              const element = document.getElementById('contato');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contato
          </Button>
        </Box>
      </Container>
    </HeroContainer>
  );
};

export default DesignProcessBanner;
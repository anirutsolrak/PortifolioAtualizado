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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              lineHeight: 1.2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
            }}
          >
            Desenvolvimento Web que Pensa
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              lineHeight: 1.6,
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 600,
            }}
          >
            Resultados que Crescem
          </Typography>
          <Box sx={{ mb: 4, maxWidth: '600px' }}>
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
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
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
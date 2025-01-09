import React from 'react';
import { Box, Container, Grid2, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../../theme/colors';
import Photo from '../../assets/Photo.svg';
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
        <Grid2 container spacing={6} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Especialista em criar soluções web inovadoras
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                com React e IA, que impulsionam o crescimento do seu negócio
              </Typography>

              <Box>
                <AnimatedText text="C riando experiências digitais que transformam negócios" />
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
                  '&:hover': {
                    backgroundColor: colors.primary,
                    borderColor: colors.secondary,
                    color: colors.white,
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
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' }, // Oculta a imagem em mobile
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-10%',
                  right: '-10%',
                  width: '120%',
                  height: '120%',
                  background: colors.gradient.secondary,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  zIndex: -1,
                },
              }}
            >
              <img
                src={Photo}
                alt="Developer"
                style={{
                  width: '80%',
                  maxWidth: '500px',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </HeroContainer>
  );
};

export default DesignProcessBanner;

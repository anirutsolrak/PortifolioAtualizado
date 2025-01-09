import React, { useState } from 'react';
import { Box, Typography, Grid2 } from '@mui/material';
import ProcessCircle from './ProcessCircle';
import { useInView } from 'react-intersection-observer';
import { colors, shadows } from '../../theme/colors';

const steps = [
  {
    name: 'Levantamento de Requisitos',
    description:
      'Entender as necessidades e objetivos do cliente através de entrevistas, análise de mercado e documentação.',
  },
  {
    name: 'Prototipagem',
    description:
      'Criar protótipos de alta fidelidade para visualizar e testar a solução com o cliente.',
  },
  {
    name: 'Desenvolvimento Front/Back-End',
    description:
      'Desenvolver a interface do usuário com React e a lógica back-end, se necessário.',
  },
  {
    name: 'Testes',
    description:
      'Realizar testes de usabilidade para garantir a qualidade da solução.',
  },
  {
    name: 'Implementação',
    description: 'Implementar a solução em ambiente de produção.',
  },
  {
    name: 'Manutenção',
    description:
      'Fornecer suporte contínuo, coletar feedback e realizar melhorias.',
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
  });

  const handleStepClick = (index) => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === index ? null : index
    );
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.background,
        gap: '2rem',
        overflow: 'hidden',
        opacity: sectionInView ? 1 : 0,
        transition: 'opacity 0.6s ease-out',
      }}
      
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          transform: `translateY(${sectionInView ? '0' : '-20px'})`,
          transition: 'all 0.6s ease-out',
          marginBottom: '3rem',
          color: colors.primary, // Cor primária para o título
          fontWeight: 'bold',
        }}
      >
        Processo de Desenvolvimento
      </Typography>

      <Grid2
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',          
        }}
      >
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Grid2 sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    color:
                      activeStep === index ? colors.secondary : colors.primary, // Cor primária se ativo, senão cor de texto
                    fontWeight: activeStep === index ? 'bold' : 'normal',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    '&::before': {
                      content: '""',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor:
                        activeStep === index
                          ? colors.secondary
                          : colors.primary, // Cor primária se ativo, senão cor de texto
                    },
                  }}
                  onClick={() => handleStepClick(index)}
                >
              <Typography
  variant="h5" // Tamanho padrão para mobile
  sx={{
    fontSize: {
      md: '2rem', 
      xs: '1.25rem',
    },
    fontWeight: 'bold',
  }}
>
  {step.name}
</Typography>
                </Box>

                {activeStep === index && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '100%',
                      left: 0,
                      padding: '1rem',
                      backgroundColor: colors.white,
                      borderRadius: '15px',
                      boxShadow: shadows.card,
                      maxWidth: '100%',
                      wordWrap: 'break-word',
                      opacity: sectionInView ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      color: colors.text, // Cor do texto para a descrição
                    }}
                  >
                    <Typography variant="body2">{step.description}</Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Grid2>
        </Grid2>

        {/*<Grid2 size={{ xs: 12, md: 6 }}>
          <ProcessCircle
            steps={steps}
            style={{ opacity: sectionInView ? 1 : 0 }}
          />
        </Grid2> */}
      </Grid2>
    </Box>
  );
};

export default DesignProcess;

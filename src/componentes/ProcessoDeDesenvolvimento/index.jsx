import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, styled } from '@mui/material';
import ProcessCircle from './ProcessCircle';

const ProcessSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#333333',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Layout em coluna em telas pequenas
    alignItems: 'center',
    padding: theme.spacing(2), // Padding menor
    gap: theme.spacing(2), // Gap menor
  },
}));

const ProcessContent = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '6rem',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Layout em coluna em telas pequenas
    gap: theme.spacing(1),
    '& > div': {
      // Aplica a todos os filhos diretos de ProcessContent
      flex: '1 0 auto', // Permite que os elementos ocupem toda a largura
      width: '100%', // Garante que ocupem toda a largura
    },
  },
}));

const ProcessDescription = styled(Box)(({ theme }) => ({
  flex: '0 0 30%',
  padding: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 20,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1), // Padding menor
    marginBottom: theme.spacing(2),
  },
}));

const CircleWrapper = styled(Box)({
  flex: '0 0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const steps = [
  {
    name: 'Levantamento de Requisitos',
    angle: -95,
    description:
      'Entender as necessidades e objetivos do cliente através de entrevistas, análise de mercado e documentação.',
  },
  {
    name: 'Prototipagem',
    angle: 210,
    description:
      'Criar protótipos de alta fidelidade para visualizar e testar a solução com o cliente.',
  },
  {
    name: 'Desenvolvimento Front/Back-End',
    angle: 155,
    description:
      'Desenvolver a interface do usuário com React e a lógica back-end, se necessário.',
  },
  {
    name: 'Testes',
    angle: 85,
    description:
      'Realizar testes de usabilidade para garantir a qualidade da solução.',
  },
  {
    name: 'Implementação',
    angle: 25,
    description: 'Implementar a solução em ambiente de produção.',
  },
  {
    name: 'Manutenção',
    angle: 330,
    description:
      'Fornecer suporte contínuo, coletar feedback e realizar melhorias.',
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setActiveStep(null);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <ProcessSection ref={sectionRef}>
      <Typography
        variant="h3"
        component="h2"
        color="#fff"
        gutterBottom
        sx={{
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${isVisible ? '0' : '-20px'})`,
          transition: 'all 0.6s ease-out',
        }}
      >
        Fluxo de Desenvolvimento
      </Typography>

      <ProcessContent>
        <ProcessDescription
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: `translateX(${isVisible ? '0' : '-20px'})`,
            transition: 'all 0.6s ease-out',
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom>
            Processo de Desenvolvimento
          </Typography>
          <Typography variant="body1">
            Este é o processo que sigo para garantir a criação de soluções web
            eficazes e centradas no usuário, desde o levantamento inicial de
            requisitos até a manutenção contínua.
          </Typography>
        </ProcessDescription>

        <CircleWrapper
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: `translateX(${isVisible ? '0' : '20px'})`,
            transition: 'all 0.6s ease-out',
          }}
        >
          <ProcessCircle
            steps={steps}
            activeStep={activeStep}
            onStepClick={handleStepClick}
          />
        </CircleWrapper>
      </ProcessContent>
    </ProcessSection>
  );
};

export default DesignProcess;

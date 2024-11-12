import React, { useState, useEffect, useRef } from 'react';
import { Box, styled } from '@mui/material';
import ProcessStep from './ProcessStep';

const CircleContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 'clamp(250px, 40vw, 600px)', // clamp() para width responsivo
  height: 'clamp(250px, 40vw, 600px)', // clamp() para height responsivo
  borderRadius: '50%',
  backgroundImage:
    'linear-gradient(to right, rgba(64, 64, 64, 1), rgba(64, 64, 64, 0.3))',
  border: '20px solid dimgray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto', // Centraliza o círculo
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    borderRadius: '50%',
    border: `15px solid rgba(128, 128, 128, 0.1)`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
    width: '35%',
    height: '35%',
    border: '4px solid rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
  // Media Queries para layout responsivo
  [theme.breakpoints.down('md')]: {
    // 'md' e abaixo
    width: 'calc(80vw - 80px)', // Ocupa a largura da tela com margem
    height: 'calc(80vw - 100px)',
  },
}));

const ArrowTip = styled('span')({
  position: 'absolute',
  top: '35%',
  left: '35%',
  transform: 'translateY(-55%) rotate(90deg)',
  width: '10%',
  height: '10%',
  border: '4px solid rgba(0, 0, 0, 0.3)',
  borderRadius: '0 25 50% 0',
  borderLeftColor: 'transparent',
  borderTopColor: 'transparent',
  content: '""',
});

const ProcessCircle = ({ steps, activeStep, onStepClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && activeStep !== null) {
          onStepClick(null);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeStep, onStepClick]);

  const calculateStepPosition = (angle) => {
    const radius = 50.5; // Increased radius to move steps outward
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return {
      top: `${45 + y}%`,
      left: `${32 + x}%`,
      transform: 'translate(-35%, -35%)', // Adjusted transform to center the steps
    };
  };

  return (
    <Box ref={sectionRef}>
      <CircleContainer>
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            step={step}
            index={index}
            isActive={activeStep === index}
            onClick={onStepClick}
            position={calculateStepPosition(step.angle)}
            isVisible={isVisible}
          />
        ))}
        <ArrowTip />
      </CircleContainer>
    </Box>
  );
};

export default ProcessCircle;

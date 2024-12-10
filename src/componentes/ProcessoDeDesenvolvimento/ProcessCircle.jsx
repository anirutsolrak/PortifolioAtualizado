import React from 'react';
import { Box } from '@mui/material';
import ProcessStep from './ProcessStep';

const ProcessCircle = ({ steps }) => {
  const calculateStepPosition = (index) => {
    const angleIncrement = 360 / steps.length;
    const angle = index * angleIncrement + 90;
    const radians = (angle * Math.PI) / 180;
    const radius = 50;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return {
      top: `${50 - y}%`,
      left: `${50 + x}%`,
      transform: 'translate(-50%, -50%)',
    };
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '35vw',
        height: '35vw',
        maxWidth: '500px',
        maxHeight: '500px',
        minWidth: '300px',
        minHeight: '300px',
        borderRadius: '50%',
        border: `8px solid rgba(200, 200, 200, 0.8)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 2rem',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 'calc(100% - 20px)',
          height: 'calc(100% - 20px)',
          borderRadius: '50%',
          border: `8px solid rgba(220,220,220, 0.4)`,
        },
      }}
    >
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          step={step}
          position={calculateStepPosition(index)}
        />
      ))}
    </Box>
  );
};

export default ProcessCircle;

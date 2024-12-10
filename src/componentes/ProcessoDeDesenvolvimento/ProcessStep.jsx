import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors, shadows } from '../../theme/colors';

export const ProcessStep = ({ step, isActive, position }) => (
  <React.Fragment>
    <Box
      sx={{
        ...position,
        position: 'absolute',
        backgroundColor: colors.primary,
        color: colors.white,
        padding: '0.5rem 1rem',
        borderRadius: '15px',
        width: '7rem',
        textAlign: 'center',
        boxShadow: shadows.button,
        wordWrap: 'break-word',
        transition: 'all 0.3s ease',
        zIndex: 20,
        transform: 'translate(-50%, -50%)',
        fontSize: '0.63rem',

        '&:hover': {
          backgroundColor: colors.secondary,
          boxShadow: shadows.subtle,
          transform: 'translate(-50%, -50%) scale(1.1)',
        },
      }}
    >
      {step.name}
    </Box>
    {isActive && (
      <Box
        sx={{
          top: '120%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          padding: '0.5rem 1rem',
          backgroundColor: colors.white,
          borderRadius: '15px',
          boxShadow: shadows.card,
          zIndex: 30,
          maxWidth: '70vw',
          wordWrap: 'break-word',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          fontSize: '0.8rem',
          color: colors.text,
        }}
      >
        <Typography variant="body2">{step.description}</Typography>
      </Box>
    )}
  </React.Fragment>
);

export default ProcessStep;

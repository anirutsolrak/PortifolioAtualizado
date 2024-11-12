import React from 'react';
import { Box, Typography, styled, keyframes } from '@mui/material';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(79, 189, 210, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(79, 189, 210, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(79, 189, 210, 0);
  }
`;

const StepButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  position: 'absolute',
  background: isActive ? '#2E8B57' : '#4FBDD2',
  color: 'white',
  padding: theme.spacing(1, 2), // Unidades relativas com theme.spacing
  borderRadius: '20px',
  minWidth: '120px',
  textAlign: 'center',
  boxShadow: theme.shadows[2],
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  transform: isActive ? 'scale(1.1)' : 'scale(1)',
  transition: 'all 0.3s ease',
  zIndex: 20,
  animation: `${pulse} 2s infinite`,
  '&:hover': {
    background: theme.palette.primary.dark,
    boxShadow: theme.shadows[4],
    animationPlayState: 'paused',
  },
  ...(isActive && {
    transform: 'scale(1.1)',
  }),
}));

const StepDescription = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '16px',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 30,
  maxWidth: '250px',
  transition: 'all 0.3s ease',
  transform: 'translate(-50%, -150%)',
  marginTop: '-40px', // Added margin to move description up
}));

const ProcessStep = ({
  step,
  index,
  isActive,
  onClick,
  position,
  isVisible,
}) => {
  const descriptionPosition = {
    ...position,
    top: `calc(${position.top} - 50px)`, // Adjusted offset for description
  };

  return (
    <React.Fragment>
      <StepButton
        onClick={() => onClick(index)}
        isActive={isActive}
        sx={position}
      >
        {step.name}
      </StepButton>
      {isActive && isVisible && (
        <StepDescription sx={descriptionPosition}>
          <Typography variant="body2">{step.description}</Typography>
        </StepDescription>
      )}
    </React.Fragment>
  );
};

export default ProcessStep;

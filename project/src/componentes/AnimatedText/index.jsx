import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { colors } from '../../theme/colors';

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [blinkCount, setBlinkCount] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const textRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const blinkTimeoutRef = useRef(null);

  useEffect(() => {
    const cleanText = text.trim(); // Remove espaços em branco extras do início e final
    let charIndex = 0;
    typingIntervalRef.current = setInterval(() => {
      if (charIndex < cleanText.length) {
        setDisplayedText((prevText) => prevText + cleanText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingIntervalRef.current);
        setAnimationFinished(true);
        setTimeout(() => {
          setBlinkCount(2);
        }, 500);
      }
    }, 50);
    return () => clearInterval(typingIntervalRef.current);
  }, [text]);

  useEffect(() => {
    if (blinkCount > 0) {
      const blinkInterval = setInterval(() => {
        if (textRef.current) {
          textRef.current.style.opacity =
            textRef.current.style.opacity === '0' ? '1' : '0';
        }
      }, 500);

      clearTimeout(blinkTimeoutRef.current);

      blinkTimeoutRef.current = setTimeout(() => {
        clearInterval(blinkInterval);
        if (textRef.current) {
          textRef.current.style.opacity = '1';
        }
        if (blinkCount === 1) {
          setBlinkCount(0);
        } else {
          setBlinkCount((prevCount) => prevCount - 1);
        }
      }, 1000);

      return () => {
        clearInterval(blinkInterval);
        clearTimeout(blinkTimeoutRef.current);
      };
    }
  }, [blinkCount]);

  return (
    <Typography
      ref={textRef}
      variant="subtitle1"
      sx={{
        color: 'black',
        mb: 4,
        fontStyle: 'italic',
        transition: 'opacity 0.5s ease',
        display: 'inline-block',
      }}
    >
      {displayedText}
    </Typography>
  );
};

export default AnimatedText;

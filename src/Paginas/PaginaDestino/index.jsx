import React, { useState, useEffect } from 'react';
import { Collapse } from '@mui/material';

const PaginaDestino = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Collapse in on mount with a slight delay
    setTimeout(() => {
      setShow(true);
    }, 100); // Adjust delay as needed
  }, []);

  return (
    <Collapse in={show}>
      <div>
        <h1>Página de Destino</h1>
        <p>Você chegou aqui após a transição!</p>
      </div>
    </Collapse>
  );
};

export default PaginaDestino;

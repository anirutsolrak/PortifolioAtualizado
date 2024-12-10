import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';
import emailjs from '@emailjs/browser';

const FormularioContato = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setFormData({ name: '', email: '', message: '' });
      onSuccess && onSuccess();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      onError && onError(error);
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: 'transparent',
        p: 4,
        border: 'solid 2px black',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minWidth: '200px',
        ...(isSmallScreen ? { mx: 2, mt: 3 } : { mx: 'auto', mt: 3 }),
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
        Entre em Contato
      </Typography>

      <TextField
        sx={{
          border: 'solid 1px black',
          '&::focus': { borderColor: 'black', borderRadius: '0' },
          '& label': { fontWeight: 'bold', color: 'black' },
        }}
        label="Nome"
        fullWidth
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        sx={{
          border: 'solid 1px black',
          '&::focus': { borderColor: 'black', borderRadius: '0' },
          '& label': { fontWeight: 'bold', color: 'black' },
        }}
        label="Email"
        fullWidth
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        sx={{
          border: 'solid 1px black',
          '&::focus': { borderColor: 'black', borderRadius: '0' },
          '& label': { fontWeight: 'bold', color: 'black' },
        }}
        label="Mensagem"
        fullWidth
        multiline
        rows={3}
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button
        sx={{ border: 'solid 1px black' }}
        variant="contained"
        color="primary"
        type="submit"
        aria-label="Enviar Mensagem"
      >
        Enviar
      </Button>
    </Box>
  );
};

export default FormularioContato;
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField, useMediaQuery, useTheme, Alert, Snackbar, CircularProgress } from '@mui/material';
import emailjs from '@emailjs/browser';
import { colors } from '../../theme/colors';

const FormularioContato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

    const [loading, setLoading] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Inicia o loading
    try {
        await emailjs.send(
            'default_service',
            'novo_lead_portifolio',
            {
            client_name: formData.name,
            client_email: formData.email,
            client_message: formData.message
            },
            'xpQRGAsANcfpqjrfR'
        );

        await emailjs.send(
            'default_service',
            'contato_cliente',
            {
            to_name: formData.name,
            to_email: formData.email
            },
            'xpQRGAsANcfpqjrfR'
        );

        setFormData({ name: '', email: '', message: '' });
        setSnackbar({
            open: true,
            message: 'Mensagem enviada com sucesso!',
            severity: 'success'
        });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        setSnackbar({
            open: true,
            message: 'Erro ao enviar mensagem. Por favor, tente novamente.',
            severity: 'error'
        });
    } finally {
            setLoading(false); // Finaliza o loading, independentemente do resultado
        }
    };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: colors.white,
        p: { xs: 2, sm: 3 },
        border: `2px solid ${colors.secondary}`,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: '500px',
        mx: 'auto',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ 
          textAlign: 'center',
          color: colors.primary,
          fontWeight: 600,
          mb: 2
        }}
      >
        Entre em Contato
      </Typography>

      <TextField
        label="Nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        size={isMobile ? "small" : "medium"}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: colors.secondary,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.text,
            '&.Mui-focused': {
              color: colors.primary,
            },
          },
        }}
      />

      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        size={isMobile ? "small" : "medium"}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: colors.secondary,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.text,
            '&.Mui-focused': {
              color: colors.primary,
            },
          },
        }}
      />

      <TextField
        label="Mensagem"
        multiline
        rows={isMobile ? 3 : 4}
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        fullWidth
        size={isMobile ? "small" : "medium"}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: colors.secondary,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.text,
            '&.Mui-focused': {
              color: colors.primary,
            },
          },
        }}
      />

      <Button
        variant="contained"
              type="submit"
              disabled={loading} // Desabilita o botão enquanto está carregando
        sx={{
          backgroundColor: colors.secondary,
          color: colors.white,
          fontWeight: 600,
          py: 1.5,
          '&:hover': {
            backgroundColor: colors.primary,
          },
            }}
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar Mensagem'}
            </Button>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleClose} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormularioContato;
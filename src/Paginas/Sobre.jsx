import { Box, Container, Typography, Grid } from '@mui/material';
import FormularioContato from '../componentes/Formulario';

const Sobre = () => {
  const handleFormSuccess = () => {
    console.log('Formulário enviado com sucesso!');
  };

  const handleFormError = (error) => {
    console.error('Erro ao enviar formulário:', error);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <FormularioContato
          onSuccess={handleFormSuccess}
          onError={handleFormError}
        />
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom align="center">
              Sobre Mim
            </Typography>
            <Typography variant="body1" paragraph>
              Desde 2023, tenho me dedicado ao desenvolvimento web, construindo uma carreira sólida e focada em entregar soluções inovadoras. Comecei minha jornada com JavaScript puro e CSS, e ao longo tempo, aprimorei minhas habilidades em JavaScript, React e Ferramentas de IAs.
            </Typography>
            <Typography variant="body1" paragraph>
              Atualmente, meu foco principal é o desenvolvimento de soluções web com IA, buscando criar aplicações inteligentes e eficientes que agreguem valor real aos meus clientes.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sobre;
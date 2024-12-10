import { Box, Container, Typography } from '@mui/material';
import ArticlesList from '../componentes/ArticlesList';

const Artigos = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Artigos e Publicações
        </Typography>
        <ArticlesList />
      </Container>
    </Box>
  );
};

export default Artigos;
import React from 'react';
import { Grid2, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { articles } from '../../data/projects';
import { colors, shadows } from '../../theme/colors';

const ArticlesList = () => {
  return (
    <Grid2 container spacing={3} sx={{ backgroundColor: colors.background }}>
      {articles.map((article) => (
        <Grid2 item size={{ xs: 12, md: 6 }} key={article.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              transition: 'transform 0.3s ease',
              boxShadow: shadows.card,
              backgroundColor: colors.white, // Fundo branco
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: shadows.button,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="overline" sx={{ color: colors.secondary, fontSize:'1.3rem', fontWeight: 'bold' }}> {/* Cor da plataforma (accent) */}
                {article.platform}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: colors.primary, fontWeight: 'bold' }}> {/* Cor do título (primary) */}
                {article.title}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text }}> {/* Cor da descrição (text) */}
                {article.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  href={article.url}
                  target="_blank"
                  sx={{
                    borderColor: colors.primary, // Cor da borda (primary)
                    color: 'black', // Cor do texto do botão (preto)
                    '&:hover': {
                      color: colors.secondary,
                      borderColor: colors.white, // Cor da borda no hover (branco)
                      backgroundColor: colors.hover,
                    },
                  }}
                >
                  Ler Artigo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ArticlesList;
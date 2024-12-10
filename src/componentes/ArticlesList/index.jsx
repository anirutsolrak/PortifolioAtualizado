import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { articles } from '../../data/projects';

const ArticlesList = () => {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid xs={12} md={6} key={article.id}>
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography 
                variant="overline" 
                sx={{ color: '#646CFF' }}
              >
                {article.platform}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {article.description}
              </Typography>
              <Box sx={{ mt: 'auto' }}>
                <Button
                  variant="outlined"
                  href={article.url}
                  target="_blank"
                  sx={{
                    borderColor: '#646CFF',
                    color: '#646CFF',
                    '&:hover': {
                      borderColor: '#4B50FF',
                      backgroundColor: 'rgba(100, 108, 255, 0.08)',
                    }
                  }}
                >
                  Ler Artigo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesList;
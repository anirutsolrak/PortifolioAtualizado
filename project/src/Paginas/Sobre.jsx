import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { colors, shadows } from '../theme/colors';
import PeopleIcon from '@mui/icons-material/People';
import CodeIcon from '@mui/icons-material/Code';

const Sobre = () => {
  const competencias = [
    { label: 'Trabalho em equipe', icon: <PeopleIcon /> },
    { label: 'React.js', icon: <CodeIcon /> },
    { label: 'Python', icon: <CodeIcon /> },
    { label: 'JavaScript', icon: <CodeIcon /> }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6, color: colors.primary, fontWeight: 600 }}>
          Sobre Mim
        </Typography>
        
        <Paper sx={{ p: 4, borderRadius: 2, textAlign: 'justify', boxShadow: shadows.card, mb: 6 }}>
          <Typography variant="body1" paragraph sx={{ color: colors.text, fontSize: '1.1rem' }}>
            Minha trajetória como Desenvolvedor de Software é impulsionada pela curiosidade e pela proatividade em transformar desafios em soluções digitais eficazes. Na Capital Consig, iniciei como Analista de Processos, mas, minha iniciativa e um projeto pessoal de visualização de dados, rapidamente me posicionaram como um Desenvolvedor interno.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: colors.text, fontSize: '1.1rem' }}>
            Ao longo de quase um ano, atuei de forma autônoma, aprendendo e aplicando tecnologias como VBA, Supabase, Python e React.js para otimizar operações. Desenvolvi e implementei mais de 10 projetos, dos quais 5 estão em uso ativo, incluindo robôs de automação com interfaces em React, painéis de gerenciamento de call center e ferramentas de prevenção a fraudes e controle de parceiros.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: colors.text, fontSize: '1.1rem' }}>
            Sou apaixonado por criar interfaces de usuário intuitivas e eficientes, sempre buscando aprimoramento contínuo. Minha experiência comprova alta capacidade de aprendizado, adaptabilidade e resiliência para entregar resultados em ambientes de pressão, mesmo em projetos que exigem o domínio de novas tecnologias.
          </Typography>
          <Typography variant="body1" sx={{ color: colors.text, fontSize: '1.1rem', fontWeight: 'bold' }}>
            Busco agora integrar uma equipe de desenvolvimento colaborativa, onde possa aplicar minha experiência, expandir minhas habilidades e, futuramente, liderar projetos inovadores que gerem impacto real.
          </Typography>
        </Paper>

        {/* SEÇÃO DE COMPETÊNCIAS */}
        <Box id="competencias" sx={{ py: 4 }}>
          <Typography variant="h4" align="center" sx={{ mb: 4, color: colors.primary, fontWeight: 600 }}>
            Principais Competências
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            {competencias.map((competencia) => (
              <Chip 
                key={competencia.label}
                icon={competencia.icon}
                label={competencia.label}
                sx={{ fontSize: '1rem', p: 2, bgcolor: colors.white, color: colors.primary, fontWeight: 500 }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Sobre;
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Chip,
  Divider,
  Stack,
  Collapse,
  Grid2,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import Photo from '../../assets/Photo.svg';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Grow from '@mui/material/Grow/Grow';

const FrontEnd =
  'https://github.com/anirutsolrak/Certificados/blob/main/Front%20End.pdf';
const ReactJS =
  'https://github.com/anirutsolrak/Certificados/blob/main/React.pdf';

const duration = 1000;
const SCROLL_SPEED = 1; // Pixels per frame

const timelineData = [
  {
    title: 'Início dos Estudos em Desenvolvimento Web',
    date: 'Janeiro 2023',
    description:
      'Comecei minha jornada no desenvolvimento web, explorando JavaScript e CSS. Descobri um novo mundo de possibilidades e me apaixonei pela criação de soluções digitais.',
    icon: <WorkIcon />,
    projects: [],
  },
  {
    title: 'Primeiro Projeto: Landing Page com Figma',
    date: 'Fevereiro 2023',
    description:
      'Criei minhas primeiras Landing Pages a partir de layouts do Figma, utilizando React, Vite, JavaScript, e MUI.',
    icon: <CodeIcon />,
    projects: [
      {
        title: 'Landing Page 1',
        description:
          'Landing page utilizando React, Vite, JavaScript, e MUI. [Link para o projeto 1]',
        technologies: ['React', 'Vite', 'JavaScript', 'MUI', 'Figma'],
      },
      {
        title: 'Landing Page 2',
        description:
          'Landing page utilizando React, Vite, JavaScript, e MUI. [Link para o projeto 2]',
        technologies: ['React', 'Vite', 'JavaScript', 'MUI', 'Figma'],
      },
    ],
  },
  {
    title: 'Aprofundando o Front-End com React',
    date: 'Março 2023',
    description:
      'Mergulhei de cabeça no React, aprimorando minhas habilidades em componentes, hooks e gerenciamento de estado.',
    icon: <CodeIcon />,
    projects: [],
  },
  {
    title: 'Exploração de Styled-Components e React Router DOM',
    date: 'Abril 2023',
    description:
      'Comecei a utilizar styled-components para estilizar minhas aplicações de forma mais eficiente e React Router DOM para gerenciar rotas.',
    icon: <CodeIcon />,
    projects: [],
  },
  {
    title: 'Primeiros Passos com IA',
    date: 'Maio 2023',
    description:
      'Iniciei a jornada no mundo da IA, explorando suas aplicações no desenvolvimento web.',
    icon: <LightbulbIcon />,
    projects: [],
  },
  {
    title: 'Construindo um Site com IA',
    date: 'Junho 2023',
    description:
      'Criei um site completo utilizando IA, ajustando os prompts até obter o resultado desejado.',
    icon: <LightbulbIcon />,
    projects: [
      {
        title: 'Site com IA',
        description: 'Site utilizando IA para gerar conteúdo e design.',
        technologies: ['IA', 'Prompt Engineering'],
      },
    ],
  },
];

const Perfil = () => {
  const [show, setShow] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [showProject, setShowProject] = useState(
    Array(timelineData.length).fill(false)
  );
  const [isHovering, setIsHovering] = useState(false);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    setShow(true);
    setShowTimeline(true);
    setShowScrollbar(true);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    const container = timelineRef.current;
    if (!container) return;

    scrollIntervalRef.current = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += SCROLL_SPEED;
      }
    }, 16); // ~60fps
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  const toggleProjectVisibility = (index) => {
    const updatedShowProject = [...showProject];
    updatedShowProject[index] = !updatedShowProject[index];
    setShowProject(updatedShowProject);
  };

  const renderTimeline = () => {
    return (
      <Grid22 container justifyContent="center">
        <Grid22 xs={12} md={8} lg={8} xl={6}>
          <Box
            sx={{
              overflowX: 'auto',
              padding: 2,
              maxWidth: '95vw',
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: '#555',
                },
              },
              scrollBehavior: 'smooth',
            }}
            ref={timelineRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              Minha Jornada
            </Typography>
            <Divider />

            <Timeline
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                padding: '20px 0',
                '& .MuiTimelineItem-root': {
                  minWidth: '300px',
                  flexShrink: 0,
                },
              }}
            >
              {timelineData.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      {item.date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      color={
                        item.icon.type === LightbulbIcon
                          ? 'secondary'
                          : 'primary'
                      }
                    >
                      {item.icon}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="span">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                    {item.projects && item.projects.length > 0 && (
                      <Box mt={1}>
                        <Typography
                          variant="subtitle2"
                          onClick={() => toggleProjectVisibility(index)}
                          sx={{
                            cursor: 'pointer',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          Ver Projetos
                        </Typography>
                        <Collapse in={showProject[index]}>
                          <Stack direction="column" spacing={1} mt={1}>
                            {item.projects.map((project, projectIndex) => (
                              <Box key={projectIndex}>
                                <Typography variant="subtitle2">
                                  {project.title}
                                </Typography>
                                <Typography variant="body2">
                                  {project.description}
                                </Typography>
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  sx={{ flexWrap: 'wrap', gap: 1 }}
                                >
                                  {project.technologies.map(
                                    (tech, techIndex) => (
                                      <Chip
                                        key={techIndex}
                                        label={tech}
                                        variant="outlined"
                                        size="small"
                                      />
                                    )
                                  )}
                                </Stack>
                              </Box>
                            ))}
                          </Stack>
                        </Collapse>
                      </Box>
                    )}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Grid22>
      </Grid22>
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid2 container gap={2}>
        {' '}
        {/* Use gap for spacing */}
        <Grid2 item xs={12} sm={4}>
          {' '}
          {/* Maintain xs and sm for responsiveness */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
            }}
          >
            <img
              src={Photo}
              alt="Foto de Carlos Eduardo Turina"
              style={{
                width: '100%',
                maxWidth: 200,
                borderRadius: '50%',
                marginRight: { sm: 2 },
                marginBottom: { xs: 2, sm: 0 },
              }}
            />
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                Olá! Sou
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                color="primary"
              >
                Carlos Eduardo Turina
              </Typography>
              <Typography variant="h6" component="h3">
                Desenvolvedor Front-End
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={8}>
          <Grid2 container gap={2} justifyContent="space-between">
            {/*  We'll need to adjust sizes with the new size API */}
            <Grid2 item size="grow" sx={{ maxWidth: '45vw' }}>
              <Typography variant="body1" gutterBottom>
                I came to the UK from Brazil 🇧🇷 back in 2016. Having completed a
                Master's degree in Graphic Design at The University of
                Nottingham, I've decided to pursue a career in UX design.
              </Typography>
            </Grid2>
            <Grid2 item size="grow" sx={{ maxWidth: '45vw' }}>
              <Typography variant="body1">
                I have a particular interest in accessibility and inclusive
                design. Having worked in media, charity, and education
                companies, I'm keen to explore opportunities for design in the
                fintech sector.
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Perfil;
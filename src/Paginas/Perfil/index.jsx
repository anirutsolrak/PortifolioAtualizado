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
import ProcessoDeDesenvolvimento from '../../componentes/ProcessoDeDesenvolvimento';

const FrontEnd =
  'https://github.com/anirutsolrak/Certificados/blob/main/Front%20End.pdf';
const ReactJS =
  'https://github.com/anirutsolrak/Certificados/blob/main/React.pdf';
const AluraMid = 'https://anirutsolrak.github.io/AluraMid/';
const NumeroSecreto = 'https://numero-secreto-react.vercel.app/';
const NexusPlay = 'https://nexuplay.vercel.app/';
const SiteFigma1 = 'https://site-com-figma.vercel.app/';
const SiteFigma2 = 'https://site-chi-liart.vercel.app/';
const BookVerse = 'https://bookverse-seven.vercel.app/';
const LP1 = 'https://tixshop-react-ty.vercel.app/';
const LP2 = 'https://anirutsolrak.github.io/Lp_TIXSHOP/';
const Quiz = 'https://quiz-rho-dusky-73.vercel.app/';
const SiteIa = 'https://a-do-ura-da-fantasia.vercel.app/';

const duration = 1000;
const SCROLL_SPEED = 3; // Pixels per frame

const timelineData = [
  {
    title: 'Início dos Estudos em Desenvolvimento Web',
    date: 'Janeiro 2024',
    description: (
      <>
        <Typography variant="body2">
          Comecei minha jornada no desenvolvimento web, explorando JavaScript e
          CSS.
        </Typography>
        <Typography variant="body2">
          {' '}
          Descobri um novo mundo de possibilidades e me apaixonei pela criação
          de soluções digitais.{' '}
        </Typography>{' '}
      </>
    ),
    icon: <WorkIcon />,
    projects: [],
  },
  {
    title: 'Primeiros Projetos: Aplicações simples com java Script ',
    date: 'Fevereiro 2024',
    description:
      'Criei minhas primeiras aplicações a partir dos ensinamentos das aulas sobre javascript, JavaScript puro, e CSS.',
    icon: <CodeIcon />,
    projects: [
      {
        title: 'Alura Midi',
        description: (
          <>
            Aplicação feita com JavaScript puro que tem o objetivo de reproduzir
            o som respectivo ao clique dos botões.{' '}
            <a href={AluraMid} target="_blank" rel="noopener noreferrer">
              Versão ao online
            </a>
          </>
        ),
        technologies: ['JavaScript', 'CSS'],
      },
      {
        title: 'Jogo do numero secreto',
        description: (
          <>
            <Typography variant="body2">
              'Um jogo feito com JavaScript puro, que da ao jogador o desafio de
              descobrir o numero secreto gerado pela aplicação,
            </Typography>
            <Typography variant="body2">
              {' '}
              (A versão atual foi repensada quando aprendi React).
              <a href={NumeroSecreto} target="_blank" rel="noopener noreferrer">
                Versão ao online
              </a>
            </Typography>
          </>
        ),
        technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
      },
    ],
  },
  {
    title: 'Aprofundando o Front-End com React',
    date: 'Março 2024',
    description:
      'Mergulhei de cabeça no React, aprimorando minhas habilidades em componentes, hooks e gerenciamento de estado.',
    icon: <CodeIcon />,
    projects: [
      {
        title: 'NexusPlay',
        description: (
          <>
            Aplicação feita com React.js e MUI que tem o objetivo de reproduzir
            videos localmente tirados de fontes externas.{' '}
            <a href={NexusPlay} target="_blank" rel="noopener noreferrer">
              Versão ao online
            </a>
          </>
        ),
        technologies: ['React', 'Java Script', 'Mui', 'Vite'],
      },
      {
        title: 'BookVerse',
        description: (
          <>
            <Typography variant="body2" sx={{ paddingBottom: '2px' }}>
              Aplicação feita com React.js, Mui e integrando com o assas{' '}
            </Typography>
            <Typography variant="body2">
              {' '}
              para simular pagamentos, que tem o objetivo de reproduzir uma
              vitrine de produtos com um carrinhos com checkOut integrado com o
              Assas.
            </Typography>{' '}
            <a href={BookVerse} target="_blank" rel="noopener noreferrer">
              Versão ao online
            </a>
          </>
        ),
        technologies: ['React', 'Java Script', 'Mui', 'Assas', 'Vite'],
      },
    ],
  },
  {
    title: 'Exploração de Styled-Components e React Router DOM',
    date: 'Abril 2024',
    description:
      'Comecei a utilizar styled-components para estilizar minhas aplicações de forma mais eficiente e React Router DOM para gerenciar rotas, Tambem começei a experimentar a criação de Landing Pages',
    icon: <CodeIcon />,
    projects: [
      {
        title: 'Landing Page',
        description: (
          <>
            Landing Page feita com Java Script e css que tem o objetivo de
            reproduzir um layout intuitivo e atraente.{' '}
            <a href={LP1} target="_blank" rel="noopener noreferrer">
              Versão ao online
            </a>
          </>
        ),
        technologies: ['Java Script', 'CSS'],
      },
      {
        title: 'Landing Page',
        description: (
          <>
            Landing Page feita com React.js, Mui, e Vite que tem o objetivo de
            reproduzir um layout otimizado e escalavel.{' '}
            <a href={LP2} target="_blank" rel="noopener noreferrer">
              Versão ao online
            </a>
          </>
        ),
        technologies: ['React', 'Java Script', 'Mui', 'Vite'],
      },
    ],
  },
  {
    title: 'Primeiros Passos com IA',
    date: 'Maio 2024',
    description: (
      <>
        <Typography variant="body2">
          Iniciei a jornada no mundo da IA, explorando suas aplicações no
          desenvolvimento web.
        </Typography>
        <Typography variant="body2">
          Ao mesmo tempo em que me considerei apto a criar meus primeiros sites
          a partir de projetos do Figma
        </Typography>{' '}
      </>
    ),
    icon: <LightbulbIcon />,
    projects: [
      {
        title: 'Site inspirado Em Figma',
        description: (
          <>
            <Typography variant="body2">
              Uma Home page inspirada em um layout moderno e atraente. com o
              foco de.
            </Typography>
            <Typography variant="body2">
              {' '}
              Treinar a capacidade de ser fiel ao layout ainda que criativo.
              <a href={SiteFigma2} target="_blank" rel="noopener noreferrer">
                Versão ao online
              </a>
            </Typography>
          </>
        ),
        technologies: [
          'React',
          'Java Script',
          'Mui',
          'Vite',
          'Figma',
          'Styled Components',
          'React Router Dom',
        ],
      },
      {
        title: 'Site Fiel ao Figma',
        description: (
          <>
            <Typography variant="body2">
              Uma Home page fiel a um layout moderno e atraente. com o foco de.
            </Typography>
            <Typography variant="body2">
              {' '}
              Treinar a capacidade de ser fiel ao layout.
              <a href={SiteFigma1} target="_blank" rel="noopener noreferrer">
                Versão ao online
              </a>
            </Typography>
          </>
        ),
        technologies: [
          'React',
          'Java Script',
          'Mui',
          'Vite',
          'Figma',
          'Styled Components',
          'React Router Dom',
        ],
      },
    ],
  },
  {
    title: 'Construindo um Site com IA',
    date: 'Junho 2024',
    description:
      'Criei um site completo utilizando IA, ajustando os prompts até obter o resultado desejado.',
    icon: <LightbulbIcon />,
    projects: [
      {
        title: 'Site com IA',
        description: (
          <>
            <Typography variant="body2" mb={0.5}>
              Landing Page feita com React.js, Mui, e Vite que tem o objetivo de
              reproduzir um layout otimizado e escalavel.
            </Typography>
            <a href={SiteIa} target="_blank" rel="noopener noreferrer">
              Versão ao online
            </a>
          </>
        ),
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
      container.scrollLeft += SCROLL_SPEED;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
    }, 16);
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
      <Grid2 container justifyContent="center">
        <Grid2 xs={12} md={8} lg={8} xl={6}>
          <Box
            sx={{
              overflowX: 'auto',
              padding: 2,
              maxWidth: '100vw',
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
                                  sx={{
                                    flexWrap: 'wrap',
                                    gap: 1,
                                    paddingTop: '2px',
                                  }}
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
        </Grid2>
      </Grid2>
    );
  };

  return (
    <Box sx={{ overflowX: 'hidden', maxWidth: '98vw', padding: '10px' }}>
      <Grid2 container gap={2}>
        {/* Use gap for spacing */}
        <Grid2 xs={12} sm={4}>
          {/* Maintain xs and sm for responsiveness */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
            }}
            gap={5}
          >
            <img
              src={Photo}
              alt="Foto de Carlos Eduardo Turina"
              style={{
                width: '100%',
                minWidth: 250,
                borderRadius: '50%',
              }}
            />
            <Box>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  margin: 0,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.235,
                  letterSpacing: '0.00735em',
                }}
              >
                Olá! Sou
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                color="#646CFF"
                sx={{
                  minWidth: '73vw',
                  margin: 0,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontWeight: 400,
                  lineHeight: 1.235,
                  letterSpacing: '0.00735em',
                }}
              >
                Carlos Eduardo Turina
              </Typography>
              <Typography
                variant="h2"
                component="h3"
                sx={{
                  margin: 0,
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontWeight: 400,

                  lineHeight: 1.235,
                  letterSpacing: '0.00735em',
                }}
              >
                Desenvolvedor Front-End
              </Typography>
            </Box>
          </Box>
        </Grid2>

        <Grid2 xs={12} sm={8} paddingLeft={6}>
          {/* Adicionando o Collapse para encapsular o conteúdo */}
          <Collapse in={show} timeout={duration}>
            <Grid2 container gap={2} justifyContent="space-between">
              {/*  We'll need to adjust sizes with the new size API */}
              <Grid2 size="grow" sx={{ maxWidth: '45vw' }}>
                <Typography variant="body1" gutterBottom>
                  "Desde 2024, tenho me dedicado ao desenvolvimento web,
                  construindo uma carreira sólida e focada em entregar soluções
                  inovadoras. Comecei minha jornada com JavaScript puro e CSS, e
                  ao longo tempo, aprimorei minhas habilidades em JavaScript,
                  React e Ferramentas de IAs. Atualmente, meu foco principal é o
                  desenvolvimento de soluções web com IA, buscando criar
                  aplicações inteligentes e eficientes que agreguem valor real
                  aos meus clientes.
                </Typography>
                <Typography variant="body2">
                  Durante este processo, me especializei na área de Front-End
                  com a certificação em
                  <a href={FrontEnd} target="_blank" rel="noopener noreferrer">
                    Front-End
                  </a>{' '}
                  e
                  <a href={ReactJS} target="_blank" rel="noopener noreferrer">
                    ReactJS
                  </a>
                  , aprofundando meus conhecimentos em JavaScript, lógica de
                  programação, lógica orientada a objeto e Styled-Components.
                </Typography>
              </Grid2>
              <Grid2 size="grow" sx={{ maxWidth: '45vw' }}>
                <Typography variant="body1">
                  Sou apaixonado por Inteligência Artificial e suas aplicações
                  no desenvolvimento web. Acredito que a IA tem um potencial
                  enorme para revolucionar a forma como criamos e interagimos
                  com as soluções digitais. Busco constantemente me atualizar
                  sobre as últimas tecnologias de IA, como Processamento de
                  Linguagem Natural (PNL), Análise de Sentimentos e Automação,
                  para desenvolver aplicações inovadoras e eficientes que
                  resolvam problemas complexos e gerem valor para os clientes."{' '}
                </Typography>
              </Grid2>
            </Grid2>
          </Collapse>
        </Grid2>
        <Grid2 xs={12}>
          <Typography variant="h3">Minha Jornada</Typography>
          <Divider />
          {renderTimeline()}
        </Grid2>
        <Grid2>
          <ProcessoDeDesenvolvimento />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Perfil;

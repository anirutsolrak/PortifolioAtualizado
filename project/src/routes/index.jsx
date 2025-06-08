import { createBrowserRouter, Navigate } from 'react-router-dom';
import Navbar from '../componentes/Navbar/'; // Importe o Navbar
import DetalhesProjeto from '../Paginas/DetalhesProjeto';
import Artigos from '../Paginas/Artigos';
import Sobre from '../Paginas/Sobre';
import Introducao from '../Paginas/Introducao';
import Perfil from '../Paginas/Perfil';
import LandingPage from '../Paginas/LandingPage';
import DashboardsProjetos from '../Paginas/DashboardsProjetos';
import FerramentasCorporativasProjetos from '../Paginas/FerramentasCorporativasProjetos';
import AIProjetos from '../Paginas/AIProjetos';
import AplicacoesWebProjetos from '../Paginas/AplicacoesWebProjetos';
import OrcamentoFrontend from '../Paginas/Orcamentos/OrcamentoFrontend';
import OrcamentoIA from '../Paginas/Orcamentos/OrcamentoIA';
import OrcamentoUIUX from '../Paginas/Orcamentos/OrcamentoUIUX';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />, // Agora a rota principal é a Landing Page
  },
  {
    path: '/intro',
    element: <Introducao />, // Movemos a introdução para uma rota específica
  },
  {
    path: '/perfil',
    element: <Navbar />, // Use o Navbar como elemento principal
    children: [
      {
        index: true, // Rota principal para /perfil
        element: <Perfil />,
      },
      {
        path: 'projetos/dashboards',
        element: <DashboardsProjetos />,
      },
      {
        path: 'projetos/ferramentas-corporativas',
        element: <FerramentasCorporativasProjetos />,
      },
      {
        path: 'projetos/projetos-com-ia',
        element: <AIProjetos />,
      },
      {
        path: 'projetos/aplicacoes-web',
        element: <AplicacoesWebProjetos />,
      },
      {
        path: 'orcamento/frontend',
        element: <OrcamentoFrontend />,
      },
      {
        path: 'orcamento/ia',
        element: <OrcamentoIA />,
      },
      {
        path: 'orcamento/uiux',
        element: <OrcamentoUIUX />,
      },
      {
        path: 'project/:id',
        element: <DetalhesProjeto />,
      },
      {
        path: 'articles',
        element: <Artigos />,
      },
      {
        path: 'about',
        element: <Sobre />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/\" replace />,
  },
]);
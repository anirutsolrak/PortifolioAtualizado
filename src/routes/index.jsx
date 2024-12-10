import { createBrowserRouter, Navigate } from 'react-router-dom';
import Navbar from '../componentes/Navbar/'; // Importe o Navbar
import DetalhesProjeto from '../Paginas/DetalhesProjeto';
import Artigos from '../Paginas/Artigos';
import Sobre from '../Paginas/Sobre';
import Introducao from '../Paginas/Introducao';
import Perfil from '../Paginas/Perfil';
import AplicacoesProjetos from '../Paginas/AplicacoesProjetos';
import AIProjetos from '../Paginas/AIProjetos';
import WebsitesProjetos from '../Paginas/WebsitesProjetos';
import OrcamentoFrontend from '../Paginas/Orcamentos/OrcamentoFrontend';
import OrcamentoIA from '../Paginas/Orcamentos/OrcamentoIA';
import OrcamentoUIUX from '../Paginas/Orcamentos/OrcamentoUIUX';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Introducao />,
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
        path: 'projetos/websites',
        element: <WebsitesProjetos />,
      },
      {
        path: 'projetos/aplicacoes',
        element: <AplicacoesProjetos />,
      },
      {
        path: 'projetos/projetos-com-ia',
        element: <AIProjetos />,
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
    element: <Navigate to="/" replace />,
  },
]);

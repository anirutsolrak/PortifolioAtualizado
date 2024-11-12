// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introducao from './Paginas/Introducao'; // Correct path to Introducao
import Perfil from './Paginas/Perfil'; // Correct path to Perfil

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introducao />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

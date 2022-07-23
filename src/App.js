
import './App.css';

import { useState } from 'react';

import api from './services/api';

import { BsSearch, BsTrash } from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {

    if (input === '') {
      toast.warn('Preencha algum CEP!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('');

    } catch {
      toast.error('Ops! erro ao buscar.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setInput('');
    }
  }

  function handleClear() {
    setInput('');
    setCep('');
  }

  return (

    <section>

      <div className='container'>

        <div>
          <Header />
        </div>

        <h1 className='title'>React - Busca CEP</h1>

        <div className='containerInput'>

          <input
            type='text'
            placeholder='Digite seu cep...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <ToastContainer />

        </div>

        <div className='btns'>

          <button className='buttonSearch' onClick={handleSearch}>
            < BsSearch size={24} />
            Buscar
          </button>

          <button className='buttonClear' onClick={handleClear}>
            Limpar
            < BsTrash size={24} />
          </button>

        </div>

        {Object.keys(cep).length > 0 && (
          
          <main className='main'>
            <span><strong>CEP: </strong>{cep.cep}</span>
            <span><strong>Logradouro: </strong>{cep.logradouro}</span>
            <span><strong>Bairro: </strong>{cep.bairro}</span>
            <span><strong>Localidade: </strong>{cep.localidade}</span>
            <span><strong>Uf: </strong>{cep.uf}</span>
            <span><strong>DDD: </strong>{cep.ddd}</span>
          </main>
        )}

      </div>

    </section>

  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Episodio from './pages/Episodio';
import Episodios from './pages/Episodios';
import Personagem from './pages/Personagem';
import Personagens from './pages/Personagens';

import Erro from './pages/Erro';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />

                <Route path='/episodios' element={ <Episodios/> } />
                <Route path='/episodios/:id' element={ <Episodio/> } />

                <Route path='/personagens' element={ <Personagens/> } />
                <Route path='/personagens/:id' element={ <Personagem/> } />

                <Route path='*' element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}
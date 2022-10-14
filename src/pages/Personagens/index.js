import {useEffect, useState} from 'react';
import '../../styles/personagens.css';
import api from '../../services/api';
import { Link } from 'react-router-dom'; 

export default function Personagens() {
    const [personagens, setPersonagens] = useState([]);
    const [loadPagina, setLoadPagina] = useState(true);

    useEffect(()=>{
      async function loadPersonagens(){
          const retorno = await api.get('/characters')

          setPersonagens(retorno.data);
          setLoadPagina(false);
      }

      loadPersonagens()
    });

    if(loadPagina){
      return(
        <div className='carregando'>
          <h2>Carregando Personagens...</h2>
        </div>
      )
    }

    return (
      <div className='ep_container'>
        {personagens.map((persona)=>{
          return(
            <div className='cardBody' key={persona.char_id}>
              <div className='card' >
                <img className='img' src={`${persona.img}`} alt={persona.name}/>
                <h1>{persona.name}</h1>
                <p><Link className='cardButton' to={`/personagens/${persona.char_id}`}>Acessar</Link></p>
              </div>
            </div>
          )
        })}
      </div>
        
    );
  }
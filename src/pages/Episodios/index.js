import {useEffect, useState} from 'react';
import '../../styles/episodios.css';
import api from '../../services/api';
import { Link } from 'react-router-dom'; 

export default function Episodios() {
  const [episodios, setEpisodios] = useState([]);
  const [loadEpisodios, setLoadEpisodios] = useState(true);

  useEffect(()=>{
    async function loadEpisodios(){
        const retorno = await api.get('/episodes')

        setEpisodios(retorno.data);
        setLoadEpisodios(false);
    }

    loadEpisodios()
  });

  if(loadEpisodios){
    return(
      <div className='ep_list_load'>
        <h2>Carregando Lista...</h2>
      </div>
    )
  }

  return (
    <div className='episode'>
      {episodios.map((ep)=>{
        return(
          <div className="ep-flip-card" key={ep.episode_id}>
            <div className="ep-flip-card-inner">
              <div className="ep-flip-card-front">
                <h1>Episódio: {ep.episode}</h1>
                <div className='ep-flip-card-front-content'>
                  <h2>{ep.title}</h2> 
                  <p>Temp: {ep.season}</p> 
                  <p>Série: {ep.series}</p>
                </div>
              </div>
              <div className="ep-flip-card-back">
                <h3>Mais informações</h3>
                <Link className='episode_details' to={`/episodios/${ep.episode_id}`}> Acessar </Link>
              </div>
            </div>
          </div>
        )
      })}
      
    </div>
    );
}
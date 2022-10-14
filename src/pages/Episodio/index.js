import {useEffect, useState}  from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import '../../styles/episodio.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import * as moment from 'moment';
import { toast } from 'react-toastify';

export default function Episodio() {
  const { id } = useParams();
  const nav = useNavigate();

  const[load, setLoad] = useState(true);
  const[episodio, setEpisodio] = useState({});


  useEffect(()=>{
     async function loadEpisodio(){
          await api.get(`/episodes/${id}`)
          .then((res)=>{
            if(res.data[0] === undefined){
              nav("/episodios", {replace: true});
              toast.warn("Episódio não encontrado");
              return;
            } 
            setEpisodio(res.data[0]);
            setLoad(false);
          })
          .catch(()=>{
            nav("/episodios", {replace: true});
            toast.warn("Episódio não encontrado");
            return;
          });
     }

     loadEpisodio();

     return() => {
      
     }
  }, [nav, id]);

  if(load){
    return(
        <div className='loadep'>
            <h1>Carregando episódio...</h1>
        </div>
    )

}

  return (
      <div className='container'>
        <div className='info-ep'>    
          <article key={episodio.episode}>
              <strong>Episódio: {episodio.episode} - {episodio.title}</strong>
              <div className="info-ep-start">
                <p>Estréia: {moment(episodio.air_date).format('DD/MM/YYYY')}</p>
                <p>Série: {episodio.series} </p>
                <p>Temporada: {episodio.season}  </p>
              </div>
              <div className='info-ep-char'>
                <h4>Personagens: </h4>
                  {episodio.characters.map((ep)=>{
                    return(
                        <p className='info-ep-names' key={ep}>{ep}</p>
                    )
                  })} 
              </div>
              <Link to='/episodios'> Retornar a Lista </Link>
          </article>
        </div>
      </div>
    
  );
}
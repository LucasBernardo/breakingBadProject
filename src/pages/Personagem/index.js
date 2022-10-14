import {useEffect, useState}  from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/personagem.css';
import { toast } from 'react-toastify';
import * as moment from 'moment'

export default function Personagem() {
    const { id } = useParams();
    const navigate = useNavigate();

    const[load, setLoad] = useState(true);
    const[personagem, setPersonagem] = useState({});

    useEffect(()=>{
       async function loadPersonagem(){
          await api.get(`/characters/${id}`)
          .then((res)=>{
            if(res.data[0] === undefined){
              navigate("/personagens", {replace: true});
              toast.warn("Personagem não encontrado");
              return;
            }
            console.log(res.data[0]);
            setPersonagem(res.data[0]);
            setLoad(false);
          })
          .catch(()=>{
            navigate("/personagens", {replace: true});
            toast.warn("Personagem não encontrado");
            return;
          }); 
       }

       loadPersonagem();

       return() => {
        console.log("Componente foi desmontado");
       }
    }, [navigate, id]);

    if(load){
      return(
          <div className='loadPersonagem'>
              <h1>Carregando personagem...</h1>
          </div>
      )
    }

    return (
      <div className='cardBody'>
        <div className="card">
          <img className='img' src={personagem.img} alt={personagem.name} />
          <h1>{personagem.name}</h1>
          {personagem.birthday !== 'Unknown' && <p className="title">Nascimento: {moment(personagem.birthday).format('DD/MM/YYYY')}</p>}
          {personagem.nickname !== 'Unknown' && <p>Apelido: {personagem.nickname}</p>}
          <p>Interpretado por: {personagem.portrayed}</p>
          <p>Aparece em: {personagem.category}</p>
          <p><Link className='cardButton' to='/personagens'>Retornar a Lista</Link></p>
        </div>
      </div>
      
    );
  }
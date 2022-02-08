// import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';
import Btn from '../card/Btn';
import './Doar.css';
import { CardInterface } from '../model/CardInterface';
import {CgProfile} from 'react-icons/cg';



function Doar( card:CardInterface ) {
    const doar: CardInterface={
        urlFoto:card.urlFoto,
        nome:card.nome,
        endereco: card.endereco,
        texto: card.texto,
        tipoSanguineo: card.tipoSanguineo,
        quantidade: card.quantidade,
        telefone: card.telefone,
        textoBtn: "cancelar",
        onClick: cancelar,
    }
    function cancelar(){
        console.log("cancelar");
        // console.log(doar);
    }
    return(
        <div className='doar' >
            {/*  */}
            <div className='usuario'>
                <div className='profile'>
                    {doar.urlFoto?<img src={doar.urlFoto} alt='foto'/>:<CgProfile/>}    
                </div>
                <div className='nome_endereco'>
                    <h3 className='nome'>{doar.nome}</h3>
                    <span>{doar.endereco}</span>
                </div>
            </div>
            {/*  */}
            <div className='texto'>
                <p>{card.texto}</p>
            </div>
            <hr/>
            <div className='detalhes'>
                <ul>
                    <li><MdOutlineBloodtype/> Tipos sanguineo: {card.tipoSanguineo} </li>
                    <li><RiHealthBookFill/> Quantidade: {card.quantidade} </li>
                </ul>
            </div>
            <hr></hr>
            <div className='contatos'>
                <span>Telefone: {card.telefone}</span>  
            </div>
            <Btn onClick={card.onClick} textoBtn = {card.textoBtn}/>
        </div>
    )
}

export default Doar;
import './Btn.css';

interface BtnInterface{
    textoBtn: string;
    onClick():any;
}


function Btn(btn: BtnInterface) {

    return(
        <div className='btn'>
            <button onClick={btn.onClick}>
                {btn.textoBtn}
            </button> 
        </div>  
    )
}

export default Btn
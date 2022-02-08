import './BtnPedido.css';

function BtnPedido() {

    function abrirPedido() {
        console.log("abrir pedido");
    }

    return(
        <div className='AbrirPedido'>
            <button onClick={abrirPedido}>Abrir pedido</button>
        </div>
    )
}

export default BtnPedido;
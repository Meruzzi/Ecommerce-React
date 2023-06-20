export default function InfVendedor(props) {
  return (
    <div id="cardInfVendedor" className="cardInfProduto">
    <h3 className="titleCardInf">Informações do vendedor</h3>
    <div style={{ paddingBottom: '5px' }}>
    <p><span className='styleBoldTitle'>Vendedor:</span> {props.nomeVendedor}</p>
    <p><span className='styleBoldTitle'>E-mail:</span> {props.emailVendedor}</p>
    <p><span className='styleBoldTitle'>Telefone:</span> {props.telefoneVendedor}</p>
    <p><span className='styleBoldTitle'>Nota:</span> {props.notaVendedor}</p>
      </div>
    </div>
  )
}
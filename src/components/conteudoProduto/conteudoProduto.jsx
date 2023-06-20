import style from './conteudoProduto.module.css'

export default function ConteudoProduto(props) {
  const styleBold = {
    fontWeight: "bold"
  }

  return (
    <div className={style.cardConteudoProduto} id='cardContProduto'>
      <div id='cardImgProduto'>
        <img src={props.imgProduto} alt={props.alt} title={props.title} className={style.imgProduto} />
      </div>
      <div className={style.conteudoCard} id='cardInfCompra'>
        <h2 className='nomeProduto'>{props.nomeProduto}</h2>
        <p><a href='#cardAvaliacaoPdt'>Nota do produto: {props.notaProduto}</a></p>
        <h3>R${props.precoProdutoAvista}</h3>
        <p>no PIX (5% de desconto)</p>
        <p>ou <span style={styleBold}>R${props.precoProdutoPrazo}</span> em 10x de <span style={styleBold}>R${props.precoProdutoParcelas}</span> sem juros.</p>
        <p>Calcular frete: <input type={'number'} placeholder={'CEP'} id={style.inputCep} /></p>
        <div className='cardBtnComprar'>
          <div className={style.btnComprar}>COMPRAR AGORA</div>
          <div className={style.btnComprar}>ADICIONAR À SACOLA</div>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import style from './produtosRelacionados.module.css'

const data = './public/data/produtosRelacionados.json'

class ProdutosRelacionados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: []
    }
  }

componentDidMount() {
  fetch(data)
  .then(response => response.json())
  .then(data => {this.setState({ produtos: data })})
}

render() {
  const { produtos } = this.state;

  return(
    <div id='cardPdtRelacionados' className="cardInfProduto">
    <h3 className="titleCardInf">Produtos Relacionados</h3>
      <div className={style.cardPdtRel}>
      {produtos.map(produto => (
      <div className={style.cardPdt} key={produto.id}>
      <img className={style.imgPdtRel} src={produto.img} />
        <p>{produto.nome}</p>
        <p>R${produto.preco}</p>
      </div>
      ))}
        </div>
    </div>
  )
}
}

export default ProdutosRelacionados;
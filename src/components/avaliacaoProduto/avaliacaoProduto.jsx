import React from 'react'
const data = './public/data/avaliacaoUsuarios.json'

class AvaliacoesProduto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avaliacao: []
    }
  }

  componentDidMount() {
    fetch(data)
      .then(response => response.json())
      .then(data => { this.setState({ avaliacao: data }) })
  }

  render() {
    const { avaliacao } = this.state;

    return (
      <div className='cardInfProduto' id='cardAvaliacaoPdt'>
        <h3 className='titleCardInf'>Avaliações do produto</h3>
        <p><span className='styleBoldTitle'>Nota média do produto:</span>{this.props.avaliacaoMedia}</p>
        {
          avaliacao.map(avaliacaoItem => (
            <div style={{ padding: '5px 0' }} key={avaliacaoItem.id}>
              <ul>
              <li><span className='styleBoldTitle'>Comprador:</span> {avaliacaoItem.usuario}</li>
              <li><span className='styleBoldTitle'>Data avaliação:</span> {avaliacaoItem.data_publicacao}</li>
              <li><span className='styleBoldTitle'>Nota:</span> {avaliacaoItem.nota}</li>
              <li><span className='styleBoldTitle'>Comentário:</span> {avaliacaoItem.mensagem}</li>
                </ul>
            </div>
          ))
        }
      </div>
    );
  }
}

export default AvaliacoesProduto;
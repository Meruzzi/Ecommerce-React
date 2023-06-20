import data from '../../../public/data/perguntasUsuarios.json'

export default function CardPerguntas(props) {
  return (
    <div id='cardPerguntas' className='cardInfProduto'>
        <h3 className='titleCardInf'>Perguntas sobre o produto</h3>
        {data.map(perguntasJson => (
            <div style={{ padding: '5px 0' }} key={perguntasJson.id}>
              <ul>
              <li><span className='styleBoldTitle'>Comprador:</span> {perguntasJson.usuario}</li>
              <li><span className='styleBoldTitle'>Data da pergunta:</span> {perguntasJson.data_publicacao}</li>
              <li><span className='styleBoldTitle'>Pergunta:</span> {perguntasJson.pergunta}</li>
              <li><span className='styleBoldTitle'>Resposta:</span> {perguntasJson.resposta}</li>
                </ul>
            </div>
          ))
        }
      </div>
  )
}
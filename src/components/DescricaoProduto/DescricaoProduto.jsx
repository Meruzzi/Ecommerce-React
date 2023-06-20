export default function DescricaoProduto(props) {

  const btnLerMais = document.querySelector("#btnLerMais")
  const handleClick = () => {
    if (txtOculto.classList.contains("visivel")) {
      txtOculto.classList.remove("visivel");
      btnLerMais.innerText = "Ler mais...";
    } else {
      txtOculto.classList.add("visivel");
      btnLerMais.innerText = "Ocultar";
    }
  }

  return (
    <div id="cardDescricaoPdt"className='cardInfProduto'>
      <h3 className='titleCardInf'>Descrição:</h3>
      <p className='conteudoCardInf'>{props.descricaoProdutoPrev} <span id='txtOculto' className='oculto conteudoCardInf'>{props.descricaoProdutoCompleta}</span></p>
      <p id='btnLerMais' className='btnLerMais' onClick={handleClick}>Ler mais...</p>
    </div>

  )
}
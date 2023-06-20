import './Header.css'

export default function Header() {
  
  const handleClick = () => {
    if (navBar.classList.contains("ativo")) {
      navBar.classList.remove("ativo")
    } else {
      navBar.classList.add("ativo")
    }
  }
  
  return (
    <header id='header'> 
      <img src='./src/img/menu.png' title='Abrir menu' alt='Botão abrir menu' className='btnHeader' id='btnNavBar' onClick={handleClick}/>
      <h1 id='logoStore'>Store</h1>
      <img src='./src/img/cart.png' alt='Carrinho de compras' title='Carrinho de compras' className='btnHeader' id='btnCrr'/>
      <input type={'text'} id='inptSearch' placeholder='Buscar na loja'></input>
      <nav className='navBar' id='navBar'>
      <ul className='navUl'>
        <li className='navItem'>Home</li>
        <li className='navItem'>Produtos</li>
        <li className='navItem'>Contato</li>
        <li className='navItem'>Saiba mais</li>
      </ul>
      </nav>
    </header>
  )
}
import './App.css'
import Header from './components/header/Header.jsx'
import ConteudoProduto from './components/conteudoProduto/conteudoProduto'
import DescricaoProduto from './components/DescricaoProduto/DescricaoProduto.jsx'
import AvaliacoesProduto from './components/avaliacaoProduto/avaliacaoProduto'
import InfVendedor from './components/infVendedor/InfVendedor'
import CardPerguntas from './components/cardPerguntas/cardPerguntas'
import ProdutosRelacionados from './components/produtosRelacionados/produtosRelacionados'
import Footer from './components/footer/footer'

export default function App() {
  return (
    <main>
      <Header />
      <ConteudoProduto imgProduto={'./src/img/frigideira.jpg'} nomeProduto={"Frigideira Walita 1200W BT 7.1 QLED Gamer 95BVG-C2"} title={"Frigideira Walita"} alt={"Frigideira Walita"} precoProdutoAvista={2999.99} precoProdutoPrazo={3499.99} precoProdutoParcelas={499.99} notaProduto={"4.0 (⭐⭐⭐⭐)"}/>
      <div id='especsProduct'>
        <DescricaoProduto descricaoProdutoPrev={"Lorem ipsum dolor sit amet. Nam dolorem veniam aut delectus cumque et commodi modi ut architecto autem id illo quibusdam. Quo rerum quia aut nihil provident sed voluptas voluptates id itaque quae et quis iure non harum dolorem sit nisi deleniti. Ab cumque provident aut tempore consequuntur et deserunt rerum qui laboriosam voluptatem 33 dolores neque est tempora officia. Qui repellendus earum non asperiores molestiae et velit atque est aliquid alias. Eos commodi dolores vel vero asperiores est provident aliquam. Sed optio beatae id culpa debitis qui numquam voluptas! Qui galisum rerum est porro officiis ut perferendis galisum nam tempora vero. Eos sapiente exercitationem aut maiores iusto et minus sint. Aut earum aliquid et quas culpa ab nihil explicabo ut distinctio molestiae a error porro in dolor enim non asperiores exercitationem."} descricaoProdutoCompleta={"Cum laborum cupiditate nam nemo architecto est fugiat aliquam qui Quis deserunt sed doloremque internos eum odit harum est enim repellendus. Eos quae omnis nam doloremque asperiores et rerum dolorem. Id consequuntur consequatur hic minus nisi est enim officiis aut accusantium ipsam. Qui minus facere ut quia dicta est libero soluta eos numquam maiores ut iure minima et labore optio. Non aliquam incidunt est consequatur ipsum est nulla possimus et corporis voluptatem ad quia omnis. Aut quam eligendi ea odit pariatur hic esse quia sed ducimus alias est facilis voluptatem. Et autem omnis a galisum quaerat qui voluptatibus internos. Sed tempore consectetur ut esse commodi ut adipisci totam et dolorem sunt ut excepturi alias qui nesciunt libero. Cum dolor similique 33 voluptas ducimus qui corporis excepturi sit internos inventore est tempore facere qui praesentium sunt aut ipsum autem. Ut voluptatibus ratione et inventore corrupti est dolorum quae qui odit repudiandae non omnis accusamus. Qui odit autem ea esse esse ut error perferendis. Qui laborum fugit ut commodi culpa qui facere quis sed tempore explicabo non unde tenetur qui obcaecati dolorum sed repudiandae sapiente. Ea reiciendis voluptatum ut suscipit ducimus eos voluptatem quaerat a iusto facilis sed consequatur quis."}/>
      <AvaliacoesProduto avaliacaoMedia={" 4.0 (⭐⭐⭐⭐)"}/>
      <CardPerguntas />
      <InfVendedor nomeVendedor={"Thiago"} emailVendedor={"emailvedendor@gmail.com"} telefoneVendedor={"(21)99999-9999"} notaVendedor={"5.0 (⭐⭐⭐⭐⭐)"}/>
      <ProdutosRelacionados />
        </div>
      <Footer />
    </main>
  )
}

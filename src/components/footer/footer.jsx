export default function Footer() {
const styleFooter = {
  display:"absolute",
  bottom:"0",
  display:"flex",
  fontSize: "clamp(0.8rem, 2.0vw, 1.0rem)",
  justifyContent: "space-evenly",
  backgroundColor: "#0086FF",
  padding: "5px"
  
}

  
  return (
    <div id='footer' style={styleFooter}>
    <h4>Todos os direitos reservados ©</h4>
    <h4>Feito por: Gabriel Meruzzi</h4>
    </div>
  )
}
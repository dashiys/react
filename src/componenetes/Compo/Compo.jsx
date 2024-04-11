import { Box, Heredar, GlobalStyle } from './Compo.styles';

const Compo = () => (
  <div>
    <GlobalStyle />
    <Box> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis doloribus quaerat minima dignissimos fugiat fuga eius aliquid provident alias doloremque, tempora voluptas quam sit sunt libero ratione voluptatibus blanditiis veniam.</p></Box>
    <Heredar hola={"red"} />

  </div>
);

export default Compo;



import { useState } from 'react';
import { Respuesta, Titulo, Boton, Img, Container, Back, Letra, Btn } from './Preguntas.styles';
import questions from "./assetsPregu/dataPregu/questions"
import { shuffleArray } from '../utils';

function Preguntas() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  const handleClick = (respuesta) => {
    if (respuesta) {
      if (count == questions.length - 1) {
        setVisible(true)
      }
      else {
        setCount(count + 1)
      }
    }
    else {
      setCount(count == 0 ? 0 : count - 1)
    }
  }


  const question = questions[count]
  return (
    <>
      <Titulo> {question.question} </Titulo>
      <Container>
        <div >
          {shuffleArray(question.answers).map((answer, i) =>
            <Respuesta key={i}>
              <Boton onClick={() => handleClick(answer.isRight)}>x</Boton>
              <p>{answer.txt}</p>
            </Respuesta>
          )}
        </div>
        <div>
          <Img src={question.img} alt="" />
        </div>
      </Container>
      < Back $visible={visible} ><Letra>Has ganado</Letra> <Btn onClick={() => { setCount(0), setVisible(false) }}>Reiniciar</Btn> </Back>
    </>
  )
}

export default Preguntas;

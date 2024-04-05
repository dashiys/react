import "./estilos/estilo.css"
import myImg from './assets/leon_.jpg';

export const Imggs = () => {
    const styles = {
        color: "blue"
    }

    return (
        <>
            <div className="hola">
            </div>
            <div style={styles}>Style Me!</div>
            <img src={myImg} alt="" />
        </>
    )
}

export default Imggs
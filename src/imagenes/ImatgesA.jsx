import imagenes from "./imagenes/Imatges"

const ImatgesA = () => {
    return (
        <div>
            {imagenes.map((obj) =>
                <>
                    <p>{obj.title}</p>
                    <img src={obj.img} alt="" />
                </>
            )}
        </div>
    )
}

export default ImatgesA
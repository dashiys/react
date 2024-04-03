
const Movies = ({ peli }) => {
    return (
        <div>
            <h1> {peli.title}</h1>
            <p>{peli.director}</p>
            <img src={peli.img} alt="" />
        </div>
    )
}
export default Movies;
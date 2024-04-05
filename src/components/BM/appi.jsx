// -------------------------------------------
import Movies from "./components/Movies"
import films from "./data/films.json"
const Appi = () => {
    return (
        <div>
            {films.map((film, i) =>
                <Movies key={i} peli={film} />
            )}
        </div>
    )
}

export default Appi

// ---------------------------------------
// import Book from "./components/Book"
// import data from './data/books.json'

// const App = () => {
//     return (
//         <div>
//             {data.map((libro, i) =>
//                 <Book key={i} book={libro} />
//             )}
//         </div>
//     );
// };

// export default App
// {
//     data.map((libro, i) =>
//         <Book key={i} title={libro.title} author={libro.author} />
//     )
// }
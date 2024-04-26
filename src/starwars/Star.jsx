
const StarWars = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then((data) => {
            setCharacters(data.results);
            console.log(data.results);
        });
    }, []);


    return (
        <Row>

            {characters.map((character) => (
                <Link to={`/profile/${getIdFromUrl(character.url)}`} key={character.name} onClick={() => handleClick(character)}>
                    <Col>
                        <p>{character.name}</p>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(character.url)}.jpg`}
                            alt=""
                        />
                    </Col>
                </Link>
            ))}

        </Row>
    );
};

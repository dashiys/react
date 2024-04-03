import PropTypes from 'prop-types';

const Book = ({ book }) => {

    return (
        <>
            <h4>{book.title}</h4>
            <div>{book.author}</div>
            <br />
        </>
    )
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
};
export default Book;
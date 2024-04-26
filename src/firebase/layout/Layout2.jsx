import { Link } from 'react-router-dom'

const Layout2 = ({ children }) => {
    return (
        <div>
            <h1></h1>
            <nav>
                <ul>
                    <li><Link to="/read">Read</Link></li>
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/delete">Delete</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout2;
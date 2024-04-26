import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ajksdfkjhasdk">Error en la url</Link></li>
                    <li><Link to="/product/1">Producto 1</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from '../pages/Read';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Update from '../pages/Update';

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
        </Routes>
    </BrowserRouter>
}

export default Router
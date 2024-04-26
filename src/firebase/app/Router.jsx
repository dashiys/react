import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout2 from "../layout/Layout2"
import Read from '../layout/Read';
import Create from '../layout/Create';
import Delete from '../layout/Delete';

const Router = () => {
    return <BrowserRouter>
        <Layout2>
            <Routes>
                <Route path="/read" element={<Read />} />
                <Route path="/create" element={<Create />} />
                <Route path="/delete" element={<Delete />} />
            </Routes>
        </Layout2>
    </BrowserRouter>
}

export default Router
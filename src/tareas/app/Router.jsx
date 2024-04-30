import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Home from '../pages/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/tasks' element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
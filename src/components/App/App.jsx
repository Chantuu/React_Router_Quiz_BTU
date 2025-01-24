import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import HomePage from '../../pages/HomePage';
import GalleryPage from '../../pages/GalleryPage';
import ProfilePage from '../../pages/ProfilePage';
import ErrorPage from '../../pages/ErrorPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

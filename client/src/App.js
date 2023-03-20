import { Routes, Route } from 'react-router-dom'
// Pages
import AboutPage from './pages/AboutPage';
import MediaPage from './pages/MediaPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import NewHome from './pages/NewHome';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NewHome />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/media' element={<MediaPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

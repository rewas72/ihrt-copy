import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import EventPage from './page/events/EventPage';
import NewsPage from './page/news/NewsPage';
import Newsletter from './page/newsletter/Newsletter'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path= "events" element={<EventPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="newsletter" element={<Newsletter />} />
        {/* Add other routes as needed */}
      </Route>
    </Routes>
  );
}

export default App;

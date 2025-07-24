import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import EventPage from './page/events/EventPage';
import NewsPage from './page/news/NewsPage';
import Newsletter from './page/newsletter/Newsletter'
import Orders from './page/orders/Orders';
import AboutPage from './page/about/AboutPage';
import ResearchPage from './page/research/ResearchPage';
import ResourcePage from './page/resource/Resource';
import Home from './page/home/Home';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path= "events" element={<EventPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="orders" element={<Orders />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="resources" element={<ResourcePage />} />
        {/* Add other routes as needed */}
      </Route>
    </Routes>
  );
}

export default App;

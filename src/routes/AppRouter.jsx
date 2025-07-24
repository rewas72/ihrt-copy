import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/kimiz', element: <div>Biz Kimiz</div> },
      { path: '/arastirma', element: <div>Araştırma</div> },
      // Diğer sayfa rotaları buraya
    ],
  },
]);

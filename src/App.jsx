import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/About';
import RootLayout from './Pages/Root';
import PortfolioPage from './Pages/Portfolio';
import ContactPage from './Pages/Contact';
import './App.css'


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout/>, 
    children: [
      { path: "/", element: <HomePage />}, 
      { path: "/about", element: <AboutPage />},
      { path: "/portfolio", element: <PortfolioPage/>},
      { path: "/contact", element: <ContactPage/>},
  ]},
  
]);

function App() {

  return <RouterProvider router={router} />
}

export default App;

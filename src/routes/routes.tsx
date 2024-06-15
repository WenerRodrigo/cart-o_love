import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeOne from '../screens/home-one';
import { Home } from '../screens/home';
import { HomeTwo } from '../screens/home-two';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-one" element={<HomeOne />} />
        <Route path="/home-two" element={<HomeTwo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

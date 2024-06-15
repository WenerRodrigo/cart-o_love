import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeOne from '../screens/home-one';
import { Home } from '../screens/home';
import { HomeTwo } from '../screens/home-two';
import { HomeTree } from '../screens/home-tree';
import {HomeFour} from '../screens/home-four';
import { HomeFive } from '../screens/home-five';
import { Presente } from '../screens/presente';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-one" element={<HomeOne />} />
        <Route path="/home-two" element={<HomeTwo/>} />
        <Route path="/home-tree" element={<HomeTree/>} />
        <Route path="/home-four" element={<HomeFour/>} />
        <Route path="/home-five" element={<HomeFive/>} />
        <Route path="/presente" element={<Presente/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

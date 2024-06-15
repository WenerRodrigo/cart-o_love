import { MdOutlineFavorite } from "react-icons/md";
import './home-one.css';

const HomeOne = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-red-300 overflow-hidden">
      <a className="flex items-center text-xl font-bold text-white relative z-10" href="/home-two">
        Clique aqui
        <span className="text-red-500 ml-2">
          <MdOutlineFavorite size={30} />
        </span>
      </a>
      <div className="floating-hearts">
        {[...Array(150)].map((_, i) => (
          <div key={i} className="heart"></div>
        ))}
      </div>
    </div>
  );
};

export default HomeOne;

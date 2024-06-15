import cartao from "../assets/cartao.jpg";
import { MdOutlineFavorite } from "react-icons/md";

export const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <img src={cartao} alt="Cartão" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <a className="flex text-zinc-800 text-xl font-bold" href="/home-one">
            Oii Breeem, Clique aqui
        </a>
        <span className="text-red-500 ml-2"><MdOutlineFavorite size={30}/></span>
      </div>
    </div>
  );
};

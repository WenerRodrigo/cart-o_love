import "./home-one.css";
import ohana from "../assets/ohana.jpg";

export const Presente = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-red-300 overflow-hidden">
      <span className="flex items-center text-xl px-6 text-center font-bold text-white relative z-10">
        Ele vai estar no banco de trás do carro 🥰 Foi o que eu pra comprar,
        mais espero que você goste.
        <br />
        <br />
      </span>
      <div className="w-3/5 flex items-center justify-center flex-col gap-2">
        <img className="rounded-md" src={ohana} alt="Familia" />
        <span className="text-center text-2xl text-red-500 font-bold">
          Ohana ❤️
        </span>
        <span className="text-center text-2xl text-red-500 font-bold">
          EU TE AMO MUITO
        </span>
        <div className="flex itens-center justify-center mt-6">
          <a className="py-3 bg-red-400 rounded-md px-4 text-white font-bold" href="/">Início</a>
        </div>
      </div>
      <div className="floating-hearts">
        {[...Array(150)].map((_, i) => (
          <div key={i} className="heart"></div>
        ))}
      </div>
    </div>
  );
};

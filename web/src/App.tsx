import { MagnifyingGlassPlus } from "phosphor-react";

import logo from "./assets/logo-nlw-esports.svg";

import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Next Level Week Exports Logo" />

      <h1 className="text-6xl text-white font-black mt-16">
        Seu{' '}
        <span className="text-transparent bg-galaxy-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img src={`/game-1.png`} alt="Game 1" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 ">
            <strong className="font-bold text-white block">
              Game 1
            </strong>
            <span className="text-zinc-300 text-sm block">
              1 anúncios
            </span>
          </div>
        </a>

        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img src={`/game-2.png`} alt="Game 2" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 ">
            <strong className="font-bold text-white block">
              Game 2
            </strong>
            <span className="text-zinc-300 text-sm block">
              2 anúncios
            </span>
          </div>
        </a>

        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img src={`/game-3.png`} alt="Game 3" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 ">
            <strong className="font-bold text-white block">
              Game 3
            </strong>
            <span className="text-zinc-300 text-sm block">
              3 anúncios
            </span>
          </div>
        </a>

        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img src={`/game-4.png`} alt="Game 4" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 ">
            <strong className="font-bold text-white block">
              Game 4
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anúncios
            </span>
          </div>
        </a>

        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img src={`/game-5.png`} alt="Game 5" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 ">
            <strong className="font-bold text-white block">
              Game 5
            </strong>
            <span className="text-zinc-300 text-sm block">
              5 anúncios
            </span>
          </div>
        </a>

        <a
          className="relative rounded-lg overflow-hidden"
          href=""
        >
          <img src={`/game-6.png`} alt="Game 6" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 ">
            <strong className="font-bold text-white block">
              Game 6
            </strong>
            <span className="text-zinc-300 text-sm block">
              6 anúncios
            </span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-galaxy-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex items-center gap-3">
            <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App


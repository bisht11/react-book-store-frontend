import { HiDownload } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import bgImg from "../assets/library.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique way of reading and learing</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Online Book Store
          </h1>
          <p className="text-2xl">Download, Rent or Buy.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Explore</button>
        </div>
        <div>
          <img className="w-[80%]" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Sailent Features</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <HiDownload className="h-6 text-indigo-600" /> Weekly Updates
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <FaDatabase className="h-6 text-indigo-600" /> All Genre
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <BiRupee className="h-6 text-indigo-600" /> Cheapest
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <TiTick className="h-6 text-indigo-600" /> Real Content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

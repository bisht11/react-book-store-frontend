import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your knowleage.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nihil quo provident repellat facere hic labore fuga minima tempora
            totam.
          </p>
        </div>

        {/* card container */}
        <div className="grid md:grid-cols-2 ">
          {/* card */}
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm ">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex ">
              ₹499{" "}
                <span className="text-xl text-slate-500 justify-end flex-col ">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              A perfect plan for poeple on budget
            </p>

            <div className="text-2xl">
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Only two bestsellers are available.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Eight genres available for downloading.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Top charts are available.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Upto five free downloads per month.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Two audiobooks every month.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm ">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex ">
              ₹999
                <span className="text-xl text-slate-500 justify-end flex-col ">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              A premium plan with rich features.
            </p>

            <div className="text-2xl">
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Every bestseller is available.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Multiple genres are available.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Every chart is available.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Unlimited downloads.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-8 mr-5 text-green-600" /> 
                Unlimited audiobooks.
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

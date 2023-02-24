import React from "react";
import {
  PhoneIcon,
  SpeakerphoneIcon,
  ArrowNarrowRightIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";
import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] relative text-white mx-auto">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold text-white py-6 text-center">
            Hi, What can we help you with?
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Bookszilla's team is always available to help and assist its
            valuable customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                One on one call session with a customer care executive to solve
                your problems or queries, we try to provide best and the most
                reliable solution as soon as possible.(Note- Only for the people of India.)
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowNarrowRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SpeakerphoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Announcements</h3>
              <p className="text-gray-600 text-xl">
                Check-In to see the latest updated content of this week. Always first to deliver. New genres are being added every month, be the fist one to check them and stand out from the rest.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                What's New <ArrowNarrowRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <AtSymbolIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Email Support</h3>
              <p className="text-gray-600 text-xl">
               Not available for a phone call? We've got you covered, try this new way of resolving your problems, our email suppoort deliveres the best and the most trusted answers for all your questions.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Write Us <ArrowNarrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

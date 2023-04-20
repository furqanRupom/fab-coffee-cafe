import React from 'react';
import bg from "../../../assets/images/coff_img.png";
const Home = () => {
    return (
        <div className=" absolute max-w-7xl w-full top-0">


        <div className="relative bg-gradient-to-l text-white to-[#1f1c45] from-[#db341e]  p-24  h-screen">
               <img
        className="object-cover absolute top-0 right-0  ml-auto"
        src={bg}
        alt=""
      />

      <div>
        <div className=" pr-8 mt-16">
            <div className="text-[7rem] font-bold">
            <h1>FAB</h1>
          <h1 className="-mt-12">COFFEE</h1>

            </div>
          <p className="text-gray-200 leading-relaxed text-lg">
          There are many variations of passages of Loremalteration <br /> in some form, by injected humour, or randomised
          </p>

          <button className="px-10 py-4 text-lg hover:bg-black duration-500 font-bold bg-[#db341e] my-5">
            read more
          </button>
        </div>
      </div>
        </div>

        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import { CafeContext } from '../../providers/AuthProviders';
import coffee1  from '../../assets/images/blog1.jpg'
import coffee2  from '../../assets/images/blog2.jpg'

const Orders = () => {
    const {user} = useContext(CafeContext)
    return (
        <div className="bg-[#1f1c45] my-5 p-5 text-white text-center ">
            <h1 className="text-4xl font-bold ">
            welcome back <span className="text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text">{user.displayName} </span>sir
            </h1>

            <div>
                <h1 className="text-xl font-semibold py-5">
                Available coffee down below
                </h1>

                <section className="flex max-w-xl mx-auto space-x-10">
                    <div className="shadow-2xl my-3 rounded-3xl p-5">
                            <img className="rounded-lg my-4" src={coffee1} alt="" />
                            <h1 className="text-xl font-semibold py-5">
                                Black Coffee
                            </h1>
                            <p className="text-gray-600 leading-relaxed">
                                <span className="text-xl text-red-500">
                                    50$
                                </span>
                                Only
                            </p>
                            <button className="px-7 py-3 rounded-lg bg-red-500 duration-500 hover:bg-black mt-4">
                                Add to Cart
                            </button>
                    </div>
                    <div className="shadow-2xl my-3 rounded-3xl p-5">
                            <img className="rounded-lg my-4" src={coffee2} alt="" />
                            <h1 className="text-xl font-semibold py-5">
                                 Coffee
                            </h1>
                            <p className="text-gray-600 leading-relaxed">
                                <span className="text-xl text-red-500">
                                    90$
                                </span>
                                Only
                            </p>
                            <button className="px-7 py-3 rounded-lg bg-red-500 duration-500 hover:bg-black mt-4">
                                Add to Cart
                            </button>
                    </div>


                </section>
            </div>
        </div>
    );
};

export default Orders;
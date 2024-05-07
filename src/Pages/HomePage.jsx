import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import bg_pic from '../Media/Images/AIV03508.jpg';
import kansas from '../Media/Images/McDonald.png';
import Carousel from '../components/Carousel/Carousel';


const HomePage = () => {
    const navigate = useNavigate();

    const handlePackageClick= (pkg) => {
        navigate("/book");
    }

    return (
        <Layout>

            <div>
                <Carousel />
            </div>

            <div
                className="w-full h-fit py-6 bg-no-repeat bg-cover text-[#680000] font-serif"
                style={{ backgroundImage: `url(${bg_pic})` }}
            >
                {/* Content here if needed */}
                <div className="text-gray-200 text-[4rem] font-extrabold font-serif text-center">
                    <p>Welcome to the Premier Pheasant Hunting</p>
                    <p>Experience in Northwest Kansas!</p>
                </div>

                {/* Location details */}
                <div className="mx-auto mt-12 h-[550px] w-[1000px] font-sans bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${kansas})` }}
                >
                    <div className="ml-36 pt-8 text-[2rem] font-bold text-left">
                        <p>How to find us:</p>
                    </div>
                    <div className="ml-36 w-3/4 leading-none text-xl font-bold text-left">
                        <p className="leading-none mb-6 text-gray-900 font-bold">We are located in the Northwest corner of Kansas, in Rawlins county. McDonald is 38 miles from the Colorado border, just off U.S. Highway 36</p>
                        <p>From the North:</p>
                        <p className="ml-8 w-3/4 text-md text-gray-900">Highway 161 to Bird City then East 9 miles on US 36, or highway 25 to Atwood then West 18 miles on US 36. </p>
                        <p className="mt-4">From the South:</p>
                        <p className="ml-8 w-3/4 text-md text-gray-900">Highway 27 to Wheeler then East 18 miles on US 36, or highway 25 to Atwood then West 18 miles on US 36. </p>
                        <p className="mt-4">From the East:</p>
                        <p className="ml-8 w-3/4 text-md text-gray-900">I-70 to Exit 53 (Colby) then North on hwy 25 39 miles to Atwood and West on US 36 18 miles to McDonald.</p>
                        <p className="mt-4">From the West:</p>
                        <p className="ml-8 pb-8 w-3/4 text-md text-gray-900">I-70 to Exit 17 (Goodland) then North on hwy 27 30 miles to Wheeler and East on US 36 18 miles to McDonald.</p>
                    </div>
                </div>

                {/* Options and Package prices */}
                <div className="mx-auto my-12 w-3/4 text-[4rem] text-gray-400 font-extrabold bg-gradient-to-r from-[#680000] via-orange-100 via-60%">
                    <p className="px-6">Package Options</p>
                </div>

                <div className="flex flex-row justify-center text-[2rem] font-extrabold text-center space-x-12">

                    {/* Basic */}
                    <div className="h-fit w-1/4 pt-1 pb-4 border-4 border-[#680000] rounded-[12px] bg-orange-100">
                        <div className="m-1 py-4 bg-[#680000] rounded-[12px] text-gray-200">
                            <p>Self-Hunt Package</p>
                        </div>
                        <div className="mt-8 text-gray-900">
                            <ul className="text-left ml-10 list-disc text-xl leading-none">
                                <li className="mb-2">Self-guided hunts on owner's property</li>
                                <li className="mb-2">Dogs are not provided; can hunt your own dogs if you desire</li>
                                <li className="mb-2">2 half-day (4hr) hunts</li>
                                <li className="mb-2">4 birds included per hunt</li>
                                <li className="mb-2">Extra birds can be purchased for $30 each</li>
                                <li >Includes cleaning of birds for transport</li>
                            </ul>
                        </div>
                        <p className="mt-16 text-[3rem] text-center">$450 <span className="text-3xl">per person</span></p>
                        <button className="p-2 bg-orange-900 opacity-75 text-gray-200 text-xl w-3/4 rounded-[12px]"
                                onClick ={ handlePackageClick('Self-Hunt') } >Book Hunt</button>
                    </div>

                    {/* Guided */}
                    <div className="h-fit w-1/4 pt-1 pb-4 border-4 border-[#680000] rounded-[12px] bg-orange-100">
                        <div className="m-1 py-4 bg-[#680000] rounded-[12px] text-gray-200">
                            <p>Guided Hunt Package</p>
                        </div>
                        <div className="mt-8 text-gray-900">
                            <ul className="text-left ml-10 list-disc text-xl leading-none">
                                <li className="mb-2">Fully guided hunts on private property</li>
                                <li className="mb-2">Dogs are provided</li>
                                <li className="mb-2">Includes 2 half-day (4hr) hunts</li>
                                <li className="mb-2">4 birds included per hunt</li>
                                <li className="mb-2">Extra birds can be purchased for $30 each</li>
                                <li >Includes cleaning of birds for transport</li>
                            </ul>
                        </div>
                        <p className="mt-[5.5rem] text-[3rem] text-center">$600 <span className="text-3xl">per person</span></p>
                        <button className="p-2 bg-orange-900 opacity-75 text-gray-200 text-xl w-3/4 rounded-[12px]"
                                onClick ={ handlePackageClick('Guided Hunt')} >Book Hunt</button>
                    </div>

                    {/* Deluxe */}
                    <div className="h-fit w-1/4 pt-1 pb-4 border-4 border-[#680000] rounded-[12px] bg-orange-100">
                        <div className="m-1 py-4 bg-[#680000] rounded-[12px] text-gray-200">
                            <p>Deluxe Hunt Package</p>
                        </div>
                        <div className="mt-8 text-gray-900">
                            <ul className="text-left ml-10 list-disc text-xl leading-none">
                                <li className="mb-2">Fully guided hunts on private property</li>
                                <li className="mb-2">Dogs are provided</li>
                                <li className="mb-2">Includes 2 nights lodging, and one dinner at local Steakhouse</li>
                                <li className="mb-2">Includes 3 half-day (4hr) hunts</li>
                                <li className="mb-2">4 birds included per hunt</li>
                                <li className="mb-2">Extra birds can be purchased for $30 each</li>
                                <li >Includes cleaning of birds for transport</li>
                            </ul>
                        </div>
                        <p className="mt-10 text-[3rem] text-center">$1200 <span className="text-3xl">per person</span></p>
                        <button className="p-2 bg-orange-900 opacity-75 text-gray-200 text-xl w-3/4 rounded-[12px]"
                                onClick ={ handlePackageClick('Deluxe Hunt') } >Book Hunt</button>
                    </div>
                </div>

            </div>

    </Layout>
  );
};

export default HomePage

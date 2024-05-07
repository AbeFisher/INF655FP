import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="h-40 bg-[#680000] text-gray-200 grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
            <div className="text-right text-lg pr-4 border-r-2 border-gray-400">
                <p className="text-2xl">BEAVER CREEK UPLAND HUNTS</p>
                <p >15360 Road 3</p>
                <p>McDonald, KS 67745</p>
                <p className="mt-4 text-xs">© 2024 Abraham B. Fisher </p>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <p>Follow us on Facebook</p>
            {/* <FaFacebook /> */}
            <div className="w-12 h-12 rounded-[10px] mt-4 bg-gray-100 flex items-center justify-center">
                <Link 
                    to={"https://www.facebook.com/search/top?q=beaver%20creek%20upland%20hunts"} 
                    target= "_blank" 
                    className="text-5xl text-blue-900">
                    <FaFacebook />
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Footer
import React from 'react';
import header from '../../Media/Images/header4.jpg';
import logo from '../../Media/Images/Logo.png';
import Navbar from '../../components/Navbar/Navbar';

const Header = () => {
    return (
        <div className="sticky top-0">
            <div
            className="w-screen h-72 bg-no-repeat bg-bottom bg-cover relative"
            style={{ backgroundImage: `url(${header})` }}
            >
                {/* Content here if needed */}
                <div className="h-full w-full flex items-center justify-center">
                    <img src={logo} alt="logo" width="550" className="mt-[8rem]"/> 
                </div>
            </div>

            <div className="h-12 w-screen bg-[#680000]"
            >
            <Navbar />
            </div>
        </div>
    );
};

export default Header
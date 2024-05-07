import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from '../components/Layout/Layout';
import bg_pic from '../Media/Images/AIV03508.jpg';


const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        //  Waiting till the back-end auth is ready
        try {
            // const response = await axios.post("http://localhost:4000/auth", {
            //     username,
            //     password,
            // });

            // const { token, role, userID } = response.data;

            // Simulate a auth response from the server
            const { token, role, userID } = ['', 'user', 1];

            // store the token and role in local storage
            localStorage.setItem("authToken", token);
            localStorage.setItem("userRole", role);
            localStorage.setItem("userId", userID);

            // redirect the user to the home page or dashboard
            navigate("/");
        } catch (error) {
            const errorMessage = error.response.data.message;
            setError(errorMessage);
        }
    };

    const inputStyle = "border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-[#680000]/50 text-[1.25rem] font-extrabold"
  
    return (
        <Layout>
            <div
                className="w-full h-full pt-[12rem] bg-no-repeat bg-cover text-[#680000] font-serif flex justify-center"
                style={{ backgroundImage: `url(${bg_pic})` }}
            >
                <div className="w-fit h-[40rem] bg-orange-200 border-4 border-[#680000]/60 rounded-[50px]  
                                px-12 py-6 flex justify-end items-center placeholder-orange-400">


                        {/* Login Form  */}
                        <form onSubmit={handleSubmit} className="login_Form">

                            {/* Top Heading  */}
                            <div className="mb-12">
                                <h2 className="text-center text-4xl font-extrabold text-[#680000]">
                                    Log In
                                </h2>
                            </div>

                            {/* Display error message */}
                            {error && <div className="mb-3 text-red-500">{error}</div>}

                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    className={inputStyle}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="mb-5">
                            <input
                                type="password"
                                placeholder="Password"
                                className={inputStyle}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>

                            {/* Signup Button  */}
                            <div className="my-12 flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#680000] hover:bg-orange-900 w-3/4 text-white text-xl font-bold text-center py-2 rounded-[20px] "
                            >
                                Log in
                            </button>
                            </div>

                            <div>
                            <h2 className="text-[#680000] flex items-center justify-center text-lg font-bold">
                                Don't Have an account?{" "}
                                <Link className=" text-orange-900 text-2xl font-extrabold ml-6" to={"/signup"}>
                                Signup
                                </Link>
                            </h2>
                            </div>
                        </form>
                        </div>


                </div>
        </Layout>
    )
}

export default LoginPage

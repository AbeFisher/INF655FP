import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from '../components/Layout/Layout';
import bg_pic from '../Media/Images/AIV03508.jpg';

const SignupPage = () => {
    const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignupFunction = async () => {

    //  ===============================================================================
    //  Simulated for now, until back-end auth server is running
    //  ===============================================================================

    // validation
    if (
      userSignup.username === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    try {
      // create user object
      const user = {
        username: userSignup.username,
        email: userSignup.email,
        password: userSignup.password, // Make sure to hash the password before saving
        role: userSignup.role,
        time: Date.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      setUserSignup({
        username: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
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

                    {/* Sign up Form  */}
                    <form>

                        {/* Top Heading  */}
                        <div className="mb-12">
                            <h2 className="text-center text-4xl font-extrabold text-[#680000]">
                                Create An Account
                            </h2>
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="userame"
                                className={inputStyle}
                                value={userSignup.username}
                                onChange={(e) => setUserSignup({ ...userSignup, username: e.target.value})}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={inputStyle}
                                value={userSignup.email}
                                onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value})}
                            />
                        </div>

                        <div className="mb-5">
                            <input
                                type="password"
                                placeholder="Password"
                                className={inputStyle}
                                value={userSignup.password}
                                onChange={(e) => setUserSignup({...userSignup, password: e.target.value})}
                            />
                        </div>

                        {/* Signup Button  */}
                        <div className="my-12 flex justify-center">
                            <button
                                type="button"
                                onClick={userSignupFunction}
                                className="bg-[#680000] hover:bg-orange-900 w-3/4 text-white text-xl font-bold text-center py-2 rounded-[20px] "
                            >
                                Sign up
                            </button>
                        </div>

                        <div>
                            <h2 className="text-[#680000] flex items-center justify-center text-lg font-bold">
                                Already have an account?
                                <Link className=" text-orange-900 text-2xl font-extrabold ml-6" to={"/login"}>
                                Log in
                                </Link>
                            </h2>
                        </div>
                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default SignupPage

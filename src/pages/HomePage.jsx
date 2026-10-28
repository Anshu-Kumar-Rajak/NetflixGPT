import { useState, useRef } from "react";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleForm = (e)=>{
    e.preventDefault();


  }
  return (
    <div className="h-screen bg-[url(/home.jpg)] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="absolute top-0 bottom-0 bg-black/50 left-0 right-0"></div>
      <div className="relative z-10 bg-black/70 px-15 py-20 max-w-md w-full rounded-lg">
        <div className="text-white font-bold text-3xl mb-10">
          {isLoggedIn ? "Login" : "Sign Up"}
        </div>
        <form action="" className="flex flex-col gap-8">
          {!isLoggedIn && (
            <input
              type="text"
              className="bg-gray-700 px-5 py-3 rounded-lg text-gray-200"
              placeholder="Enter Your Name"
              ref={name}
            />
          )}
          <input
            type="text"
            className="bg-gray-700 px-5 py-3 rounded-lg text-gray-200"
            placeholder="Enter Your Email"
            ref={email}
          />
          <input
            type="password"
            className="bg-gray-700 px-5 py-3 rounded-lg text-gray-200"
            placeholder="Enter Your Password"
            ref={password}
          />
          <button className="bg-red-600 text-white px-5 py-3 rounded-lg font-semibold cursor-pointer" onClick={handleForm}>
            {isLoggedIn ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;

import { useState, useRef } from "react";
import validateForm from "../utils/validateForm";
import { signupUser, loginUser } from "../services/authService";
import { setUser } from "../features/authSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    console.log("form submitted")

    const formData = {
      name: name.current?.value ?? "",
      email: email.current?.value ?? "",
      password: password.current?.value ?? "",
    };

    const validationErrors = validateForm(formData, isLoggedIn);

    console.log("Form data:", formData);
console.log("Validation errors:", validationErrors);

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // if (!isLoggedIn) {
    //   signupUser(formData.email, formData.password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       dispatch(setUser(user));
    //       setErrors(null);
    //     })
    //     .catch((error) => {
    //       setErrors({
    //         AuthError: {
    //           errorCode: error.code,
    //           errorMessage: error.message,
    //         },
    //       });
    //     });
    // } else {
    //   loginUser(formData.email, formData.password)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       dispatch(setUser(user));
    //       setErrors(null);
    //     })
    //     .catch((error) => {
    //       setErrors({
    //         AuthError: {
    //           errorCode: error.code,
    //           errorMessage: error.message,
    //         },
    //       });
    //     });
    // }

    if (!isLoggedIn) {
      signupUser(formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("Signup successful!");
          console.log("User UID:", user.uid);
          console.log("User Email:", user.email);

          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            }),
          );

          setErrors(null);
        })
        .catch((error) => {
          console.error("Signup failed!");
          console.error("Error code:", error.code);
          console.error("Error message:", error.message);

          setErrors({
            AuthError: {
              errorCode: error.code,
              errorMessage: error.message,
            },
          });
        });
    }
  };

  const toggleBtn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="h-screen bg-[url(/home.jpg)] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="absolute top-0 bottom-0 bg-black/50 left-0 right-0"></div>
      <div className="relative z-10 bg-black/70 px-15 py-20 max-w-md w-full rounded-lg">
        <div className="text-white font-bold text-3xl mb-10">
          {isLoggedIn ? "Login" : "Sign Up"}
        </div>
        <form onSubmit={handleForm} className="flex flex-col gap-5">
          {!isLoggedIn && (
            <div className="flex flex-col gap-1">
              <input
                type="text"
                className="bg-gray-700 px-4 py-3 rounded-lg text-gray-200 w-full outline-none focus:border-blue-500 focus:ring-2   focus:ring-blue-400/80"
                placeholder="Enter Your Name"
                ref={name}
              />

              {errors?.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-1">
            <input
              type="text"
              className="bg-gray-700 px-4 py-3 rounded-lg text-gray-200 w-full outline-none focus:border-blue-500 focus:ring-2   focus:ring-blue-400/80"
              placeholder="Enter Your Email"
              ref={email}
            />

            {errors?.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="password"
              className="bg-gray-700 px-4 py-3 rounded-lg text-gray-200 w-full outline-none focus:border-blue-500 focus:ring-2   focus:ring-blue-400/80"
              placeholder="Enter Your Password"
              ref={password}
            />

            {errors?.password &&
              (Array.isArray(errors.password) ? (
                <ul className="text-red-500 text-sm list-disc pl-5 space-y-1">
                  {errors.password.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-red-500 text-sm">{errors.password}</p>
              ))}
          </div>

          {errors?.AuthError && (
            <p className="text-red-500 text-sm">
              {errors.AuthError.errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-5 py-3 rounded-lg font-semibold cursor-pointer w-full mt-2"
          >
            {isLoggedIn ? "Login" : "Sign Up"}
          </button>

          <p className="text-white text-sm mt-1">
            {isLoggedIn ? (
              <>
                New to NetflixGPT?{" "}
                <span
                  className="text-gray-300 hover:text-white cursor-pointer"
                  onClick={toggleBtn}
                >
                  Sign Up Now
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span
                  className="text-gray-300 hover:text-white cursor-pointer"
                  onClick={toggleBtn}
                >
                  Sign In
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import { useContext } from "react";
import { CafeContext } from "../../providers/AuthProviders";
import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
  const { signUpUser ,setUserName} = useContext(CafeContext);
  const [error, setError] = useState("");
  const handleUserSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if (password != confirmPassword) {
      setError("password did not matched!");
      return;
    }
    if (!/.*[A-Z]/.test(password)) {
      setError("At least one uppercase should be in password");
      return;
    } else if (!/.*[!@#$&*]/.test(password)) {
      setError("At Least one special Character should be in password");
      return;
    } else if (!(password.length >= 8)) {
      setError("Password length should be 8");
      return;
    }
    console.log(name, email, password);
    signUpUser(email, password)
      .then((result) => {
        setError("");
        console.log(result.user);
        setUserName(result.user,name)
        form.reset();
      })
      .catch((error) => console.log(error.message));


    }
  return (
    <div className="bg-[#1f1c45]  mt-4">
      <h1 className="text-7xl font-bold text-white text-center pt-12">
        Sign Up
      </h1>

      <form
        onSubmit={handleUserSignUp}
        className="flex flex-col space-y-4 py-8 px-12 max-w-xl mx-auto my-12"
        action=""
      >
        <input
          required
          className="px-2 py-3 rounded placeholder:text-black text-lg"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          required
          className="px-2 py-3 rounded placeholder:text-black text-lg"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          required
          className="px-2 py-3 rounded placeholder:text-black text-lg"
          type="password"
          name="password"
          placeholder="Your Password"
        />
        <input
          required
          className="px-2 py-3 rounded placeholder:text-black text-lg"
          type="password"
          name="confirm"
          placeholder="Confirm Your Password"
        />
        {error && <p className="text-red-500 text-xl">{error}</p>}
        <button
          type="submit"
          className="px-7 py-3 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 duration-500"
        >
          Sign up
        </button>
        <p className="text-center text-white">
          Already have an account please <Link className="text-red-500" to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

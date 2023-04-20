import React, { useContext, useState } from "react";
import { CafeContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { LoaderIcon, Toaster } from 'react-hot-toast';

const Login = () => {
  const { signInUser ,resetPassword} = useContext(CafeContext);
  const [error, setError] = useState("");
  const [email,setEmail]= useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || '/'


  const handleUserSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    setEmail(email)
    signInUser(email,password)
    .then(result => {
        setError('')
        console.log(result.user)
        form.reset();
        navigate(from,{replace:true})
    })
    .catch(error => setError(error.message))
  };

  const handleResetPassword = ()=>{
    resetPassword(email)
    .then(result =>{
      toast('Reset Password is send check your email')
    })
    .catch(error => setError(error.message))
  }

  return (
    <div className="bg-[#1f1c45]  mt-4">
      <h1 className="text-7xl font-bold text-white text-center pt-12">
        Sign In
      </h1>

      <form
        onSubmit={handleUserSignIn}
        className="flex flex-col space-y-4 py-8 px-12 max-w-xl mx-auto my-12"
        action=""
      >

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
        <button onClick={handleResetPassword} className="text-red-500 w-fit mx-auto py-3 font-semibold hover:underline">Forget Password ?</button>
        {error && <p className="text-red-500 text-xl">{error}</p>}
        <button
          type="submit"
          className="px-7 py-3 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 duration-500"
        >
          Sign In
        </button>
        <p className="text-white text-center">
        New to Fab cafe ?<Link className="text-red-500" to="/register">
           Sign up
        </Link>
        </p>

      </form>
      <Toaster />
    </div>
  );
};

export default Login;

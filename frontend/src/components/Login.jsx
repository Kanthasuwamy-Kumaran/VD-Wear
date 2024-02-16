// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'


// const Login = () => {

//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (event) => {
//         let name = event.target.name
//         let value = event.target.value
//         setUser({ ...user, [name]: value })
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { email, password } = user;
//         if (!email || !password) {
//             window.alert("Please fill out both email and password fields");
//             return;
//         }
//         try {
//             const res = await fetch('http://localhost:3001/api/user/login', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     email, password
//                 })
//             });

//             if (res.status === 400 || !res) {
//                 window.alert("Invalid Credentials")
//             } else {
//                 window.alert("Login Successfull");
//                 //window.location.reload();
//                 navigate('/avatardemo')
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div>


//             <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//                 <div className="bg-white p-3 rounded w-25">
//                     <h2>Login</h2>
//                     <form onSubmit={handleSubmit}>

//                         <div className="mb-3">
//                             <label htmlFor="email">
//                                 <strong>Email</strong>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter Email"
//                                 autoComplete="off"
//                                 name="email"
//                                 value={user.email}
//                                 onChange={handleChange}
//                                 className="form-control rounded-0"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="email">
//                                 <strong>Password</strong>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter Password"
//                                 autoComplete="off"
//                                 name="password"
//                                 value={user.password}
//                                 onChange={handleChange}
//                                 className="form-control rounded-0"
//                             />
//                         </div>

//                         <button type="sumbit" className="btn btn-success w-100 rounded-0">
//                             Login
//                         </button>
//                     </form>
//                     <p>Don't Have an Account</p>

//                     <Link to="/Register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                         Register
//                     </Link>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Login;

import "../assets/css/loginstyle.css";
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';



const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const loginUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        window.alert("Error Logging in");
        toast.error('Error Logging in');
        throw new Error('Error logging in');
      }
      const data = await response.json();
      console.log(data);
      localStorage.setItem('UserInfo', JSON.stringify(data));
      toast.success('Login successful');
      handleSuccess(data.message, data.role);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(formState);
      console.log(data);
    } catch (error) {
      toast.error('Error logging in');
      console.error(error);
    }
  };
  const handleSuccess = (message, role) => {
    setTimeout(() => {
      if (role === 'admin') {
        window.alert("Admin Login Successfully");
        // Redirect to the admin panel
        navigate('/admin');
      } else {
        window.alert("Login Successfully");
        // Redirect to the normal user landing page
        navigate('/avatardemo');
      }
    }, 5000);
  };
    return (
        <>
            <section>
                <div className="form-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleFormSubmit }>
                    <div className="form-control1">
                        <input 
                            name="email" 
                            value={formState.email}
                            onChange={handleInputChange}
                            type="text" required/>

                        <label>Email or phone number</label>
                    </div>
                    <div className="form-control1">
                        <input 
                            name="password" 
                            value={formState.password}
                            onChange={handleInputChange}
                            type="password" required/>

                        <label>Password</label>
                    </div>
                    <button className='button1' type="submit">Login</button>
                    <div className="form-help">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                </form>

                <p>New to VD-Wear
                    <Link to="/Register"> Register </Link>
                </p>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <a href="#">Learn more.</a>
                </small>
                </div>
            </section>
        </>
    )
}
export default Login;


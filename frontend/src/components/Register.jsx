// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const Register = () => {

//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     // Handle Inputs
//     const handleInput = (event) => {
//         let name = event.target.name;
//         let value = event.target.value;

//         setUser({ ...user, [name]: value });
//     }

//     // Handle Submit
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { name, email, password } = user;
//         // console.log("Request Body:", { name, email, password });
//         try {
//             const res = await fetch('http://localhost:3001/api/user/register', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name, email, password
//                 })
//             });

//             if (res.status === 400 || !res) {
//                 window.alert("Already Registered");
//                 navigate('/login')
//             } else {
//                 window.alert("Registered Successfully");
//                 navigate('/login')
//             }
//         } catch (error) {
//             console.error('Error in fetch request:', error);
//         }
//     }

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit} method="POST">
//                     <div className="mb-3">
//                         <label htmlFor="email">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Name"
//                             autoComplete="off"
//                             name="name"
//                             value={user.name}
//                             onChange={handleInput}
//                             className="form-control rounded-0"
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter Email"
//                             autoComplete="off"
//                             name="email"
//                             value={user.email}
//                             onChange={handleInput}
//                             className="form-control rounded-0"
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="email">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             autoComplete="off"
//                             name="password"
//                             value={user.password}
//                             onChange={handleInput}
//                             className="form-control rounded-0"
//                         />
//                     </div>

//                     <button type="sumbit" className="btn btn-success w-100 rounded-0">
//                         Register
//                     </button>
//                 </form>
//                 <p>Already Have an Account</p>
//                 <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Login
//                 </Link>

//             </div>
//         </div>
//     )
// }

// export default Register;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/loginstyle.css";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '' 
  });

  const registerUser = async (userData) => {
    
    try {
      const response = await fetch('http://localhost:3001/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) {
        toast.error('User allready exist');
        throw new Error('Error Registation');
      }
      else{
        window.alert("Registered Successfully");
        navigate('/login')
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
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
      const data = await registerUser(formState);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <div className="form-wrapper">
          <h2>Register</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control1">

              <input 
                name="name" 
                value={formState.name}
                onChange={handleInputChange}
                type="text" required />

              <label>Username</label>
            </div>
            <div className="form-control1">

              <input 
                name="email" 
                value={formState.email}
                onChange={handleInputChange}
                type="text" required />

              <label>Email</label>

            </div>
            <div className="form-control1">
              <input
              
                name="password"
                value={formState.password}
                 onChange={handleInputChange}
                type="password" required />

              <label>Password</label>
            </div>
            <button className='button1' type="submit">Register</button>
          </form>
          <p>Already to VD-Wear
            <Link to="/login"> Login </Link>
          </p>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#">Learn more.</a>
          </small>
        </div>
      </section>
    </>
  );
}

export default Register;
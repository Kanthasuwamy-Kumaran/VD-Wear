import React, { useState } from 'react';
import '../assets/css/company registration.css';
import {useNavigate } from 'react-router-dom';

export default function CompanyRegistration() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    onwername: '',
    onweraddress: '',
    onwerphonenumber: '',
    onweremail: '',
    shopname: '',
    shopaddress: '',
    shopphonenumber: '',
    shopwebsiteURL: ''
  });

  const registerShop = async (userData) => { 
    try {
      const response = await fetch('http://localhost:3001/api/user/shopregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error('Error Registration');
      }
      else{
        window.alert("Shop Registered Successfully");
        navigate('/')
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
      const data = await registerShop(formState);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='registration-body'>
        <div className="container2">
          <header>Registration</header>

          <form onSubmit={handleFormSubmit}>
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>

                <div className="fields">
                  <div className="input-field">
                    <input
                      name='onwername'
                      value={formState.onwername}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name='onweraddress'
                      value={formState.onweraddress}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your address"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name='onwerphonenumber'
                      value={formState.onwerphonenumber}
                      onChange={handleInputChange}
                      type="number"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name='onweremail'
                      value={formState.onweremail}
                      onChange={handleInputChange}
                      type="email"
                      placeholder=" Enter your email"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name='shopname'
                      value={formState.shopname}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your shop name "
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name='shopaddress'
                      value={formState.shopaddress}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your shop address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="details ID">
                <span className="title">Identity Details</span>

                <div className="fields">
                  <div className="input-field">
                    <input
                      name='shopphonenumber'
                      value={formState.shopphonenumber}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your shop mobile number"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <input
                      name='shopwebsiteURL'
                      value={formState.shopwebsiteURL}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your websiteURL"
                      required
                    />
                  </div>

                  {/* <div className="input-field">
                    <input type="text" placeholder="Enter issued authority" required />
                  </div> */}
                </div>

                <button type="submit" className="nextBtn">
                  <span className="btnText">Submit</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

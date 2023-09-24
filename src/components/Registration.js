import React, {useState} from 'react';
import axios from 'axios';
import { SuccsessfullyPopup } from './popup/SuccsessfullyPopup';
import { useNavigate } from 'react-router-dom';

import '../App.scss';


export const Registration = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccsessPopup, setShowSuccsessPopup] = useState(false);
  
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
    });
  
    const handleChange = event => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
  
      axios
        .post('http://localhost:4003/api/records', formData)
        .then(response => {
          console.log(response.data);
  
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
          });
  
          setIsLoading(true); 
          setTimeout(() => {
            setIsLoading(false); 
            setShowSuccsessPopup(true); 
            setTimeout(() => {
                setShowSuccsessPopup(false); 
                navigate('/movies'); 
            }, 2000);
        }, 1500);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
  return (
    <>
        <div className='registration-container'>
            <h2>Registration for a session </h2>
            <form className='register-form' method='post' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName"><strong>First Name:<sup>*</sup></strong></label>
                    <input 
                        id="firstName" 
                        name='firstName' 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName"><strong>Last Name:<sup>*</sup></strong></label>
                    <input 
                        id="lastName"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber"><strong>Enter your phone number:<sup>*</sup></strong></label>
                    <input 
                        type='tel' 
                        id="phoneNumber" 
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className='send-form-button-container'>
                  <button type='submit' className='send-button'>Send</button>
                </div>
            </form>
            {isLoading && (
              <div class="loader-container">
                <div class="loader">
                  <div class="circle"></div>
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </div>
           )}
        </div>   
        {showSuccsessPopup && <SuccsessfullyPopup />}  
    </>
  )
}

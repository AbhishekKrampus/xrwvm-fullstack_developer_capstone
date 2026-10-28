import React, { useState } from 'react';
import './Register.css';
import Header from '../Header/Header';

const Register = ({ onClose }) => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(true);

  const registerUrl = `${window.location.origin}/djangoapp/register`;

  const register = async (e) => {
    e.preventDefault();
    const payload = {
      userName,
      firstName,
      lastName,
      email,
      password,
    };
    const res = await fetch(registerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (json.status && json.status === 'Registered') {
      // After successful registration, optionally log in the user
      sessionStorage.setItem('username', json.userName || userName);
      setOpen(false);
    } else {
      alert('Registration failed: ' + (json.message || 'Unknown error'));
    }
  };

  if (!open) {
    window.location.href = '/';
    return null;
  }

  return (
    <div>
      <Header />
      <div onClick={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className='modalContainer'
        >
          <form className='register_panel' onSubmit={register}>
            <div className='input'>
              <span className='input_field'>Username </span>
              <input
                type='text'
                name='username'
                placeholder='Username'
                className='input_field'
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className='input'>
              <span className='input_field'>First Name </span>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                className='input_field'
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='input'>
              <span className='input_field'>Last Name </span>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                className='input_field'
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className='input'>
              <span className='input_field'>Email </span>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input_field'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input'>
              <span className='input_field'>Password </span>
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='input_field'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='submit_panel'>
              <input className='action_button' type='submit' value='Register' />
              <input className='action_button' type='button' value='Cancel' onClick={() => setOpen(false)} />
            </div>
            <a className='loginlink' href='/login'>Already have an account? Login</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

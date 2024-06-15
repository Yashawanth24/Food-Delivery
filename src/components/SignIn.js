import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './cartContext';

const SignIn = () => {
  const { totalPrice } = useContext(CartContext);
  const navigator = useNavigate();
  console.log(totalPrice);
  const [password ,setpassword]=useState('')
  const [username ,setusername]=useState('')

  const handleusername=(e)=>{
 setusername(e.target.value);
  }
  const handlePassword=(e)=>{
setpassword(e.target.value)
  }
  
  const handleSingIn=()=>{
    if(username==='Demo123' && password==='Demo@321'){
      navigator('/');}
      else{
 alert('Invalid UserName Or Password')
      }
    }
  

  return (
    <div style={{ position: 'relative', height: '78vh', backgroundColor: '#f0f0f0' }}>
      <form
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          width: '25%',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
        }}
      >
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Sign In</h1>
        <input
          type="text"
          placeholder="E-mail Address"
          value={username}
          onChange={handleusername}
          style={{
            padding: '1rem',
            margin: '1rem 0',
            width: '100%',
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
            borderRadius: '10px',
            border: 'none'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          style={{
            padding: '1rem',
            margin: '1rem 0',
            width: '100%',
            backgroundColor: 'rgba(128, 128, 128, 0.5)',
            borderRadius: '10px',
            border: 'none'
          }}
        />
        <h1>UserName: Demo123</h1>
        <h1>Password: Demo@321</h1>
        <button type="button"
          style={{
            padding: '1rem',
            margin: '1rem 0',
            width: '100%',
            backgroundColor: "orange",
            borderRadius: '10px',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontWeight: "700",
          }}
          
          onClick = {handleSingIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
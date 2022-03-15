import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";

const SignupForm =() => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError]= useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = () => {
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };


  return (
    <div className='flex flex-col justify-center items-center h-screen gap-8'>
        <h1>SIGNUP</h1>
        <div className="flex flex-col gap-2">
            <TextField label='Email' className='w-80' type='email' required
            helperText={emailError && 'Please eneter a valid email'} onChange={(e)=> setEmail(e.target.value)} error={emailError} />
            <TextField label="Password" className='w-80' required  helperText={passwordError && 'Passwrod may not be empty'} onChange={(e)=>setPassword(e.target.value)} />
         
        </div>
        <Button className='w-80' variant='contained' onClick={handleSignup}>Signup</Button>
        <Link to="/login">Login</Link>
   
    </div>
  )
}

export default SignupForm;

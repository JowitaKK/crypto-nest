import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../../apis/auth.api";
import { useCreateUserMutation } from "../../../apis/users.api";
import { useAppDispatch } from "../../../app/hooks";
import { setAuthState } from "../../../slices/auth.slice";
import { User } from "../../../models/User";

const SignupForm =() => {

  const [createUser] = useCreateUserMutation();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError]= useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
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
    try {
      await createUser({email, password});
      const response = (await login({email, password})) as {data: User};
      dispatch(setAuthState({ user: response.data}));
      navigate('/');
    } catch (err) {
      console.error(err);
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

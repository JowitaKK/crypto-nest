import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../app/hooks';
import { useLoginMutation } from '../../../apis/auth.api';
import { User } from '../../../models/User';
import { setAuthState } from '../../../slices/auth.slice';


const LoginForm =() => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError]= useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = async () => {
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
      const response = (await login({ email, password })) as { data: User };
      dispatch(setAuthState({ user: response.data }));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-8'>
        <h1>LOGIN</h1>
        <div className="flex flex-col gap-2">
            <TextField label='Email' className='w-80' type='email' required helperText={emailError && 'give me your email'} error={emailError} onChange={(e)=>setEmail(e.target.value) } />
            <TextField label="Password" className='w-80' required helperText={passwordError && 'Passwor not empty'} error={passwordError} onChange={(e)=>setPassword(e.target.value) } />
        </div>
        <Button className='w-80' variant='contained' onClick={handleLogin}>Login</Button>
        <Link to="/signup">
        Login
        </Link>
    </div>
    )
  }


export default LoginForm; 

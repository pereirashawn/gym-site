import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'



function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();

        const credentials = {
            email : email,
            password : password
        }

        const result = await fetch('/api/login', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
          })
        
        const authMessage = await result.json();
        console.log(authMessage)
        setEmail('');
        setPassword('');

    }

    return (
        <>
            
            <div className='login'>
                <Link to="/" className='login-logo'>
                    BeFit <i className="fas fa-dumbbell"></i>
                </Link>

                <div className='login-container'>
                    <h1>LOGIN</h1>
                    <form onSubmit={handleLogin} method='post'>
                        <h5>Email</h5>
                        <input type='text' required
                        value={email} 
                        onChange={e => setEmail(e.target.value)}>
                        </input>

                        <h5>Password</h5>
                        <input type='password' required
                        value={password}
                        onChange={e => setPassword(e.target.value)}>  
                        </input>

                        <button type='submit' className='login-button'>LOGIN</button>

                        <p>Do not have an account yet? <Link to='/signup' className='signup-link'>Signup</Link></p>
                
                        

                    </form>
                </div>
                
            </div> 
        </>
    )
}

export default Login

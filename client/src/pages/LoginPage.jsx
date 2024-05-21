import {Link} from "react-router-dom";
import {useState} from 'react';
//const axios=require('axios');
export default function LoginPage(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            //axios.post('/login', {email,password},);
            //alert('Login Successful');
            const response = await axios.post('/login', { email, password });
            if (response.data.success) { // Assuming your server responds with a success flag
                alert('Login Successful');
            } else {
                alert('Login Failed');
            }
        }
        catch(e){
            alert('Login Failed');
        }
        
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center">Login</h1>
            <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                <input type="email" placeholder='Your@gmail.com'
                value={email} 
                onChange={ev=> setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" 
                value={password} 
                onChange={ev=> setPassword(ev.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account Yet?
                    <Link className="underline text-border" to={'/register'}>Register here</Link>
                </div>
            </form>
            </div>
            
        </div>
    )
}

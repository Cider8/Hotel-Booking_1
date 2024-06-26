import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            });
            alert('Registration Successful,Now you can login');
        }
        catch(e){
            alert('Registration failed. Try again later');
        }
        
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center">Register</h1>
            <form className="max-w-md mx-auto">
                <input type="name" placeholder="Enter Your Name" 
                    value={name} 
                    onChange={ev=> setName(ev.target.value)}/>
                <input type="email" placeholder='Your@gmail.com' autoComplete="username"  
                    value={email}
                    onChange={ev=> setEmail(ev.target.value)}/>

                <input type="password" placeholder="password" autoComplete="current-password" 
                    value={password} 
                    onChange={ev=> setPassword(ev.target.value)}/>

                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member?
                    <Link className="underline text-border" to={'/login'}>Login</Link>
                </div>
            </form>
            </div>
            
        </div>
    )
}
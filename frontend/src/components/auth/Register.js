import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css'

function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('/register', { name, email, password });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    </div>
    );
  }


export default RegistrationForm;
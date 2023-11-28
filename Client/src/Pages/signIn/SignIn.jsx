import "./signIn.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    
    const handleChange = (e) => 
        {
            setFormData({
                ...formData,
                [e.target.id] : e.target.value,
            });
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
            setLoading(true);
            const res = await fetch('api/auth/signin',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            if (data.success === false){
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            Navigate('/');
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
            
            
        };
        console.log(formData)

return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} className="log-in">
                <input onChange={handleChange} type="text" placeholder="Email" id='email'/>
                <input onChange={handleChange} type="password" placeholder="Password" id='password'/>
                <button className='sign-in-btn' disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
                <button className='sign-google-btn'>CONTINUE WITH GOOGLE</button>
            </form>
            <div className='no-account'>
               <p>Dont have an account?</p>
               <Link to={'/Sign-up'} className='Sign-Up'>Sign Up</Link>
            </div>
            {error && <p className='error-signIn'>{error}</p>}
        </div>
    )
}

export default SignIn;
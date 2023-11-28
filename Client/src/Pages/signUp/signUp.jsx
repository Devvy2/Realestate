import './signUp.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
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
            const res = await fetch('api/auth/signup',
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
            Navigate('/sign-in');
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
            
            
        };
        console.log(formData)

return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="sign-up">
                <input onChange={handleChange} type="text" placeholder="Username" id='username' />
                <input onChange={handleChange} type="text" placeholder="Email" id='email'/>
                <input onChange={handleChange} type="password" placeholder="Password" id='password'/>
                <button className='sign-up-btn' disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>
                <button className='sign-google-btn'>CONTINUE WITH GOOGLE</button>
            </form>
            <div className='have-account'>
               <p>Have an account?</p>
               <Link to={'/Sign-in'} className='Sign-in'>Sign in</Link>
            </div>
            {error && <p className='error-signUp'>{error}</p>}
        </div>
    )
}

export default SignUp;
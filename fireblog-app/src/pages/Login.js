import React, {useState, useContext} from 'react';
import { continueWithGoogle, logIn } from '../helpers/firebase';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const user = {email, password};

        logIn(user.email, user.password);
        history.push('/');
    }

    const handleProviderRegister = () => {
        continueWithGoogle();
        history.push('/');
    }

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to = "/" />
    }

    return (
        <div className="Login_container">
            
            <div className="form_container">
                <form action="" className="Login_form">
                    <div className="form_image"></div>
                    <h1 className="form_header">LOGIN</h1>
                    <input type="text" className="form_input" placeholder ="Enter your email address..."/>
                    <input type="text" className="form_input" placeholder ="Enter your password..."/>
                    <button className="form_button" onClick={handleSubmit}>LOGIN </button>
                    <button className="form_button"  onClick={handleProviderRegister}>Continue with <img className="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="" /></button>

                </form>

            </div>
        </div>
    )
}

export default Login

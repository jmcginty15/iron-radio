import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/users';
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const errMessage = useSelector(state => state.users.errMessage);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(login(formData.username, formData.password));
    }

    return (
        <div className="LoginForm">
            <h3 className="LoginForm-title">Admin Login</h3>
            <form className="LoginForm-form" onSubmit={handleSubmit}>
                <label className="LoginForm-label" htmlFor="username">Username:</label><br />
                <input className="LoginForm-input" name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} /><br />
                <label className="LoginForm-label" htmlFor="password">Password:</label><br />
                <input id="LoginForm-input-bottom" className="LoginForm-input" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                {errMessage && <div className="LoginForm-alert"><em>{errMessage}</em></div>}
                <button className="LoginForm-button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
import { useDispatch } from 'react-redux';
import { logout } from '../actions/users';
import './UploadSuccessful.css';

const UploadSuccessful = ({ setSuccess }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        setSuccess(false);
        dispatch(logout());
    }

    return (
        <div className="UploadSuccessful">
            <h1 className="UploadSuccessful-title">Upload Successful</h1>
            <button className="UploadSuccessful-button" onClick={() => setSuccess(false)}>Upload another episode</button>
            <button className="UploadSuccessful-button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default UploadSuccessful;
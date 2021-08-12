import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UploadForm from './UploadForm';
import { clearUploaded } from '../actions/episodes';
import './Backend.css';

const Backend = () => {
    useDispatch()(clearUploaded());
    const loggedInUser = useSelector(state => state.users.loggedInUser);

    return (
        <div className="Backend">
            {loggedInUser ? <UploadForm /> : <LoginForm />}
        </div>
    )
}

export default Backend;
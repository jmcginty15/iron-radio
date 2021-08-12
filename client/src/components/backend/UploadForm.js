import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RssFeed from '../../RssFeed';
import { parseInfo } from '../utils';
import { upload, addToFeed, clearUploaded } from '../actions/episodes';
import { logout } from '../actions/users';
import UploadSuccessful from './UploadSuccessful';
import './UploadForm.css';

const UploadForm = () => {
    const dispatch = useDispatch();
    const feed = useSelector(state => state.rss.feed);
    const uploaded = useSelector(state => state.episodes.uploaded);
    const loggedInUser = useSelector(state => state.users.loggedInUser);
    const latest = RssFeed.getFrom(feed);
    const { episodeNum } = parseInfo(latest[0].title);
    const [formData, setFormData] = useState({
        episodeNum: episodeNum + 1,
        guests: '',
        topic: '',
        description: ''
    });
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (file) dispatch(upload(file));
    }, [file]);

    const handleChange = (evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value });
    const handleFileChange = (evt) => {
        const fileList = evt.target.files;
        if (fileList.length) setFile(fileList[0]);
        else {
            setFile(null);
            dispatch(clearUploaded());
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (uploaded) {
            const { episodeNum, guests, topic, description } = formData;
            const { filename, length } = uploaded;
            dispatch(addToFeed(episodeNum, guests, topic, description, filename, length, loggedInUser._token));
            dispatch(clearUploaded());
            setFormData({
                episodeNum: episodeNum + 1,
                guests: '',
                topic: '',
                description: ''
            });
            setSuccess(true);
        }
    }

    return success ? <UploadSuccessful setSuccess={setSuccess} /> : (
        <div className="UploadForm">
            <h3 className="LoginForm-title">Upload an Episode</h3>
            <form className="UploadForm-form" onSubmit={handleSubmit}>
                <label className="UploadForm-label" htmlFor="episodeNum">Episode number:</label>&emsp;
                <input id="UploadForm-input-number" className="UploadForm-input" type="number" min="1" name="episodeNum" value={formData.episodeNum} onChange={handleChange} /><br />
                <label className="UploadForm-label" htmlFor="file">File:</label>&emsp;{uploaded && <i id="UploadForm-check" className="fa fa-check-circle" aria-hidden="true" />}
                <input className="UploadForm-input" type="file" onChange={handleFileChange} /> <br />
                <label className="UploadForm-label" htmlFor="guests">Guests:<br /><span className="UploadForm-detail"><em>comma-separated list, or leave empty if no guests</em></span></label><br />
                <input className="UploadForm-input" type="text" name="guests" placeholder="Guest1, Guest2, Guest3, ..." value={formData.guests} onChange={handleChange} />
                <label className="UploadForm-label" htmlFor="topic">Topic:</label><br />
                <input className="UploadForm-input" type="text" name="topic" placeholder="Topic" value={formData.topic} onChange={handleChange} />
                <label className="UploadForm-label" htmlFor="description">Description:</label><br />
                <textarea className="UploadForm-input" rows="5" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <button className={uploaded ? `UploadForm-button` : `UploadForm-button-inactive`} type="submit">Submit</button>
            </form>
            <button className="UploadForm-logout" type="button" onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}

export default UploadForm;
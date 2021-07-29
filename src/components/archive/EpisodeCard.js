import { parseInfo, formatDate } from '../utils';
import { setActiveEpisode } from '../actions/episodes';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './EpisodeCard.css';

const EpisodeCard = ({ episode }) => {
    const activeEpisode = useSelector(state => state.episodes.active);
    const dispatch = useDispatch();
    const [descriptionShown, setDescriptionShown] = useState(false);
    const { title, published, description } = episode;
    const { eVe, episodeNum, topic, guests } = parseInfo(title);
    const date = formatDate(new Date(published));

    const handleClick = () => setDescriptionShown(!descriptionShown);

    return (
        <div className="EpisodeCard">
            <div className="EpisodeCard-container">
                <div className="EpisodeCard-left">
                    <h5 className="EpisodeCard-title">{eVe && 'Experiments vs Experience 2.0 '}Episode {episodeNum}</h5>
                    <p className="EpisodeCard-title">{date}</p>
                </div>
                <div className="EpisodeCard-right">
                    {guests && <h6 className="EpisodeCard-subtitle">{guests.length > 1 ? 'Guests:' : 'Guest:'} {guests.length ? guests.join(', ') : 'None'}</h6>}
                    {topic && <h6 className="EpisodeCard-subtitle">Topic: {topic}</h6>}
                </div>
            </div>
            {descriptionShown && <div>{description}</div>}
            <div className="EpisodeCard-footer">
                <div className="EpisodeCard-play"><button className="EpisodeCard-button" onClick={handleClick}>{descriptionShown ? 'Hide' : 'Show'} description</button></div>
                <div className="EpisodeCard-play">{episode.title === activeEpisode.title ? 'Currently playing' : <button className="EpisodeCard-button" onClick={() => dispatch(setActiveEpisode(episode))}>Play episode</button>}</div>
            </div>
        </div>
    )
}

export default EpisodeCard;
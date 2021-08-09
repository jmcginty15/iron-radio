import { parseInfo, formatDate } from './utils';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './PodcastPlayer.css';

const PodcastPlayer = ({ podcast }) => {
    const { title, url, published, description } = podcast;
    const { eVe, episodeNum, topic, guests } = parseInfo(title);
    const date = formatDate(new Date(published));

    return (
        <div className="PodcastPlayer">
            <h4 className="PodcastPlayer-title">{eVe && 'Experiments vs Experience 2.0 '}Episode {episodeNum}</h4>
            <h6 className="PodcastPlayer-title-date">{date}</h6>
            <h5 className="PodcastPlayer-subtitle">{guests.length > 1 ? 'Guests:' : 'Guest:'} {guests.length ? guests.join(', ') : 'None'}</h5>
            {topic && <h5 className="PodcastPlayer-subtitle">Topic: {topic}</h5>}
            <p className="PodcastPlayer-description">{description}</p>
            <AudioPlayer src={url} hasDefaultKeyBindings />
        </div>
    )
}

export default PodcastPlayer;
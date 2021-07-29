import EpisodeCard from './EpisodeCard';

const EpisodePage = ({ episodes }) => {
    return (
        <div className="EpisodePage">
            {episodes.map(episode => <EpisodeCard key={episode.title} episode={episode} />)}
        </div>
    )
}

export default EpisodePage;
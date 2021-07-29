import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setActiveEpisode, setEpisodeList } from '../actions/episodes';
import PodcastPlayer from '../PodcastPlayer';
import EpisodeList from './EpisodeList';
import RssFeed from '../../RssFeed';
import './Archive.css';

const Archive = () => {
    const dispatch = useDispatch();
    const [sortBy, setSortBy] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [episodesPerPage, setEpisodesPerPage] = useState(10);
    const activeEpisode = useSelector(state => state.episodes.active);
    const episodeList = useSelector(state => state.episodes.list);
    const feed = useSelector(state => state.rss.feed);

    if (!activeEpisode) {
        const episode = RssFeed.getFrom(feed);
        dispatch(setActiveEpisode(episode[0]));
    }

    if (!episodeList.length && searchTerm === '') {
        const episodes = RssFeed.getFrom(feed, 0, -1, sortBy);
        dispatch(setEpisodeList(episodes));
    }

    useEffect(() => {
        if (searchTerm === '') {
            const episodes = RssFeed.getFrom(feed, 0, -1, sortBy);
            dispatch(setEpisodeList(episodes));
        } else {
            const episodes = RssFeed.search(feed, searchTerm, sortBy);
            dispatch(setEpisodeList(episodes));
        }
    }, [searchTerm]);

    const toggleOrder = () => {
        const episodes = searchTerm === '' ? RssFeed.getFrom(feed, 0, -1, !sortBy) : RssFeed.search(feed, searchTerm, !sortBy);
        dispatch(setEpisodeList(episodes));
        setSortBy(!sortBy);
    }

    const handleSearch = (evt) => setSearchTerm(evt.target.value);
    const handleChange = (evt) => setEpisodesPerPage(parseInt(evt.target.value));
    const handleClear = () => setSearchTerm('');

    return (
        <div className="Archive">
            <h1 className="Archive-title">Podcast Archive</h1>
            <div className="Archive-container">
                <div className="Archive-player-container">
                    {activeEpisode && <PodcastPlayer podcast={activeEpisode} />}
                </div>
                <div className="Archive-list-container">
                    <div className="Archive-controls">
                        <p className="Archive-search-label">Search episodes:</p>
                        <button className="Archive-button" onClick={toggleOrder}>Sort {sortBy ? 'oldest to newest' : 'newest to oldest'}</button>
                        <input className="Archive-search" placeholder="Search by topic, guest, episode number, or description" onChange={handleSearch} value={searchTerm} />
                        <p className="Archive-search-label">Episodes per page: </p>
                        <input className="Archive-page-count" type="number" min="1" max="50" value={episodesPerPage} onChange={handleChange} />
                        <button className="Archive-button" onClick={handleClear}>Clear search</button>
                    </div>
                    {episodeList.length ? <EpisodeList episodes={episodeList} episodesPerPage={episodesPerPage} /> : <h4 className="Archive-subtitle">No episodes found</h4>}
                </div>
            </div>
        </div>
    )
}

export default Archive;
import { useState } from 'react';
import EpisodePage from './EpisodePage';
import './EpisodeList.css';

const paginate = (episodes, episodesPerPage) => {
    const paginatedEpisodes = [];

    let nextPage = [];
    for (let episode of episodes) {
        nextPage.push(episode);
        if (nextPage.length === episodesPerPage) {
            paginatedEpisodes.push([...nextPage]);
            nextPage = [];
        }
    }
    if (nextPage.length) paginatedEpisodes.push(nextPage);

    return paginatedEpisodes;
}

const EpisodeList = ({ episodes, episodesPerPage = 10 }) => {
    const prev = [-2, -1];
    const next = [1, 2];
    const [activePage, setActivePage] = useState(0);
    const paginatedEpisodes = episodes ? paginate(episodes, episodesPerPage) : null;

    const nextPage = () => {
        if (activePage < paginatedEpisodes.length - 1) setActivePage(activePage + 1);
    }

    const prevPage = () => {
        if (activePage > 0) setActivePage(activePage - 1);
    }

    if (activePage >= paginatedEpisodes.length) setActivePage(paginatedEpisodes.length - 1);

    return (
        <div className="EpisodeList">
            <div className="EpisodeList-header">
                <span title="First page" className="EpisodeList-nav" onClick={() => setActivePage(0)}>{'<<'}</span>
                <span title="Previous page" className="EpisodeList-nav" onClick={prevPage}>{'<'}</span>
                <span className="EpisodeList-nums">
                    {prev.map(num => activePage + num >= 0 ? <span key={num} title={`Page ${num + 1}`} className="EpisodeList-num" onClick={() => setActivePage(activePage + num)}>{activePage + num + 1}</span> : null)}
                    <span className="EpisodeList-current">{activePage + 1}</span>
                    {next.map(num => activePage + num < paginatedEpisodes.length ? <span key={num} title={`Page ${num + 1}`} className="EpisodeList-num" onClick={() => setActivePage(activePage + num)}>{activePage + num + 1}</span> : null)}
                </span>
                <span title="Next page" className="EpisodeList-nav" onClick={nextPage}>{'>'}</span>
                <span title="Last page" className="EpisodeList-nav" onClick={() => setActivePage(paginatedEpisodes.length - 1)}>{'>>'}</span>
            </div>
            {activePage <= paginatedEpisodes.length - 1 && <EpisodePage episodes={paginatedEpisodes[activePage]} />}
            <div className="EpisodeList-footer">
                <span title="First page" className="EpisodeList-nav" onClick={() => setActivePage(0)}>{'<<'}</span>
                <span title="Previous page" className="EpisodeList-nav" onClick={prevPage}>{'<'}</span>
                <span className="EpisodeList-nums">
                    {prev.map(num => activePage + num >= 0 ? <span key={num} title={`Page ${num + 1}`} className="EpisodeList-num" onClick={() => setActivePage(activePage + num)}>{activePage + num + 1}</span> : null)}
                    <span className="EpisodeList-current">{activePage + 1}</span>
                    {next.map(num => activePage + num < paginatedEpisodes.length ? <span key={num} title={`Page ${num + 1}`} className="EpisodeList-num" onClick={() => setActivePage(activePage + num)}>{activePage + num + 1}</span> : null)}
                </span>
                <span title="Next page" className="EpisodeList-nav" onClick={nextPage}>{'>'}</span>
                <span title="Last page" className="EpisodeList-nav" onClick={() => setActivePage(paginatedEpisodes.length - 1)}>{'>>'}</span>
            </div>
        </div>
    )
}

export default EpisodeList;
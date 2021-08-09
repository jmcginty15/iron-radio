export const SET_ACTIVE_EPISODE = 'SET_ACTIVE_EPISODE';
export const SET_EPISODE_LIST = 'SET_EPISODE_LIST';

export const setActiveEpisode = (episode) => {
    return {
        type: SET_ACTIVE_EPISODE,
        payload: { episode: episode }
    }
}

export const setEpisodeList = (episodes) => {
    return {
        type: SET_EPISODE_LIST,
        payload: { episodes: episodes }
    }
}
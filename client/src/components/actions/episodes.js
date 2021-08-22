import axios from 'axios';
import { BASE_URL } from './config';
import { refreshRss } from './rss';

export const SET_ACTIVE_EPISODE = 'SET_ACTIVE_EPISODE';
export const SET_EPISODE_LIST = 'SET_EPISODE_LIST';
export const UPLOADED = 'UPLOADED';
export const CLEAR_UPLOADED = 'CLEAR_UPLOADED';

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

const uploaded = (filename, length) => {
    return {
        type: UPLOADED,
        payload: {
            episode: {
                filename: filename,
                length: length
            }
        }
    }
}

export const upload = (file) => {
    return async function (dispatch) {
        try {
            console.log(file);
            // const formData = new FormData();
            // formData.append('audio', file);
            // const res = await axios.post(`${BASE_URL}/audio/upload`, formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });
            // dispatch(uploaded(res.data.filename, res.data.length));
        } catch (err) {
            console.log(err);
        }
    }
}

export const clearUploaded = () => {
    return {
        type: CLEAR_UPLOADED,
    }
}

export const addToFeed = (episodeNum, guests, topic, description, filename, length, token) => {
    return async function (dispatch) {
        try {
            const res = await axios.post(`${BASE_URL}/audio/add-to-rss`, {
                episodeNum: episodeNum,
                guests: guests,
                topic: topic,
                description: description,
                filename: filename,
                length: length,
                _token: token
            });
            if (res.status === 200) dispatch(refreshRss());
            else console.log('fail');
        } catch (err) {
            console.log(err);
        }
    }
}
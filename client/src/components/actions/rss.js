import axios from 'axios';
import { BASE_URL } from './config';

export const REFRESH_RSS = 'REFRESH_RSS';

const gotRss = (rss) => {
    return {
        type: REFRESH_RSS,
        payload: {
            rss: rss
        }
    };
}

export const refreshRss = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${BASE_URL}/api/rss`);
            dispatch(gotRss(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

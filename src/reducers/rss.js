import { REFRESH_RSS } from '../components/actions/rss';

const rss = (state = { rss: '' }, action) => {
    switch (action.type) {
        case REFRESH_RSS:
            return { ...state, feed: action.payload.rss };
        default:
            return state;
    }
}

export default rss;
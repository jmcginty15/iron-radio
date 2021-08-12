import { SET_ACTIVE_EPISODE, SET_EPISODE_LIST, UPLOADED, CLEAR_UPLOADED } from '../components/actions/episodes';

const INITIAL_STATE = {
    active: {},
    list: [],
    uploaded: null
}

const episodes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_EPISODE:
            return { ...state, active: action.payload.episode };
        case SET_EPISODE_LIST:
            return { ...state, list: action.payload.episodes };
        case UPLOADED:
            return { ...state, uploaded: { ...action.payload.episode } };
        case CLEAR_UPLOADED:
            return { ...state, uploaded: null };
        default:
            return state;
    }
}

export default episodes;
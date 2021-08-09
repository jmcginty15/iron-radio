import { SET_ACTIVE_EPISODE, SET_EPISODE_LIST } from '../components/actions/episodes';

const INITIAL_STATE = {
    active: {},
    list: []
}

const episodes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_EPISODE:
            return { ...state, active: action.payload.episode };
        case SET_EPISODE_LIST:
            return { ...state, list: action.payload.episodes };
        default:
            return state;
    }
}

export default episodes;
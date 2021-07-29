import { combineReducers } from "redux";
import config from "./config";
import rss from "./rss";
import episodes from "./episodes";

// Root reducer
const root = combineReducers({
    config,
    rss,
    episodes
});

export default root;
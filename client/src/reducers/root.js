import { combineReducers } from "redux";
import config from "./config";
import rss from "./rss";
import episodes from "./episodes";
import users from "./users";

// Root reducer
const root = combineReducers({
    config,
    rss,
    episodes,
    users
});

export default root;
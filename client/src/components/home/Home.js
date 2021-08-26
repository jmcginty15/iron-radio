import { useSelector, useDispatch } from "react-redux";
import { refreshRss } from "../actions/rss";
import RssFeed from "../../RssFeed";
import PodcastPlayer from "../PodcastPlayer";
import Header from "./Header";
import { setActiveEpisode } from "../actions/episodes";
import "./Home.css";

const Home = () => {
    const feed = useSelector(state => state.rss.feed);
    const activeEpisode = useSelector(state => state.episodes.active);

    const dispatch = useDispatch();
    dispatch(refreshRss());
    const episodes = feed ? RssFeed.getFrom(feed) : null;

    if (!activeEpisode.title && episodes) dispatch(setActiveEpisode(episodes[0]));

    return (
        <div className="Home">
            <Header imgSrc="img/banner.jpg" imgAlt="banner-image" />
            <div className="Home-body">
                <h1 className="Home-title">Welcome to IronRadio!</h1>
                <p className="Home-info">
                    This site is a FREE audio repository of more sports nutrition, weight training,
                    powerlifting, and bodybuilding talk than you can shake a stick at! Its purpose
                    is to preserve a ton of highly-rated podcast and mp3 content and allow it to be
                    distributed for the benefit of the fitness, nutrition, power sport, and
                    bodybuilding public. It's mildly entertaining, fairly educational, and best of
                    all, the audio and video are totally FREE. Email Phil at <span className="Home-email">stvnsp@hotmail.com</span> with
                    questions for the show or to ask about being a guest!
                </p>
                <h3 className="Home-title">Latest episode:</h3>
                <h6 className="Home-title"><em>(See more episodes on the <a className="Home-link" href="/archive">Archive</a> page)</em></h6>
                <div className="Home-audio">
                    {episodes && <PodcastPlayer podcast={episodes[0]} />}
                </div>
            </div>
        </div>
    )
}

export default Home;
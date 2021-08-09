class RssFeed {
    static getFrom(feed, start = 0, count = 1, order = true) {
        const episodes = [];
        let index = null;

        if (order) {
            index = feed.indexOf('<item>');
            let num = 0;
            while (num < start) {
                index = feed.indexOf('<item>', index + 1);
                num++;
            }

            num = 0;
            while (num < count || (count === -1 && index !== -1)) {
                episodes.push({ xml: feed.slice(index, feed.indexOf('</item>', index) + 7) });
                index = feed.indexOf('<item>', index + 1);
                num++;
            }
        } else {
            index = feed.lastIndexOf('<item>');
            let num = 0;
            while (num < start) {
                index = feed.lastIndexOf('<item>', index - 1);
                num++;
            }

            num = 0;
            while (num < count || (count === -1 && index !== -1)) {
                episodes.push({ xml: feed.slice(index, feed.indexOf('</item>', index) + 7) });
                index = feed.lastIndexOf('<item>', index - 1);
                num++;
            }
        }

        for (let i = 0; i < episodes.length; i++) episodes[i] = RssFeed.parseEpisode(episodes[i].xml);

        return episodes;
    }

    static search(feed, term, order = true) {
        const lowerCaseFeed = feed.toLowerCase();
        term = term.toLowerCase();

        let index = order ? lowerCaseFeed.indexOf(term) : lowerCaseFeed.lastIndexOf(term);
        let episodes = [];
        let prevStart = 0;
        let prevEnd = 0;

        while (index !== -1) {
            const startIndex = feed.lastIndexOf('<item>', index);
            const endIndex = feed.indexOf('</item>', index);
            if (startIndex !== -1 && endIndex !== -1) {
                if (startIndex !== prevStart && endIndex !== prevEnd) {
                    const openTagBefore = feed.lastIndexOf('<', index);
                    const closeTagBefore = feed.lastIndexOf('>', index);
                    const openTagAfter = feed.indexOf('<', index);
                    const closeTagAfter = feed.indexOf('>', index);

                    if (openTagBefore < closeTagBefore && openTagAfter < closeTagAfter) {
                        episodes.push({ xml: feed.slice(startIndex, endIndex + 7) });
                        prevStart = startIndex;
                        prevEnd = endIndex;
                    }
                }
            }
            index = order ? lowerCaseFeed.indexOf(term, index + 1) : lowerCaseFeed.lastIndexOf(term, index - 1);
        }

        for (let i = 0; i < episodes.length; i++) episodes[i] = RssFeed.parseEpisode(episodes[i].xml);

        return episodes;
    }

    static parseEpisode(xml) {
        const episode = { xml: xml };

        const titleIndex = xml.indexOf('<title>') + 7;
        episode.title = xml.slice(titleIndex, xml.indexOf('</title>', titleIndex));
        while (episode.title.charAt(0) === ' ') episode.title = episode.title.slice(1);
        while (episode.title.charAt(episode.title.length - 1) === ' ') episode.title = episode.title.slice(0, -1);

        const descriptionIndex = xml.indexOf('<description>') + 13;
        episode.description = xml.slice(descriptionIndex, xml.indexOf('</description>', descriptionIndex));
        while (episode.description.charAt(0) === ' ') episode.description = episode.description.slice(1);
        while (episode.description.charAt(episode.description.length - 1) === ' ') episode.description = episode.description.slice(0, -1);

        const publishedIndex = xml.indexOf('<pubDate>') + 9;
        episode.published = xml.slice(publishedIndex, xml.indexOf('</pubDate>', publishedIndex));
        while (episode.published.charAt(0) === ' ') episode.published = episode.published.slice(1);
        while (episode.published.charAt(episode.published.length - 1) === ' ') episode.published = episode.published.slice(0, -1);

        const urlIndex = xml.indexOf('url=');
        const startIndex = xml.indexOf('"', urlIndex) + 1;
        const endIndex = xml.indexOf('"', startIndex);
        episode.url = xml.slice(startIndex, endIndex);

        return episode;
    }
}

export default RssFeed;
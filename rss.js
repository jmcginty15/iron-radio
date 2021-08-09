const fs = require('fs');

class RssFeed {
    static findFile(filename) {
        const file = fs.readFileSync('./rss.xml', 'utf-8');
        return file.indexOf(filename) !== -1;
    }

    static addToFeed(filename, episodeNum, guests, topic, description, length) {
        const guestTitle = guests.indexOf(',') === -1 && guests.indexOf('and') === -1 && guests.indexOf('&') === -1 ? 'Guest' : 'Guests';
        const xmlGuests = guests ? `${guestTitle} ${guests} ` : ''; 
        const pubDate = parseDate(new Date());
        const episode = `<item>
            <title>Episode ${episodeNum} IronRadio - ${xmlGuests}Topic ${topic}</title>
            <description>${description}</description>
            <pubDate>${pubDate}</pubDate>
            <link>https://www.ironradio.org</link>
            <enclosure url="https://www.ironradio.org/audio/${filename}" length="${length}" type="audio/mpeg" />
        </item>\n\t\t`;

        let file = fs.readFileSync('./rss.xml', 'utf-8');
        const pubDateStartIndex = file.indexOf('<pubDate>') + 9;
        const pubDateEndIndex = file.indexOf('</pubDate>');
        const lastBuildDateStartIndex = file.indexOf('<lastBuildDate>') + 15;
        const lastBuildDateEndIndex = file.indexOf('</lastBuildDate>');
        const itemIndex = file.indexOf('<item>');
        file = `${file.slice(0, pubDateStartIndex)}${pubDate}${file.slice(pubDateEndIndex, lastBuildDateStartIndex)}${pubDate}${file.slice(lastBuildDateEndIndex, itemIndex)}${episode}${file.slice(itemIndex)}`;
        fs.writeFileSync('./rss.xml', file);
    }
}

function parseDate(date) {
    let day = date.getDay();
    switch (day) {
        case 0:
            day = 'Sun';
            break;
        case 1:
            day = 'Mon';
            break;
        case 2:
            day = 'Tue';
            break;
        case 3:
            day = 'Wed';
            break;
        case 4:
            day = 'Thu';
            break;
        case 5:
            day = 'Fri';
            break;
        case 6:
            day = 'Sat';
            break;
    }

    let dateNum = date.getDate();
    if (`${dateNum}`.length === 1) dateNum = `0${dateNum}`;

    let month = date.getMonth();
    switch (month) {
        case 0:
            month = 'Jan';
            break;
        case 1:
            month = 'Feb';
            break;
        case 2:
            month = 'Mar';
            break;
        case 3:
            month = 'Apr';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'Jun';
            break;
        case 6:
            month = 'Jul';
            break;
        case 7:
            month = 'Aug';
            break;
        case 8:
            month = 'Sep';
            break;
        case 9:
            month = 'Oct';
            break;
        case 10:
            month = 'Nov';
            break;
        case 11:
            month = 'Dec';
            break;
    }

    return `${day}, ${dateNum} ${month} ${date.getFullYear()} 07:00:00 +0000`;
}

module.exports = RssFeed;
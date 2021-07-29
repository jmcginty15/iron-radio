const parseInfo = (info) => {
    const eVeIndex = info.indexOf('Experiments vs Experience 2.0');
    const eVe = eVeIndex !== -1;

    const episodeIndex = info.indexOf('Episode') + 8;
    let episodeNum = info.slice(episodeIndex, info.indexOf(' ', episodeIndex));
    try {
        const intEpisodeNum = parseInt(episodeNum);
        if (`${intEpisodeNum}` === episodeNum) episodeNum = intEpisodeNum;
    } catch { }

    if (eVe) {
        let topic = info.slice(eVeIndex + 30);
        if (topic === '' || topic === ' ') topic = null;
        return {
            eVe: true,
            episodeNum: episodeNum,
            topic: topic,
            guests: []
        }
    } else {
        const topicIndex = info.indexOf('Topic');
        let topic = topicIndex === -1 ? null : info.slice(topicIndex + 6);
        if (topic) {
            while (topic.charAt(0) === ' ') topic = topic.slice(1);
            while (topic.charAt(topic.length - 1) === ' ') topic = topic.slice(0, -1);
            if (topic.slice(0, 3) === 'is ') topic = topic.slice(3);
        }

        const guestIndex = info.indexOf('Guest');
        const guests = (guestIndex === -1 || guestIndex > topicIndex) ? [] : parseGuests(info.slice(guestIndex, topicIndex));

        return {
            eVe: false,
            episodeNum: episodeNum,
            topic: topic,
            guests: guests
        }
    }
}

const parseGuests = (guestStr) => {
    while (guestStr.charAt(guestStr.length - 1) === ' ' || guestStr.charAt(guestStr.length - 1) === '-') guestStr = guestStr.slice(0, -1);
    if (guestStr.charAt(guestStr.length - 1) === ',') guestStr = guestStr.slice(0, -1);
    if (guestStr === 'Guest') return [];

    if (guestStr.slice(0, 6) === 'Guest ') {
        guestStr = guestStr.slice(6);
        while (guestStr.charAt(0) === ' ' || guestStr.charAt(0) === '-') guestStr = guestStr.slice(1);
        return [guestStr];
    }

    if (guestStr.slice(0, 6) === 'Guests') {
        guestStr = guestStr.slice(7);
        while (guestStr.charAt(0) === ' ' || guestStr.charAt(0) === '-') guestStr = guestStr.slice(1);

        const commaIndex = guestStr.indexOf(',');
        const andIndex = guestStr.indexOf('and');

        if (commaIndex !== -1) {
            const guests = guestStr.split(',');
            for (let i = 0; i < guests.length; i++) {
                while (guests[i].charAt(0) === ' ') guests[i] = guests[i].slice(1);
                while (guests[i].charAt(guests[i].length - 1) === ' ') guests[i] = guests[i].slice(0, -1);
                if (guests[i].charAt(guests[i].length - 1) === ',') guests[i] = guests[i].slice(0, -1);
                if (guests[i].slice(0, 4) === 'and ') guests[i] = guests[i].slice(4);
            }
            return guests;
        }

        if (andIndex !== -1) {
            const guests = guestStr.split('and');
            for (let i = 0; i < guests.length; i++) {
                while (guests[i].charAt(0) === ' ') guests[i] = guests[i].slice(1);
                while (guests[i].charAt(guests[i].length - 1) === ' ') guests[i] = guests[i].slice(0, -1);
                if (guests[i] === 'Jr') guests[i] = `${guests[0].slice(0, -3)} ${guests[i]}`;
            }
            return guests;
        }

        return [guestStr];
    }
}

const formatDate = (date) => {
    const dayNum = date.getDay();
    let day = null;
    switch (dayNum) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            break;
    }

    const monthNum = date.getMonth();
    let month = null;
    switch (monthNum) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            break;
    }

    return `${day} ${month} ${date.getDate()}, ${date.getFullYear()}`;
}

module.exports = { parseInfo, formatDate };
const INITIAL_STATE = {
    app: {
        name: 'IronRadio',
        description: 'Library of free audio on sports training and nutrition, strength training, bodybuilding, fat loss, muscle gain, and exercise physiology for coaches, trainers, and athletes'
    },
    forum: 'https://www.theironforum.com/',
    facebook: 'https://www.facebook.com/groups/56270951924/',
    youtube: 'https://www.youtube.com/user/Lonman07',
    itunes: 'https://podcasts.apple.com/podcast/id308382038'
}

const config = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default config;
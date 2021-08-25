import './Footer.css';

const Footer = () => {
    const followLink = (route) => window.open(route, '_blank');

    return (
        <div className="Footer">
            <div className="Footer-donations">
                IronRadio is moving donations over to <a className="Footer-donations-link" href="https://www.patreon.com/" target="_blank" rel="noreferrer">Patreon</a>.
                Keep an eye on the site and podcast for details if you'd like to become a donor.<br /><br />
                Each month, for less than the bloody bank sneaks out of your account in fees, you can help
                support a subculture of hardcore but intellectual guys (and a few gals) that know brains and
                brawn are not opposites! We are the un-manipulated, cheese-free "public radio" of sports
                nutrition, bodybuilding, and powerlifting - thanks to YOU!
                {/* CLICK ABOVE to become a supporting member (patron) of Iron Radio/Nutrition Radio and even leave us a message with your small automatically recurring $4 commitment. Each month, for less than the bloody bank sneaks out of your account in fees, you can help support a subculture of hardcore but intellectual guys (and a few gals) that know brains and brawn are not opposites! We are the un-manipulated, cheese-free "public radio" of sports nutrition, bodybuilding, and powerlifting - thanks to YOU! */}
            </div>
            <p className="Footer-text">
                Unless specifically stated, contents <i className="fa fa-copyright" aria-hidden="true" /> copyright
                Phil Stevens 2001-2021. Site maintained by Phil Stevens exclusively. All content is for
                informational purposes only. Use of the Iron Radio <i className="fa fa-copyright" aria-hidden="true" /> and
                Nutrition Radio <i className="fa fa-copyright" aria-hidden="true" /> icons and links to free
                audio content is free for use on other Internet sites, provided the audio or icon is not
                altered in any way, and we have the requester's email on file. Content is roughly PG-13 in
                nature.
            </p>
            <p className="Footer-text">
                Ethical Note: Our mission is to provide free athletic education to all those who recognize a
                connection between knowledge, health, and performance, especially in strength sports like
                bodybuilding, powerlifting, and weightlifting. We strive to clearly indicate which parts of the
                sites are ads and to make sure our podcast guests know our stance in advance. Visitors are
                under no obligation to patronize ANY entity shown on this site. Beyond site maintenance, a
                portion of all advertising or donation dollars will go to charitable causes, including student
                and athlete travel support.
            </p>
            <p className="Footer-text">
                <svg className="Footer-svg" onClick={() => followLink("https://jasonmcginty.surge.sh/", true)} version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" fill="#dfa440" viewBox="0 0 11117.000000 6458.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,6458.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M24610 64573 c1 -5 1656 -2505 3680 -5558 l3678 -5550 5859 -5 5858 -5 0 -12875 c0 -13442 1 -13011 -40 -13750 -219 -3874 -1309 -7236 -3184 -9818 -802 -1105 -1751 -2068 -2834 -2875 -2286 -1705 -5183 -2685 -8517 -2882 -851 -50 -1937 -50 -2885 0 -3677 194 -6656 1105 -8930 2728 -517 369 -973 756 -1436 1217 -565 564 -1021 1118 -1468 1788 -1725 2584 -2595 6011 -2634 10367 l-2 230 -5879 3 -5879 2 7 -472 c36 -2515 269 -4721 727 -6898 642 -3049 1703 -5809 3179 -8270 2258 -3767 5477 -6750 9475 -8781 2531 -1285 5293 -2174 8340 -2683 3450 -577 7293 -641 10730 -180 3556 477 6800 1502 9696 3065 3664 1976 6709 4800 8961 8309 1294 2017 2335 4274 3072 6662 865 2801 1331 5723 1426 8933 6 210 10 7044 10 18818 l0 18487 -15505 0 c-8528 0 -15505 -3 -15505 -7z" />
                        <path d="M57810 54675 l0 -9815 9221 -12613 9221 -12612 1179 -3 1179 -2 10310 13747 10310 13746 0 -22552 c0 -14334 3 -22551 10 -22549 5 1 2691 1875 5969 4163 l5961 4160 0 27073 0 27072 -6828 0 -6828 0 -9900 -13606 c-5444 -7484 -9903 -13607 -9908 -13608 -5 -1 -4464 6121 -9908 13604 l-9899 13605 -44 3 -45 3 0 -9816z" />
                    </g>
                </svg> Site developed by <a className="Footer-link" href="https://github.com/jmcginty15/" target="_blank" rel="noreferrer">Jason McGinty</a> using <a className="Footer-link" href="https://create-react-app.dev/" target="_blank" rel="noreferrer">create-react-app</a>.
                Get in touch <a className="Footer-link" href="https://jasonmcginty.surge.sh/" target="_blank" rel="noreferrer">here</a> for all your small business web development needs.
            </p>
        </div>
    )
}

export default Footer;
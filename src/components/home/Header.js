import "./Header.css";

const Header = ({ imgSrc, imgAlt }) => {
    return (
        <div className="Header">
            <img className="Header-banner-image" src={imgSrc} alt={imgAlt} />
        </div>
    )
}

export default Header;
import './BioCard.css';

const BioCard = ({ contributor }) => {
    return (
        <div className="BioCard">
            <h3 className="BioCard-title">{contributor.name}</h3>
            <p className="BioCard-bio" dangerouslySetInnerHTML={{ __html: contributor.bio }} />
            {contributor.photos.length === 3 && <div className="BioCard-img-container">
                <img className="BioCard-img" src={`img/${contributor.photos[0].src}`} alt={contributor.photos[0].alt} />
                <img className="BioCard-img" src={`img/${contributor.photos[1].src}`} alt={contributor.photos[1].alt} />
                {/* {contributor.photos.map(photo => <img className="BioCard-img" src={`img/${photo.src}`} alt={photo.alt} />)} */}
            </div>}
            <div className="BioCard-img-container-last">
                <img className="BioCard-img" src={`img/${contributor.photos[contributor.photos.length - 1].src}`} alt={contributor.photos[contributor.photos.length - 1].alt} />
            </div>
        </div>
    )
}

export default BioCard;
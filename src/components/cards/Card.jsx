import './card.css'

function Card (props) {
    return (
        <li className="card">
            <img src={props.imgPath} alt={props.imgAlt} />
            <div className="description">
                <div className="description-text">
                    <h2 className="description-name">{props.descriptionName}</h2>
                    <a href="/">Explore now</a>
                </div>
                <a href="/">&rarr;</a>            
            </div>
        </li>
    )
}

export default Card;
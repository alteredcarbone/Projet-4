import "../../assets/style/components/card.scss";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
 

export default function Card() {
    return(
    <div className="container_card">
        <section className="gallery">
            {logements.map((logement) => (
                <Link
                    key={logement.id}
                    to={`/locations/${logement.id}`}
                    className="card"
                >
                    <img 
                        src={logement.cover}
                        alt={logement.title}
                        className="card_img"
                    />
                    <div className="card__shadow"></div>
                    <h2 className="card_title">{logement.title}</h2>
                </Link>
            ))}
        </section>
    </div>
    )
}
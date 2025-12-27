import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import locations from "../../data/location.json";
import "../../assets/style/pages/location.scss"
import Collapse from "../../Components/collapse/collapse.jsx";

export default function Location(){
    const{id} = useParams()
    const location = useMemo(
    () => locations.find((item) => item.id === id),
    [id]
  );

  const [index, setIndex] = useState(0);

  if (!location) return <Navigate to="/404" />;

  const pictures = location.pictures || [];
  const total = pictures.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
  <section className="location">
      {/* Slider */}
      <div className="slider">
        <img
          src={pictures[index]}
          alt={`${location.title} - ${index + 1}`}
          className="slider__img"
        />

        {total > 1 && (
          <>
            <button className="slider__btn slider__btn--left" onClick={prev} aria-label="Image précédente">
              ‹
            </button>
            <button className="slider__btn slider__btn--right" onClick={next} aria-label="Image suivante">
              ›
            </button>

            <div className="slider__count">
              {index + 1}/{total}
            </div>
          </>
        )}
      </div>

      {/* Infos */}
      <div className="location__header">
        <div className="location__info">
          <h1 className="location__title">{location.title}</h1>
          <p className="location__place">{location.location}</p>
        </div>
        <div className="host">
            <p className="host__name">{location.host.name}</p>
            <img
              src={location.host.picture}
              alt={location.host.name}
              className="host__picture"
            />
        </div>
      </div>
      
      <div className="location__meta">
        
        <div className="tags">
          {location.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

      
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={
                star <= Number(location.rating)
                  ? "star  star--active"
                  : "star"
              }
            >
              ★
            </span>
          ))}
        </div>
    </div>
    <div className="location__dropdowns">
      <Collapse title="Description">
        <p>{location.description}</p>
      </Collapse>

      <Collapse title="Équipements">
      <ul>
        {location.equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </ul>
    </Collapse>
  </div>
    
  </section>
  );
}
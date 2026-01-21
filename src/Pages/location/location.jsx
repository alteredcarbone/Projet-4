import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import locations from "../../data/location.json";
import "../../assets/style/pages/location.scss";
import Collapse from "../../Components/collapse/collapse.jsx";
import Slider from "../../Components/slider/slider.jsx";

export default function Location() {
  const { id } = useParams();

  const location = useMemo(
    () => locations.find((item) => item.id === id),
    [id]
  );

  if (!location) return <Navigate to="/404" />;

  return (
    <section className="location">
      
      <Slider pictures={location.pictures} title={location.title} />

      <div className="location__header">
        <div className="location__info">
          <h1 className="location__title">{location.title}</h1>
          <p className="location__place">{location.location}</p>
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

        <div className="location__right">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= Number(location.rating) ? "star star--active" : "star"}
              >
                ★
              </span>
            ))}
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
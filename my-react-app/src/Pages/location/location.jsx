import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import logements from "../../data/logements.json";
import "../../assets/style/pages/location.scss"


export default function Location(){
    const{id} = useParams()
   const logement = useMemo(
    () => logements.find((item) => item.id === id),
    [id]
  );

  const [index, setIndex] = useState(0);

  if (!logement) return <Navigate to="/404" />;

  const pictures = logement.pictures || [];
  const total = pictures.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <section className="location">
      {/* Slider */}
      <div className="slider">
        <img
          src={pictures[index]}
          alt={`${logement.title} - ${index + 1}`}
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
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.description}</p>
      <p>{logement.tags}</p>
      <p>{logement.rating}</p>
      <p>{logement.name}</p>
      <p>{logement.equipments}</p>
    </section>
  );
}
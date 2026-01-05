import { useState } from "react";
import "../../assets/style/components/slider.scss"

export default function Slider ({ pictures, title}) {
    const [index, setIndex] = useState(0);
    const total = pictures.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  if (!pictures || total === 0) return null;
return (
<div className="slider">
        <img
          src={pictures[index]}
          alt={`${title} - ${index + 1}`}
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
      )}
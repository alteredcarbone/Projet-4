import { useState } from "react";
import "../../assets/style/components/collapse.scss";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
        <button
            className="collapse__header"
            onClick={() => setOpen((v) => !v)}
            type="button"
        >
            <span>{title}</span>
                <span className={`collapse__arrow ${open ? "collapse__arrow--open" : ""}`}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6 15L12 9L18 15"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </span>
        </button>

      {open && <div className="collapse__content">{children}</div>}
    </div>
  );
}
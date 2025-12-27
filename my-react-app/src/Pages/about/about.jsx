import Banner from "./banner";
import Collapse from "../../Components/collapse/collapse.jsx";
import "../../assets/style/pages/about.scss";

export default function About() {
  return (
    <section className="about">
    <div className="collapse__about">
      <Collapse title="Fiabilité" className> 
        <p>coucou</p>
      </Collapse>
      <Collapse title="Respect">
        <p>Coucou</p>
      </Collapse>
      <Collapse title="Service">
        <p>Coucou</p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>Coucouq</p>
      </Collapse>

    </div>
    </section>
  );
}
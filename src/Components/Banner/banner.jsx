import "../../assets/style/pages/banner.scss";

export default function Banner({ image, title }) {
  return (
    <div className="container_banner">
      <section
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
        }}
      >
        {title ? <h1 className="banner_title">{title}</h1> : null}
      </section>
    </div>
  );
}

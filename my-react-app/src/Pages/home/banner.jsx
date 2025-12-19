import banner from "../../assets/images/banner/banner_1.webp"
import "../../assets/style/pages/banner.scss"


export default function Banner() {
  return (
    <div className="container_banner">
  <section className="banner" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner})`,}}>
    <h1 className="banner_title">
    Chez vous, partout et ailleurs
    </h1>
  </section>
  </div>
  )
}
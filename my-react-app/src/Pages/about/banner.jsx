import banner from "../../assets/images/banner/banner_2.webp"
import "../../assets/style/pages/banner.scss"


export default function About() {
  return (
    <div className="container_banner">
  <section className="banner" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${banner})`,}}>
    
  </section>
  </div>
  )
}
import Banner from "../../Components/Banner/banner";
import Cards from "../home/card";
import bannerImage from "../../assets/images/banner/banner_1.webp";

export default function Home() {
  return (
    <>
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      <Cards />

    </>
  );
}

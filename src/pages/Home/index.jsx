import ImageSwiper from "./components/Swiper";
import { SwiperData } from "./data";
import "./styles.scss";
import IconsMenu from "./components/IconsMenu";

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">MASTER WIZR Modules</h1>
      <IconsMenu slides={SwiperData}/>
      <ImageSwiper slides={SwiperData} />
    </div>
  );
}

export default Home;

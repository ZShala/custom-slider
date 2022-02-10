import ImageSwiper from "./components/Swiper";
import "./styles.scss";
import IconsMenu from "./components/IconsMenu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../../redux/images/images.slice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const sliderImages = useSelector((state)=> state.imagesReducer.images);

  return (
    <div className="home-container">
      <h1 className="title">MASTER WIZR Modules</h1>
      <IconsMenu slides={sliderImages.slice(0, 6)} />
      <ImageSwiper slides={sliderImages.slice(0, 6)} />
    </div>
  );
}

export default Home;

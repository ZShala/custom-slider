import "./style.scss";

function IconsMenu({ slides }) {
  return (
    <div className="menu-container">
      {slides?.map((slide, index) => {
        return (
          <div className="menu-icon" key={index}>
            <img src={slide.thumbnailUrl} alt={slide.title} className="icon-image" />
            <p className="icon-text">{slide.title.split(" ")[0]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default IconsMenu;

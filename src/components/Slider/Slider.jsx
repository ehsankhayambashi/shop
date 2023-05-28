import React, { useState, useEffect } from "react";
import "./Slider.scss";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const data = [
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/6904bb88f4978c65ae58f87e4409a7575725799d_1680516760.jpg?x-oss-process=image/quality,q_95/format,webp",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/9869329b36e4c75533cc5281632a2763a972f260_1679140919.jpg?x-oss-process=image/quality,q_95/format,webp",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/0bf813d9492dd28a06f9cb58211ec50e98ccbfd9_1681120882.jpg?x-oss-process=image/quality,q_95/format,webp",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/4e73de4d39ae3716ca96368105deedbc6c9f5614_1680930923.jpg?x-oss-process=image/quality,q_95/format,webp",
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : prev => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : prev => prev + 1);
  };

  const autoPlayTime = 3000;
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(${-currentSlide * 100}vw)`,
          width: `${data.length * 100}vw`,
        }}
      >
        {data.map((imgSrc, index) => (
          <img src={imgSrc} alt="" key={index} />
        ))}
      </div>
      <div className="buttons">
        <div className="button-container">
          <div className="icon" onClick={prevSlide}>
            <WestIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastIcon />
          </div>
        </div>
        <div className="dots">
          {Array.from({ length: data.length }).map((item, index) => (
            <div
              key={index}
              className={currentSlide === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;

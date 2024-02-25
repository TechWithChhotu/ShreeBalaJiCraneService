import SimpleImageSlider from "react-simple-image-slider";

import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpg";
import image7 from "./Images/7.jpg";

const images = [
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
];

const Slider = () => {
  return (
    <div className="flex justify-center mt-20 mb-10">
      <SimpleImageSlider
        width={"80%"}
        height={`${window.screen.width <= 640 ? "200px" : "500px"}`}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};

export default Slider;

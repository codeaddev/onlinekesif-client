import React, { useContext, useEffect, useState } from "react";
import { CloudContext } from "../../context/cloudContext";
import "./homeCarousel.scss";
const HomeCarousel = () => {
  const { questionData } = useContext(CloudContext);
  const items = [
    {
      icon: "face",
      copy: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "pets",
      copy: "02. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: "stars",
      copy: "03. Consectetur adipiscing elit.",
    },
    {
      icon: "invert_colors",
      copy: "04. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      icon: "psychology",
      copy: "05. Llamco nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: "brightness_7",
      copy: "06. Misi ut aliquip ex ea commodo consequat.",
    },
  ];
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(questionData);

  const Card = ({ item }) => {
    return (
      <li className="card">
        <span class="material-icons">{item.icon}</span>
        <p>{item.copy}</p>
      </li>
    );
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };
  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass("next")} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass("prev")} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel`}
      >
        {items.map((t, index) => (
          <Card key={t.copy + index} icon={t.icon} copy={t.copy} item={t} />
        ))}
      </ul>
    </div>
  );
};

export default HomeCarousel;

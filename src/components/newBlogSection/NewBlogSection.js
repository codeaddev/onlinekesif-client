import React, { useContext, useState } from "react";
import "./blog.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { CloudContext } from "../../context/cloudContext";
import logo from "../../components/Navbar/logo.svg";
import { Link } from "react-router-dom";

const NewBlogSection = () => {
  const { wpBlogs } = useContext(CloudContext);

  const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    centerMode: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="blog-container">
      <div className="blog-container-info">
        <div className="titles">
          <h2 className="section-header-text block">Online Keşif</h2>
          <h2 className="section-header-text block">
            <strong>Bilgilendiriyor</strong>
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          dolore quod, ut pariatur necessitatibus itaque sapiente architecto.
          Doloribus reprehenderitano.
        </p>
        <div className="blog-container-info-buttons">
          <button onClick={sliderRef?.slickPrev}>
            <ArrowBackIosNewIcon />
          </button>
          <button className="see-all" type="button">
            Hepsini Gör
          </button>
          <button onClick={sliderRef?.slickNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className="blog-container-slider">
        <Slider ref={setSliderRef} {...settings}>
          {wpBlogs?.map((item) => {
            return <NewBlogItem key={item.id} item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewBlogSection;

const NewBlogItem = ({ item }) => {
  return (
    <Link to={`${item.link}`} target="_blank" className="item">
      <img src={logo} alt="" />
      <p> {item?.title?.rendered}</p>
    </Link>
  );
};

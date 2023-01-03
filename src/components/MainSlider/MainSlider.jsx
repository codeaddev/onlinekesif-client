import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import AnyIcon from '../deneme/AnyIcon';
import SectionHeader from '../sectionHeaders/SectionHeader';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const MainSlider = ({setMainList,questionData}) => {
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon

      {...props}
        //className={className}
        //className="arrow"
        style={{ ...style, 
          //display: "block", 
          //background: "gainsboro",
          width:30,
          height:30,
          zIndex:5,
          padding:10,
          backgroundColor:"white",
          borderRadius:25,
          right:-8,
          alignItems:'center',
          justifyContent:'center',
          color:"grey",
          position:"absolute",
          //boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)";
     
        }}
        //onClick={onClick}

      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosNewIcon

      {...props}
        //className={className}
        //className="arrow"
        style={{ ...style, 
          //display: "block", 
          //background: "gainsboro",
          width:30,
          height:30,
          zIndex:5,
          padding:10,
          fontSize:16,
          position:"absolute",
          left:-8,
          backgroundColor:"white",
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center',
          color:"grey"
        }}
        //onClick={onClick}

      />
    );
  }
  var innerWidth=window.innerWidth
    var decideSlideToShow=()=>{
      if(innerWidth>767){
        return 4
      }else{
        return 1
      }
    }
    const [uploading,setUploading]=useState(false)
    var settings = {
        className:"slider",
        dots: true,
        infinite: true,
        //centerMode: true,
        slidesToShow:decideSlideToShow(),
        slidesToScroll: decideSlideToShow(),
        //variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
       
      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         infinite: true,
              
      //       }
      //     },
      //     {
      //       breakpoint: 600,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ],
      //  slidesPerRow: window.innerWidth>850?4:window.innerWidth>760?2:1
      }

      let navigate=useNavigate()
  return (
    <div className="slider-section">
        <SectionHeader >Çözümlerimiz</SectionHeader>
        <div style={{width:"80%",padding:0}} >
          <Slider
          {...settings}>
            {questionData.map(i=>{
              return(
                <div 
                key={i.id}
                className='card-wrapper'>
      
                <div 
                key={i.id+new Date().valueOf()}
                onClick={()=>{
                  setMainList({list:i.questions,mainWish:i.title})
                  navigate("hizmet-olustur")}}
                  style={{borderColor:i.mainColor}}
                  className="card-item">
                     <img
                    alt=''
                    className="card-svg-back"
                    src={i.altSvg}
                    />
                  <div className="top">
                  <img
                  alt=''
                    src={i.mainSvg}
                    />
                  <h2>{i.title}</h2>
                    
                  </div>
                  <label 
                    
                    className="divider">
                   
                    <p
                    style={{borderColor:i.mainColor,cursor:"pointer"}}
                    >{i.subText}</p>
                    
                   
                    </label>
                    
                </div>
              
                </div>
              )
            })}
          </Slider>
          </div>
        </div>
  )
}

export default MainSlider
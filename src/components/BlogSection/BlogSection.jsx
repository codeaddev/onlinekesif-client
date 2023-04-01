import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CloudContext } from '../../context/cloudContext'
import BlogItem from '../blogItem/BlogItem'
import MiniExplain from '../sectionHeaders/MiniExplain'
import SectionHeader from '../sectionHeaders/SectionHeader'
import Slider from "react-slick"; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { isMobile } from 'react-device-detect'

const BlogSection = () => {
  const {wpBlogs}=useContext(CloudContext)

    //console.log("blogs",wpBlogs[0]?.link) 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    
    return (
      <ArrowForwardIosIcon

      {...props}
        //className={className}
        //className="arrow"
        style={{ ...style, 
          display: "block", 
          //background: "gainsboro",
          width:24,
          height:24,
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
          display: "block", 
          //background: "gainsboro",
          width:24,
          height:24,
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

    const {blogs}=useContext(CloudContext)
    let navigate=useNavigate()
    const  list=[
      {id:"01",label:"Doğalgaz Projesi",detail:"Evimde Kombi Yok Yaptırmak İstyoryum",price:"24000",currency:"₺"},
      {id:"02",label:"Kombi",detail:"Evimde Kombi Var Yenisini Yaptırmak İstyoryum",price:"12000",currency:"₺"},
      {id:"03",label:"Klima",detail:"Yeni Klima İstiyorum",price:"14000",currency:"₺"},
      {id:"04",label:"Kazan",detail:"Site Yerleşkesine Kazan Sistemi İstiyorum",price:"44000",currency:"₺"},
      
    ]
    var innerWidth=window.innerWidth
    var decideSlideToShow=()=>{
      if(innerWidth>767){
        return 3
      }else{
        return 1
      }
    }
    //console.log(innerWidth)
    const settings = {
      dots: isMobile?false:true,
      infinite: true,
      
      slidesToShow: decideSlideToShow(),
      slidesToScroll: decideSlideToShow(),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      centerMode: true,
      //variableWidth: window.innerWidth>767?true:false,
      // centerMode: true,
      // responsive: [
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
    };

  return (
    <div className="section blogs">
              <SectionHeader
              onClick={()=>navigate("/blog")}
              
              >Online Keşif<strong><u>Bilgilendiriyor</u></strong></SectionHeader>
              {/* <MiniExplain>İhtiyacınızı anlamaya yönelik hazırlanan bloglardan faydalanın.</MiniExplain> */}
              <div style={{width:"100%",padding:0}} >
              <Slider 
              arrows={false}
              {...settings}>
              {wpBlogs.length>0&& wpBlogs?.map(i=>{
                return(
                  <BlogItem
                  source={i._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                  key={i.id}
                  item={i}/>
                )
              })}
                 
              </Slider>
              </div>
   
        </div>
  )
}

export default BlogSection
import React, { useEffect, useRef, useState } from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../pages/services/services.scss"
import { Fragment } from 'react'
import Kombisil from "../../pages/services/svg/kombisil.svg"
import Kazansil from "../../pages/services/svg/kazansil.svg"
import Klimasil from "../../pages/services/svg/klimasil.svg"
import Dogalgaz from "../../pages/services/svg/dogalgazsil.svg"
import Pre from "../../pages/services/svg/pre.svg"
import Next from "../../pages/services/svg/next.svg"

import DogalgazPro from "../../pages/services/svg/dogalgazpro.svg"
import KombiMain from "../../components/fotosrc/hizmet4.jpg"
import KazanMain from "../../components/fotosrc/hizmet5.jpg"
import DogalgazMain from "../../components/fotosrc/hizmet6.jpg"
import DogalgazProMain from "../../components/fotosrc/hizmet7.jpg"
import KlimaMain from "../../components/fotosrc/hizmet8.jpg"
import SectionHeader from '../sectionHeaders/SectionHeader'
import { KombiList } from '../data/questions';
import { KazanList } from '../data/KazanList';
import { KlimaList } from '../data/KlimaList';
import ServiceItem from '../../pages/services/ServiceItem';

const MainSliderAlt = ({ setMainList,
  mainList, scrollPosition, ...props }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    { id: "01", mainWish: "Kombi", list: KombiList, desc: "Online keşif sayesinde istediğiniz kombiye kolayca ulaşın.", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/SunLou2.jpg" },
    { id: "02", mainWish: "Kazan", list: KazanList, desc: "Kazan kurulumu ve değişimi projelerinde güvenilir firmalardan teklif alın.", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/SunLou2.jpg" },
    { id: "03", mainWish: "Klima", list: KlimaList, desc: "İhtiyacınız olan klima modeli hakkında kolay bir şekilde teklif alabilirsiniz.", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/SunLou2.jpg" },
    { id: "03", mainWish: "Klima", list: KlimaList, desc: "İhtiyacınız olan klima modeli hakkında kolay bir şekilde teklif alabilirsiniz.", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/SunLou2.jpg" },
    { id: "03", mainWish: "Klima", list: KlimaList, desc: "İhtiyacınız olan klima modeli hakkında kolay bir şekilde teklif alabilirsiniz.", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/SunLou2.jpg" },

  ]
  let data = [
    {
      id: "0",
      mainWish: "Kombi",
      svg: Kombisil,
      list: KombiList,
      desc: "Online keşif sayesinde istediğiniz kombiye kolayca ulaşın.",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: KombiMain
    },
    {
      id: "1",
      mainWish: "Kazan",
      svg: Kazansil,
      list: KazanList,
      desc: "Kazan kurulumu ve değişimi projelerinde güvenilir firmalardan teklif alın.",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: KazanMain
    },
    {
      id: "10",
      mainWish: "Klima",
      svg: Klimasil,
      list: KlimaList,
      desc: "İhtiyacınız olan klima modeli hakkında kolay bir şekilde teklif alabilirsiniz.",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url: KlimaMain
    },
    {
      id: "100",
      svg: DogalgazPro,
      list: KlimaList,
      mainWish: "Doğalgaz Projesi",
      desc: "İhtiyacınız olan klima modeli hakkında kolay bir şekilde teklif alabilirsiniz.",
      width: 2500,
      height: 1656,
      url: "https://unsplash.com/photos/pwaaqfoMibI",
      download_url: DogalgazProMain
    },
    {
      id: "1000",
      mainWish: "Doğalgaz Tesisatı",
      desc: "İhtiyacınız olan klima modeli hakkında kolay bir şekilde teklif alabilirsiniz.",
      svg: Dogalgaz,
      list: KlimaList,
      width: 5626,
      height: 3635,
      url: "https://unsplash.com/photos/6cY-FvMlmkQ",
      download_url: DogalgazMain
    },

  ];

  let mobileBreakPoints = {
    stagePadding: {
      paddingLeft: 16, // in pixels
      paddingRight: 16
    },
    showSlideInf: true,
    responsive: {
      270: {
        items: 2
      },
      400: {
        items: 2
      },
      500: {
        items: 2
      },
      820: {
        items: 3
      },
      1100: {
        items: 2
      },
      1330: {
        items: 2
      }
    }
  };

  let desktopBreakpoints = {
    stagePadding: {
      paddingLeft: 20, // in pixels
      paddingRight: 20
    },
    responsive: {
      270: {
        items: 1
      },
      400: {
        items: 2
      },
      500: {
        items: 3
      },
      820: {
        items: 3
      },
      1100: {
        items: 5
      },
      1330: {
        items: 5
      }
    }
  };

  let options = {
    mouseTrackingEnabled: true,

  };
  let aliceRef = useRef();
  const [isloadingSlide, setloadingSlide] = useState(false);
  let [state, setState] = useState({
    currentIndex: 0,
    itemsInSlide: 5
  });



  const slidePrevPage = () => {
    aliceRef.current.slidePrev(event => {
      const { itemsInSlide, item } = event;


      setState(prev => ({ ...prev, itemsInSlide, currentIndex: item }));

    })

  };

  const slideNextPage = () => {
    aliceRef.current.slideNext(event => {
      const { itemsInSlide, item } = event;


      setState(prev => ({ ...prev, itemsInSlide, currentIndex: item }));

    })
  };


  const handleOnSlideChange = event => {
    const { itemsInSlide, item } = event;


    setState(prev => ({ ...prev, itemsInSlide, currentIndex: item }));

  };

  const sliderOptions = {
    ...options,
    ...(props.isMobile ? mobileBreakPoints : desktopBreakpoints)
  };




  return (
    <div className='sldier-section'>
      <SectionHeader >Hizmetlerimizi <strong><u>Keşfet</u></strong></SectionHeader>
      <>
        <div className="slider-container">
          <div className="button">
            <button onClick={slidePrevPage}>
              <img src={Pre} alt="pre" />

            </button>

          </div>
          <div className="slider">


            <Fragment>
              <AliceCarousel

                paddingLeft={16}
                paddingRight={16}
                startIndex={state.currentIndex}
                slideToIndex={state.currentIndex}
                onInitialized={handleOnSlideChange}
                onSlideChanged={handleOnSlideChange}
                onResized={handleOnSlideChange}
                {...sliderOptions}
                keysControlDisabled
                touchTracking
                ref={aliceRef}
                disableDotsControls
                disableButtonsControls
              >
                {data.map(d => {
                  return (
                    <ServiceItem
                      setMainList={setMainList}
                      mainList={mainList}
                      scrollPosition={scrollPosition}
                      download_url={d.download_url}
                      item={d}
                      key={d.id}
                    />
                  );
                })}
              </AliceCarousel>
            </Fragment>
          </div>
          <div className="button">
            <button onClick={slideNextPage}>
              <img src={Next} alt="pre" />
            </button>

          </div>
        </div>

      </>



    </div>
  )
}

export default MainSliderAlt
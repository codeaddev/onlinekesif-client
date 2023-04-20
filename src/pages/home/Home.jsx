import React, { useContext, useState } from "react";
import "./home.scss";
import { useEffect } from "react";
import { CloudContext } from "../../context/cloudContext";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import HomeAlert from "../../components/homeAlert/HomeAlert";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";
import HowWeDo from "../../components/howWeDo/HowWeDo";
import Advantages from "../../components/advantages/Advantages";
import BlogSection from "../../components/BlogSection/BlogSection";
import MainSlider from "../../components/MainSlider/MainSlider";
import JestServiceComponent from "../../components/JetService/JestServiceComponent";

function Home({
  setErrorMessage,
  errorMessage,
  successMessage,
  setSuccessMessage,
  setMainList,
}) {
  const { questionData } = useContext(CloudContext);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMainList({});
  }, []);

  return (
    <div className="home">
      <HomeAlert
        setErrorMessage={setErrorMessage}
        setSuccessMessage={setSuccessMessage}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
      <div className="homeContainer">
        <HomeHeader
          setMainList={setMainList}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          wordEntered={wordEntered}
          setWordEntered={setWordEntered}
          show={show}
          setShow={setShow}
        />
        <MainSlider questionData={questionData} setMainList={setMainList} />

        <JestServiceComponent />
        <WhatWeDo />
        <HowWeDo />
        <Advantages />
        <BlogSection />
        <backToButton />
        {/* <KPUSection/> */}
        {/* <LastJobs/>  */}
      </div>
    </div>
  );
}

export default Home;

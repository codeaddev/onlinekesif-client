import React, { useContext, useState } from "react";
import { searchAreaData } from "../data/searchAreaData";
import { CloudContext } from "../../context/cloudContext";
import { KombiData } from "../data/KombiDataBase";
import { useNavigate } from "react-router-dom";
import { KlimaData } from "../data/KlimaDataBase";
import { KazanData } from "../data/KazanDataBase";
import Select from "react-select";

const HeaderSearch = ({
  setFilteredData,
  setWordEntered,
  show,
  setShow,
  setMainList,
}) => {
  const colourStyles = {
    control: (base) => ({
      ...base,
      background: "#fff",
      padding: 10,
      borderRadius: 12,
      margin: 0,
    }),
    singleValue: (base) => ({
      ...base,
      color: "#000",
    }),
    input: (base) => ({
      ...base,
      color: "#000",
    }),
  };

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = searchAreaData.filter((value) => {
  //     return value.label.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setShow(true);
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };
  let navigate = useNavigate();
  const handleList = (value) => {
    if (value.cat === "Kombi") {
      setMainList({ list: KombiData.questions, mainWish: "Kombi" });
      navigate("hizmet-olustur");
    } else if (value.cat === "Klima") {
      setMainList({ list: KlimaData.questions, mainWish: "Klima" });
      navigate("hizmet-olustur");
    } else if (value.cat === "Kazan") {
      setMainList({ list: KazanData.questions, mainWish: "Kazan" });
      navigate("hizmet-olustur");
    } else {
      navigate("hizmetler");
    }
  };
  const [text, setText] = useState("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={`search ${show ? "high" : "blank"}`}>
      <Select
        className="input"
        placeholder="Talebinizden kısaca bahsedin..."
        styles={colourStyles}
        options={searchAreaData}
        isSearchable={true}
        onChange={(e) => {
          //setShow(false)
          handleList(e);
          setWordEntered(e.cat);
          setText(e.label);
        }}
        value={text}
        //defaultInputValue="Bursa"
        //defaultValue="Bursa"
      />
      {/* <div className="search-row">
            
          <input
          placeholder='Talebinizden kısaca bahsedin'
          className='input'
          value={wordEntered}
                onChange={handleFilter}
          />
          <img src={Divider} alt="" />
          <img src={SearchIcon} alt="" />
          </div>
          {filteredData.length !==0 && show&&(
          <div className="dataResult">

            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a 
                key={key}
                className="dataItem"
                onClick={(e)=>{
                  setShow(false)
                  handleList(value)
                  setWordEntered(value.label)
                 
                }}>
                  <p>{value.label}</p>
                </a>
              );
            })}
          </div>
        )} */}
    </div>
  );
};

export default HeaderSearch;

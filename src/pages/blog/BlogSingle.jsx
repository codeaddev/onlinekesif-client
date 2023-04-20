import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CloudContext } from "../../context/cloudContext";
import "./blogSingle.scss";
import Time from "./svg/time.svg";
const BlogSingle = () => {
  const { state } = useLocation();

  const { handleDataViwed } = useContext(CloudContext);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (state) {
        handleDataViwed("Blogs", state.doc);
      }
    }, 3000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="blog-single">
      <div className="blog-single-container">
        <div className="blog-container">
          <div className="main-content">
            <div className="content-item">
              <h1>{state.summary.title}</h1>
              <p>{state.summary.subtitle}</p>
              <div className="info-row">
                <label>
                  <span>Yazan : {state.author}</span>
                </label>
                <label>
                  <img src={Time} alt="" />
                  <span>
                    {new Date(
                      state?.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </span>
                </label>
                <label>
                  <span>Okunma Sayısı : {state.viewed.length}</span>
                </label>
                <label>
                  <img src={Time} alt="" />
                  Okuma Süresi : <span>{state.readTime} dakika</span>
                </label>
              </div>
              <img src={state.summary.img} alt={state.summary.imgAlt} />
            </div>
            {state.subjects.map((i) => {
              return (
                <div key={i.id} className="content-item">
                  <h2>{i.title}</h2>

                  {i.order.map((k) => {
                    return (
                      <>
                        {k === "text" ? <p key={i.id}>{i.text}</p> : null}

                        {k === "img" ? (
                          <img src={i.img} alt={i.imgAlt} />
                        ) : null}
                        {k === "li" ? (
                          i.liType === "ordered" ? (
                            <ol>
                              {i.li.map((li) => {
                                return <li key={li}>{li}</li>;
                              })}
                            </ol>
                          ) : i.liType === "unordered" ? (
                            <ul>
                              {i.li.map((li) => {
                                return <li key={li}>{li}</li>;
                              })}
                            </ul>
                          ) : i.liType === "p" ? (
                            i.li.map((li) => {
                              return <p key={li}>{li}</p>;
                            })
                          ) : (
                            i.li.map((li) => {
                              return <p key={li}>{li}</p>;
                            })
                          )
                        ) : null}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="side-banner">
            <div className="banner-area">
            {firmAds.concat(firmAds).filter(f=>f.isVer).map(i=>{return(
            <div key={i.id} className="ad-banner">
                <img src={i.img} alt="" />
            </div>)})}
            </div>
            
        </div> */}
      </div>
    </div>
  );
};

export default BlogSingle;

import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import "./Guidance.scss"
import { Howto, SSS, Support } from '../../components/data/SSS'
import GuidanceCard from './GuidanceCard'
const Guidance = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
let navigate = useNavigate()
  
  const [selectedSubject,setSelectedSubject]=useState({id:"01",label:"Bilgilendirme",state:"SSS"})
  const [selected,setSelected]=useState()
  const list=[
    {id:"01",label:"Bilgilendirme",state:"SSS"},
    {id:"02",label:"Destek ve Yardım",state:"CCC"},
    {id:"03",label:"Teklif ve İş Akışı",state:"HHH"},
    
  ]
  return (
          <div className='page-container'>
            <div className="wrapper">
                <div className="guidance">
                      <section>
                        <div className="sectionTitle">Yardım</div>
                          <div className="subjects">
                            {list.map(i=>{
                              return(
                                <div
                                onClick={()=>setSelectedSubject(i)}
                                className={`coll ${i.state===selectedSubject?.state?"selected":"non-selected"}`}
                                key={i.id}>
                                  {i.label}
                                </div>
                              )
                            })}
                          </div>
                          
                          
                      </section>
                  
                  <div className="guidance-page">
                      <Navbar title={selectedSubject.label}/>
                      
                      <div className="content">
                        {selectedSubject.state==="SSS"&&
                          SSS.map(i=>{
                            return(
                              <GuidanceCard item={i} selected={selected} setSelected={setSelected} />
                            )
                          })
                        }
                        {selectedSubject.state==="CCC"&&
                          Support.map(i=>{
                            return(
                              <GuidanceCard item={i} selected={selected} setSelected={setSelected} />
                            )
                          })
                        }
                        {selectedSubject.state==="HHH"&&
                          Howto.map(i=>{
                            return(
                              <GuidanceCard item={i} selected={selected} setSelected={setSelected} />
                            )
                          })
                        }
                      </div>
                  </div>

                </div>
            </div>
              

          </div>

  )
  
}
export default Guidance
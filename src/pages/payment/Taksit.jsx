import React, { useState } from 'react'

const Taksit = () => {
    var money=100
    const taksits=[
        {id:"01",count:"Tek Çekim",payment:`${money} TL`},
        {id:"02",count:2,payment:`${((money)*0.19)+(money/2)} TL`},
        {id:"03",count:3,payment:`${money} TL`},
        {id:"04",count:4,payment:`${money} TL`},
        {id:"05",count:5,payment:`${money} TL`},
        {id:"06",count:6,payment:`${money} TL`},
        {id:"07",count:7,payment:`${money} TL`},
        {id:"08",count:8,payment:`${money} TL`},
        {id:"09",count:9,payment:`${money} TL`},
        {id:"10",count:10,payment:`${money} TL`},
        {id:"11",count:11,payment:`${money} TL`},
        {id:"12",count:12,payment:`${money} TL`},
    ]
    const [selectedInstallment,setSelectedInstallment]=useState(taksits[0])
    const handleOnChangeRadio=(item)=>{
        setSelectedInstallment(item)
    }
  return (
    <div className='taksit'>
        <table>
            <thead>
                <th >Taksit Sayısı</th>
                <th>Aylık Ödeme</th>
            </thead>
            <tbody>
                {taksits.map(i=>{
                    return(
                        <tr 
                        className={selectedInstallment.id===i.id?"selected":"nonselected"}
                        key={i.id}>
                            <td
                            style={{cursor:"pointer",display:"flex",alignItems:"center",gap:16}}
                            onClick={()=>handleOnChangeRadio(i)}
                            ><input 
                            type="radio"
                            
                            checked={selectedInstallment.id===i.id?true:false}
                            /> <span>{i.count}</span></td>
                            <td>{i.payment}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Taksit
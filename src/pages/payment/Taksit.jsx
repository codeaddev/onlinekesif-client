import React, { useState } from 'react'

const Taksit = ({installments}) => {
    const [selectedFamily,setSelectedFamily]=useState([])
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

    var families=[
        {id:"01",field:"advantage",label:"Advantage",svg:""},
        {id:"02",field:"axess",label:"Axess",svg:""},
        {id:"03",field:"bonus",label:"Bonus",svg:""},
        {id:"04",field:"cardfinans",label:"CardFinans",svg:""},
        {id:"05",field:"combo",label:"Combo",svg:""},
        {id:"06",field:"maximum",label:"Maximum",svg:""},
        {id:"07",field:"paraf",label:"Paraf",svg:""},
        {id:"08",field:"saglamkart",label:"Sağlam Kart",svg:""},
        {id:"09",field:"world",label:"World",svg:""},
        {id:"10",field:"yurtdısı",label:"Yurtdışı",svg:""},
    ]

    const handleOnChangeFamily=(e)=>{
        var newArray= installments.filter(i=>i.label===e.target.value)
        setSelectedFamily(newArray)
    }
  return (
    <div className='taksit'>
        <div className="taksit-selector">
                <h3>Taksit Seçenekleri</h3>
                <select
                onChange={handleOnChangeFamily}
                >
                    <option disabled selected value>-- kart tipini seçiniz --</option>
                    {families.map(i=>{
                        return(
                            <option>{i.label}</option>
                        )
                    })}
                </select>
                <select
                onChange={handleOnChangeFamily}
                >
                    <option disabled selected value>-- taksit sayısını seçiniz --</option>
                    {taksits.map(i=>{
                        return(
                            <option>{i.count}</option>
                        )
                    })}
                </select>

        </div>
        

        {/* <table>
            <thead>
                <th >Firma</th>
                <th >Taksit Sayısı</th>
                <th>Aylık Ödeme</th>
            </thead>
            <tbody>
                
                {installments&&filteredArray.map((i,index)=>{
                    return(
                        <tr 
                        className={selectedInstallment.FAMILY+selectedInstallment.INSTALLMENT===i.FAMILY+i.INSTALLMENT?"selected":"nonselected"}
                        key={i.index}>
                            <td>{i?.FAMILY}</td>
                            <td
                            style={{cursor:"pointer",display:"flex",alignItems:"center",gap:16}}
                            onClick={()=>handleOnChangeRadio(i)}
                            ><input 
                            type="radio"
                            
                            checked={selectedInstallment.FAMILY+selectedInstallment.INSTALLMENT===i.FAMILY+i.INSTALLMENT?true:false}
                            /> <span>{i?.INSTALLMENT}</span></td>
                            <td>{i?.RATE}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> 
    */}
    </div>
  )
}

export default Taksit
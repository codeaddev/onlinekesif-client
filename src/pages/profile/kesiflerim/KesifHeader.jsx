import React from 'react'

function KesifHeader({
    list,
    onClick,
    setSelectedList,
    selectedList
}) {
const isSelected=(item)=>{
    return selectedList.label===item.label?"selected":"non-selected"
}
  return (
    <div className='kesif-header'>
        <div className="left">
            {list.map(i=>{
                return(
                    <div 
                    key={i.id}
                    onClick={()=>setSelectedList({label:i.label,list:i.data})}
                    className={`header-label ${isSelected(i)}`}>
                        <span>{i.label}</span>
                        <div className={`down-bar ${isSelected(i)}`}></div>
                    </div>
                    
                )
            })}
        </div>
        
            <button
            onClick={onClick}
            className='add-new'
            >+ Yeni Teklif</button>
        
    </div>
  )
}

export default KesifHeader
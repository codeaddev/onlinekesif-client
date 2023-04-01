import { Backdrop, Box, Fade, Hidden, Modal, Typography } from '@mui/material'

import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { KazanList } from '../../../components/data/KazanList'
import { KlimaList } from '../../../components/data/KlimaList'
import { KombiList } from '../../../components/data/questions'
import Footer from '../../../components/footer/Footer'
import Sidebar from '../../../components/sidebar/Sidebar'
import { CloudContext } from '../../../context/cloudContext'
import KesifHeader from './KesifHeader'
import "./kesiflerim.scss"

import { DataGrid } from '@mui/x-data-grid';
import { LocaleText } from '../../../components/data/dataTable/localeText'
import { statues } from '../../../components/data/statues'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import LaunchIcon from '@mui/icons-material/Launch';
import BreadCrumb from '../BreadCrumb'

function Kesiflerim({
  setMainList,

}) {
  const { myJobs } = useContext(CloudContext)
  const [open, setOpen] = useState(false)
  const [selectedList, setSelectedList] = useState({ label: "Tüm Teklifler", list: myJobs, })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let TLLocale=Intl.NumberFormat("tr-TR")

  const headerList = [
    { id: "01", label: "Tüm Teklifler", data: myJobs },
    { id: "02", label: "Keşif Aşaması", data: myJobs.filter(i => !i.statue===0) },
    { id: "03", label: "Teklif Aşamasında", data: myJobs.filter(i => i.statue!==0&&i.statue!==6) },
    { id: "04", label: "Tamamlandı", data: myJobs.filter(i => i.completed) },
    { id: "05", label: "Başarısız", data: myJobs.filter(i => i.expired||i.statue===4||i.statue===5) },
  ]
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  };
  const stylein = {

    display: "flex",
    bgcolor: 'background.paper',
    p: 1,
    gap: 1,
    alignItems:"center",
    justifyContent:"center",
    


  };
  const styleone = {
    border: '1px solid #000',
    display: "flex",
    bgcolor: 'background.paper',
    p: 2,
    borderRadius:1,
    alignItems:"center",
    justifyContent:"center",
    cursor: "pointer",


  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const MainCom = [
    { id: "1", label: "Kombi", array: KombiList },
    { id: "2", label: "Kazan", array: KazanList },
    { id: "3", label: "Klima", array: KlimaList }
  ]
  let navigate = useNavigate()

  const columns = [
    {
      field: 'id',
      headerName: 'Keşif ID',
      headerAlign: 'center',
      headerClassName: 'column-header',
      align: "center",
      maxWidth: 120,
      renderHeader: () => {
        return (
          <div>Keşif ID</div>
        )
      },
      flex: 1
    },

    {
      field: 'createdAt',
      headerName: 'Tarih / Zaman',
      //width: 100,
      description: 'Hizmet talebinizi girdiğiniz tarihi gösterir.',
      headerAlign: 'center',
      headerClassName: 'column-header',
      align: "center",
      flex: 0.8,
      renderHeader: () => {
        return (
          <div>Tarih/Zaman</div>
        )
      },
      valueGetter: (params) =>
        `${new Date(params?.row.createdAt.seconds * 1000).toLocaleDateString()}`,
    },

    {
      field: 'mainWish',
      headerName: 'Keşif Kategorisi',
      type: 'number',
      headerAlign: 'center',
      headerClassName: 'column-header',
      sortable: false,
      align: "center",
      description: 'Hizmet talebinizin kategorisidir.',
      flex: 0.7,
      renderHeader: () => {
        return (
          <div>Keşif Kategorisi</div>
        )
      },

    },
    {
      field: 'adress',
      headerName: 'Adres Bilgileri',
      description: 'Hizmeti verilmesini istediğiniz adresi gösterir.',
      sortable: false,
      headerAlign: 'center',
      headerClassName: 'column-header',
      cellClassName: 'table-rows',
      align: "center",
      width: 100,
      flex: 1,
      renderHeader: () => {
        return (
          <div>Adres Bilgileri</div>
        )
      },
      valueGetter: (params) =>
        `${params?.row.region + "/" + params?.row.city} `,
    },
    {
      //field: '',
      headerName: 'Teklif Fiyatı',

      description: 'Teklif yapan firmalar arasında en çok ve en az fiyatı gösterir. 1 teklif varsa yalnızca o teklif fiyatını gösrerir.',
      sortable: false,
      width: 100,
      headerAlign: 'center',
      headerClassName: 'column-header',
      align: "center",
      flex: 1,
      renderHeader: () => {
        return (
          <div>Teklif Fiyatı</div>
        )
      },
      renderCell: props => {
        let TLLocale = Intl.NumberFormat('tr-TR');
        var array=props?.row.Offers?.map(i=>i.totalPrice)
        return (
          <div
          className='offered-prices-list'
          >{props.row.Offers.length > 0&&props.row.Offers.length <3 ?
            
            
              
              
                <span
                  className='offered-prices'
                 
                >{TLLocale.format(Math.min(...array))}₺ | {TLLocale.format(Math.max(...array))}₺</span>
              
            
            :
            props.row.Offers.length >= 3?
            <span>{TLLocale.format(Math.min(...array))}₺ ... {TLLocale.format(Math.max(...array))}₺</span>
            :<span>Henüz Teklif Yok</span>
          }</div>
        )
      }
    },
    {
      field: 'statue',
      headerName: 'Durum',
      sortable: false,

      headerAlign: 'center',
      headerClassName: 'column-header',
      align: "center",
      width: 100,
      flex: 1,
      renderHeader: () => {
        return (
          <div>Durum</div>
        )
      },

      renderCell: props => {
        return (
          <div

            className={`statue ${statues[props.row.statue].class}`}

          >{statues[props.row.statue].label}</div>
        )
      }
    },
    {
      field: 'fullName',
      headerName: 'Teklif Sayısı',
      sortable: false,
      width: 100,
      headerAlign: 'center',
      headerClassName: 'column-header',
      align: "center",
      renderHeader: () => {
        return (
          <div>Teklif Sayısı</div>
        )

      },
      flex: 0.6,
      valueGetter: (params) =>
        `${params.row?.Offers.length}`,
    },
    {
      field: ' ',
      headerName: ' ',
      sortable: false,
      width: 100,
      flex: 1,
      align: "center",

      renderCell: props => {
        return (
          <NavLink
            to={`${props.row.mainWish + "-" + props.row.id}`} state={props.row}
            className='view-button'
          >Görüntüle </NavLink>
        )
      }
    },
  ];
  const columnsMobile = [
   



    {
      field: 'mainWish',
      headerName: 'Keşif Kategorisi',
      type: 'number',
      headerAlign: 'center',
      headerClassName: 'column-header',

      sortable: false,
      align: "center",
      description: 'Hizmet talebinizin kategorisidir.',
      flex: 1,
      renderHeader: () => {
        return (
          <div>Keşif Kategorisi</div>
        )
      },

    },

    {
      //field: '',
      headerName: 'Teklif Fiyatı',

      description: 'Teklif yapan firmalar arasında en çok ve en az fiyatı gösterir. 1 teklif varsa yalnızca o teklif fiyatını gösrerir.',
      sortable: false,
      width: 100,
      headerAlign: 'center',
      headerClassName: 'column-header',

      align: "center",
      flex: 1,
      renderHeader: () => {
        return (
          <div>Teklif Fiyatı</div>
        )
      },
      renderCell: props => {
        return (
          <div>{props.row.Offers.length > 0 ?
            props.row.Offers.map(i => {
              return (
                <span
                className='offered-prices mobile'
                  key={i.id}
                >{ TLLocale.format(i.totalPrice)} ₺</span>
              )
            })
            : <span className='non-offered-prices'>Henüz Teklif Yok</span>
          }</div>
        )
      }
    },
    {
      field: 'statue',
      headerName: 'Durum',
      cellClassName: "cell-statue",
      sortable: false,

      headerAlign: 'center',
      headerClassName: 'column-header',
      align: "center",
      width: isMobile ? 150 : 100,
      flex: 1,
      renderHeader: () => {
        return (
          <div>Durum</div>
        )
      },

      renderCell: props => {
        return (
          <div

            className={`statue ${statues[props.row.statue].class}`}

          >{statues[props.row.statue].label}</div>
        )
      }
    },

    {
      field: 'doc',
      headerName: ' ',
      sortable: false,
      flex: isMobile?0.3:1,
      align: "center",

      renderCell: props => {
        return (
          <>
          <NavLink
            to={`${props.row.mainWish + "-" + props.row.id}`} state={props.row}
            className='view-button'
          >{isMobile?<LaunchIcon/>:Görüntüle}</NavLink>
          </>
        )
      }
    },
  ];

  const pages=[
    {id:"01",label:"Profil",route:"/profil",link:true,after:true},
    {id:"02",label:"Keşiflerim",route:"/profil/kesiflerim",link:true},
  ]

  return (

    <div
      className='kesiflerim'
    >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" align='center'>
              Servis İhtiyacınız Hangisi
            </Typography>

            <Box
              sx={stylein}
            >
              {MainCom.map(i => {
                return (
                  <Box
                    onClick={() => {
                      setMainList({ list: i.array, mainWish: i.label })
                      navigate("/hizmet-olustur")
                    }}
                    sx={styleone}
                    key={i.id}>
                    {i.label}
                  </Box>
                )
              })}

            </Box>


          </Box>
        </Fade>
      </Modal>

      <div className="kesiflerim-container">
        <Hidden />
        <Sidebar />
        <div className="kesiflerim-inner-container">
          <BreadCrumb pages={pages} />
          <KesifHeader
            setSelectedList={setSelectedList}
            selectedList={selectedList}
            onClick={handleOpen}
            list={headerList}
          />
          <Box sx={{ height: 500, flex: 1, display: "flex", alignItems: 'flex-start' }}>
            <DataGrid
              rows={selectedList.list.filter(i => !i.cancelled)}
              columns={isMobile | window.innerWidth < 800 ? columnsMobile : columns}
              pageSize={7}
              getRowId={(row)=>row.id}
              pagination
              getRowHeight={()=>"auto"}
              autoHeight
              onRowClick={(row)=>{
                if(row){
                  console.log(row.row.mainWish)
                  navigate(`${row.row.mainWish + "-" + row.id}`,{state:row.row })
                }
                }}
              //checkboxSelection
              localeText={LocaleText}
              disableSelectionOnClick
            />
          </Box>
        </div>
      </div>

    </div>
  )
}

export default Kesiflerim

//LS6D3JGX 
import React,{useState} from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose,MdOutlineSmartToy } from "react-icons/md";
import { Link } from "react-router-dom";
import {FiSmartphone} from "react-icons/fi"
import {TfiWindow} from "react-icons/tfi"
import {AiOutlineDesktop,AiOutlineCar} from "react-icons/ai"
import {IoGameControllerOutline,IoFootball,IoShirtOutline} from "react-icons/io5"
import {CgSmartHomeRefrigerator} from "react-icons/cg"
import {SlScreenDesktop} from "react-icons/sl"
import {BiDish} from "react-icons/bi"
import {GiWindow,GiToyMallet,GiHairStrands} from "react-icons/gi"
import {HiOutlineBuildingOffice2} from "react-icons/hi2"
import {TbBooks} from "react-icons/tb"
// language
import { useTranslation, } from 'react-i18next';
import {  Row,Col } from 'react-bootstrap';

const data = [
  {
    id:1,
    name:"Kitoblar",
    icon:<TbBooks size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Badiiy adabiyotlar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          },
          {
            id:2,
            name:"Jahon Adabiyotlar"
          },
          {
            id:3,
            name:"Uzbek Adabiyoti"
          }
        ]
      },
      {
        id:2,
        name:"Bolalar adabiyoti",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:3,
        name:"Abituriyentlar uchun adabiyotlar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:4,
        name:"Siyosat",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:5,
        name:"Asaxiy books kitoblari",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:6,
        name:"Diniy adabiyotlar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:7,
        name:"TOP-100 bestsellar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:8,
        name:"Biografiya",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:9,
        name:"Psixologiya va shaxsiy rivojlanish",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:10,
        name:"Rus tilidagi kitoblar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:11,
        name:"Bestsellar to'plami",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:12,
        name:"O'quv qurollari",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:13,
        name:"Ilm-fan va darslikalr",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:14,
        name:"Detektiv va fantastika",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:15,
        name:"Turk adabiyoti",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
      {
        id:16,
        name:"Biznes kitoblar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          }
        ]
      },
    ]
  },
  {
    id:2,
    name:"Telefon va gatjetlar",
    icon:<FiSmartphone size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Telefonlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar",
          },
          {
            id:2,
            name:"Tugmachali telefonlar",
          },
          {
            id:3,
            name:"Smartfonlar",
          },
          {
            id:4,
            name:"Radiotelefonlar",
          },
          {
            id:5,
            name:"Kabelli telefonlar",
          },
        ]
      },
      {
        id:2,
        name:"Fakslar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar",
          }
        ]
      },
      {
        id:3,
        name:"Audiotexnika va quloqchinlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar",
          },
          {
            id:2,
            name:"Barcha mahsulotlar"
          },
          {
            id:3,
            name:"Simsiz quloqchinlar"
          },
          {
            id:4,
            name:"Quloqchinlar"
          },
          {
            id:5,
            name:"Ko'chma akustika mahsulotlari"
          },
          {
            id:6,
            name:"Mikrofonlar"
          },
          {
            id:7,
            name:"Diktofonlar"
          },
        ]
      },
      {
        id:4,
        name:"Planshetlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar",
          },
          {
            id:2,
            name:"Planshet uchun g'iloflar",
          },
        ]
      },
      {
        id:5,
        name:"Smartfonlar va planshetlar uchun aksessuarlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar",
          },
          {
            id:2,
            name:"Smartfonlar uchun himoya oynalari"
          },
          {
            id:3,
            name:"Simsiz zaryadlovchi qurilmalar"
          },
          {
            id:4,
            name:"Telefonlar uchun g'iloflar"
          },
          {
            id:5,
            name:"O'yin uchun gatjetlar"
          },
          {
            id:6,
            name:"Tashqi akkumlyator"
          },
          {
            id:7,
            name:"Adapterlar"
          },
          {
            id:8,
            name:"Avtomobil uchun aksessuarlar"
          },
          {
            id:9,
            name:"Stiluslar"
          },
          {
            id:10,
            name:"Gatjetlarni tozalash uchun"
          },
          {
            id:7,
            name:"Smartfon planshetlar uchun g'iloflar"
          },
        ]
      },
      {
        id:6,
        name:"Elektron kitoblar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          }
        ]
      },
      {
        id:7,
        name:"Smart soatlar vabrasletlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Smart-soatlar"
          },
          {
            id:3,
            name:"Bolalar uchun smart soatlar"
          }
        ]
      },
      {
        id:8,
        name:"Virtual reallik ko'zoynaklar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
    ],
  },
  {
    id:3,
    name:"Konditsionerlar",
    icon:<TfiWindow size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:4,
    name:"Kompyuter va orgtexnika",
    icon:<AiOutlineDesktop size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Noutbuk va aksessuarlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Noutbuklar"
          },
          {
            id:3,
            name:"Noutbuk uchun sumkalar"
          },
          {
            id:4,
            name:"Noutbuk uchun bowerbank"
          },
          {
            id:5,
            name:"Noutbuklar uchun zaryadlovchi qurilmalar"
          },
          {
            id:6,
            name:"Noutbuk uchun taglikalr"
          },
        ]
      },
      {
        id:2,
        name:"Monitorlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Monitorlar uchun kronshteynlar"
          },
        ]
      },
      {
        id:3,
        name:"Kompyuter jihozlari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Videokartalar"
          },
          {
            id:3,
            name:"Operativ xotira"
          },
          {
            id:4,
            name:"Uzluksiz quvvat manbalari"
          },
          {
            id:5,
            name:"Quvvat manbalari"
          },
          {
            id:6,
            name:"Tashqi optik drayverlar DVD RW"
          },
          {
            id:7,
            name:"Veb-kameralar"
          },
          {
            id:8,
            name:"Tizim platalari"
          },
          {
            id:9,
            name:"Protsessorlar"
          },
          {
            id:10,
            name:"Suv kulleralri"
          },
          {
            id:11,
            name:"Kompyuter korpuslari"
          },
          {
            id:12,
            name:"Kompyuter korpus kullerlari"
          },
        ]
      },
      {
        id:4,
        name:"Kameralar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          }
        ]
      },
      {
        id:5,
        name:"Axborot tashuvchi qurilmalar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Xotira kartalari"
          },
          {
            id:3,
            name:"Qattiq disklar,SSD va tarmoq adapterlari"
          },
          {
            id:4,
            name:"Kompyuter uchun qattiq disklar"
          },
          {
            id:5,
            name:"Tashqi qattiq disklar"
          },
          {
            id:6,
            name:"USB felshkalar"
          },
        ]
      },
      {
        id:6,
        name:"Modern,routerlar va tarmoq jihozlari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Tarmoq adapterlari"
          },
          {
            id:3,
            name:"ADSL modemlari"
          },
          {
            id:4,
            name:"WIFI routerlari"
          },
          {
            id:5,
            name:"WI-Fi adapterlari"
          },
          {
            id:6,
            name:"WI-FI kuchatytirgichlar"
          },
        ]
      },
      {
        id:7,
        name:"Kompyuter agustika vositalari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          }
        ]
      },
      {
        id:8,
        name:"Kompyuter Uchun aksessuarlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Quvvat ta'minoti"
          },
          {
            id:3,
            name:"Kabellar va adapterlar "
          },
        ]
      },
      {
        id:9,
        name:"Sichqoncha va klaviaturalar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          }
        ]
      },
      {
        id:10,
        name:"Kompyuterlar va Monobloklar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          }
        ]
      },
      {
        id:11,
        name:"Ofis jihozlari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Printerlar va skanerlar"
          },
        ]
      },
      {
        id:12,
        name:"Geymer ustunlari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          }
        ]
      },
    ],
  },
  {
    id:5,
    name:"Geymerlar uchun",
    icon:<IoGameControllerOutline size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Garnitura va quloqchinlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:2,
        name:"O'yin kreslolar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:3,
        name:"Gamepadlar va jostiklar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:4,
        name:"Quloqchinlar uchun tagliklaar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:5,
        name:"O'yin klaviaturalari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:6,
        name:"O'yin pristavkalari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
          {
            id:2,
            name:"Playstation"
          },
        ]
      },
      {
        id:7,
        name:"Kabellar uchun ushlagichlar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:8,
        name:"Igravoy stollar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:9,
        name:"O'yin sichqonchalari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:10,
        name:"Virtuall reallik ko'zoynaklar",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:11,
        name:"Himoya ko'zoynaklari",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
      {
        id:12,
        name:"Grafik planshetlar ",
        submenu:[
          {
            id:1,
            name:"Barcha mahsulotlar"
          },
        ]
      },
    ],
  },
  {
    id:6,
    name:"Maishiy texnika",
    icon:<CgSmartHomeRefrigerator size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:2,
        name:"Telefonlar",
        submenu:[]
      }
    ],
  },
  {
    id:7,
    name:"Televizor video va audio",
    icon:<SlScreenDesktop size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:2,
        name:"Telefonlar",
        submenu:[]
      }
    ],
  },
  {
    id:8,
    name:"Idish tovoqlar",
    icon:<BiDish size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:2,
        name:"Telefonlar",
        submenu:[]
      }
    ],
  },
  {
    id:9,
    name:"Mebel",
    icon:<GiWindow size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:10,
    name:"Sport va dam olish",
    icon:<IoFootball size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:11,
    name:"Uy va offis uchun texnika jihozlari",
    icon:<HiOutlineBuildingOffice2 size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:12,
    name:"Avto",
    icon:<AiOutlineCar size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:13,
    name:"O'yinchoqlar, sovg'alar, va aksessuarlar",
    icon:<GiToyMallet size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:14,
    name:"Kiyim poyabzal va aksessuarlar",
    icon:<IoShirtOutline size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:15,
    name:"Bolalar uchun tovarlar",
    icon:<MdOutlineSmartToy size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
  {
    id:16,
    name:"Go'zallik va salomatlik",
    icon:<GiHairStrands size={25} style={{marginRight:"10px",}}/>,
    submenu:[],
  },
]

function Menu(){
  const [id,setId] = useState(1)
  return(
    <>
      <div className="container-menu">
        <div className="row">
          <div className="left col-3">
            <ul style={{flexDirection:"column"}}>
               {data.map((item)=>{
                 return (
                  <>
                    <div style={{display:"flex",alignItems:"center",justfiyContent:"center",cursor:"pointer"}}>
                      <li onMouseOver={()=>setId(item.id)} className={`${id==item.id && 'hover-category'}`}>{item.icon}{item.name}</li>
                    </div>
                  </>
                 )
               })}
            </ul>
           </div>
          <div className="right col-9">
            <Row style={{paddingLeft:"10px",paddingBottom:"70px"}}>
              {data[id-1].submenu?.map(item=>{
                  return(
                    <Col lg={3} md={3} >
                    <div className='right-menu-item'>
                        <h5 className='right-menu-hover-text' style={{cursor:"pointer",fontSize:"18px"}}>{item?.name}</h5>
                        <ul style={{display:"flex",flexDirection:"column",margin:"0px",padding:"0px"}}>
                          {item?.submenu?.map(item=><li className='right-menu-hover-text' style={{cursor:"pointer",marginTop:"10px",color:"gray",fontWeight:"400"}}>{item.name}</li>)}
                        </ul>
                    </div>
                    </Col>
                  )
                 })}
            </Row>
            </div>
        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open,setOpen] = useState(false)
  const openToggle=()=>{
    setOpen(!open)
  }
  return (
    <div className='header-navbar'>
        <ul>
            <li onClick={openToggle} style={{display:'flex',alignItems:'center'}}>{open?<MdOutlineClose size={23} style={{marginRight:'10px',color:"#008dff",cursor:'pointer'}}/>:<RxHamburgerMenu className='hamburger-menu' size={23} style={{marginRight:'10px',color:"#008dff",cursor:'pointer',}}/>}<Link to="/">{t('navbar.nav1')}</Link></li>
            <li><Link to='/news'>{t('navbar.nav2')}</Link></li>
            <li><Link to='/newProduct'>{t('navbar.nav3')}</Link></li>
            <li><Link to='/Discounts'>{t('navbar.nav4')}</Link></li>
            <li><Link to='/books'>{t('navbar.nav5')}</Link></li>
            <li><Link to='/telephones'>{t('navbar.nav6')}</Link></li>
            <li><Link to='/tv'>{t('navbar.nav7')}</Link></li>
            <li><Link to='/sports'>{t('navbar.nav8')}</Link></li>
        </ul>
        {open?<Menu/>:""}
        
    </div>
  )
}

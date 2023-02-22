import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../Cards/Card";
import { useTranslation, } from 'react-i18next';
import "./Section.css"


function Section() {
  const { t } = useTranslation();

  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json))
  },[])
  return (
    <Container fluid className='aside-container'>
      <Row>
        <Col md={3} xs={12} className="left-col">
          <div className="left-side-container">
            <div className="left-side-top-title">
              <h2>Kitoblar</h2>
              <img src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png" alt="" />
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//6358cb160c7db.jpg.webp" alt="" />
              <div className="left-side-title">
                <span>Piter Hopkirk: Katta o'yin. Ikki imperiya to'qnashuvi</span>
                <p>Asaxiy books kitoblari</p>
              </div>
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//63a3418b79531.jpg" alt="" />
              <div className="left-side-title">
                <span>"Asaxiy Books yil bestsellerlari 2022"</span>
                <p>Bestseller to'plamlar</p>
              </div>
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//63230a5982893.jpg.webp" alt="" />
              <div className="left-side-title">
                <span>Klaus Shvab: To'rtinchi sanoat inqilobi</span>
                <p>Asaxiy books kitoblari</p>
              </div>
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//629999705fc48.png.webp" alt="" />
              <div className="left-side-title">
                <span>Super chegirma. Ellikta mashhur kitob</span>
                <p>Bestseller to'plamlar</p>
              </div>
            </div>
            <div className="left-side-item" style={{border:"none"}}>
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//6384393a611c2.jpg.webp" alt="" />
              <div className="left-side-title">
                <span>Beshtasi birda va yetkazib berish bepul!</span>
                <p>Asaxiy books kitoblari</p>
              </div>
            </div>
          </div>
          {data['products']?.slice(9,12)?.map((item)=>
              <Col className="card-responsive"><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
          )}
        </Col>
        <Col md={9} xs={12}  className='right-col' >
          <Row > 
            <h5 style={{color:"#848896",}}>{t('Cardlang.card7')}</h5>
            {data['products']?.slice(0,8)?.map((item)=>
              <Col><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
            )}
              <h5 style={{color:"#848896",marginTop:"25px"}}>{t('Cardlang.card8')}</h5>
            {data['products']?.slice(10,18)?.map((item)=>
              <Col><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
            )}
              <h5 style={{color:"#848896",marginTop:"25px"}}>{t('Cardlang.card9')}</h5>
            {data['products']?.slice(18,26)?.map((item)=>
              <Col><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
            )}
              <h5 style={{color:"#848896",marginTop:"25px"}}>{t('Cardlang.card10')}</h5>
            {data['products']?.slice(8,16)?.map((item)=>
              <Col><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
            )}
           </Row>
        </Col>
      </Row>
    </Container>
     
  );
}

export default Section;
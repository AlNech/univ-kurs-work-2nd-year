import React from 'react'
import {Card, Col, Image, ListGroup, ListGroupItem} from "react-bootstrap";
import NavBar from "../components/NavBar";


function ProductPage() {
    const product =  {id:1, name:'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»', price:550,rating:4.2, img:"https://mosbasa.ru/upload/iblock/82f/82fd495bfcbafbfc8999a670081044f7.jpg"}
    const description = [
        {id:1,title:"Страна производителя", desription:"Россия"},
        {id:2,title:"Упаковка", desription:"180г"},       
    ]
   
    return (
        <div>
            <NavBar></NavBar>
            <Col md={9}>
                {product.name}
            </Col>
            <Col md={5}>
                <Image width={504} height={496} src={product.img}></Image>
            </Col>
            <Col md={4}>
                <div className="price-line">{product.price}</div>
                <div className="button-basket"><button>В корзину</button></div>
                <div className="desription">
                    <Card>
                        
                        <ListGroup>
                            {description.map((desc) =>
                                {return <ListGroupItem>
                                    <div className="card-description-title">{desc.title}</div>
                                    <div className="card-description-text">{desc.description}</div>
                                </ListGroupItem>}
                            )}
                            
                        </ListGroup>
                    </Card>
                </div>
            </Col>
            

        </div>
    )
}

export default ProductPage
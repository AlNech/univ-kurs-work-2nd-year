import React, { useContext, useState } from 'react';
import {Modal, Form, Button, Dropdown, FormControl, Col, Row} from "react-bootstrap";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {Context} from "../../index";
function CreateProduct({show, onHide}) {
  const {product} = useContext(Context);
  const [info, setInfo] = useState([]);


  const addInfo = () => {
    setInfo([...info, {title:'', description:'', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }
  

  return (
      <Modal show={show} onHide={onHide}>

        <Modal.Header closeButton>
          <Modal.Title>Добавить продукт</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <DropdownToggle>Выберите тип</DropdownToggle>
              <DropdownMenu>
                {product.types.map( type => {
                  return <DropdownItem key={type.id}>{type.name}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>

            <Dropdown className="mt-2 mb-2">
              <DropdownToggle>Выберите бренд</DropdownToggle>
              <DropdownMenu>
                {product.brands.map( brand => {
                  return <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>    
            
            <FormControl className="mt-2 mb-2" placeholder="Название продукта"/>
            <FormControl className="mt-2 mb-2" placeholder="Цена" type="number"/>
            <FormControl className="mt-2 mb-2"  type="file"/>
            <hr/>

            <Button 
              variant={"outline-dark"}
              onClick={addInfo}
            >
              Добавить новое описание
              </Button>
              {info.map(i => {
                return <Row className="mt-3" key={i.number}>
                  <Col md={6}>
                    <FormControl placeholder="Название характеристики" onChange={(e) => changeInfo('title', e.target.value, i.number)}/>
                  </Col>
                  <Col md={6}>
                    <FormControl placeholder="Описание" onChange={(e) => changeInfo('description', e.target.value, i.number)}/>
                  </Col>
                  <Col md={6}>
                    <Button variant={"outline-dark"} onClick={() => removeInfo(i.number)}>Удалить</Button>
                  </Col>
                </Row>
              })}
          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={onHide}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CreateProduct
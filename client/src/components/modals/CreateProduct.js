import React, { useContext, useState , useEffect} from 'react';
import {Modal, Form, Button, Dropdown, FormControl, Col, Row} from "react-bootstrap";
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {Context} from "../../index";
import {createProduct, fetchBrands, fetchProduct, fetchTypes} from "../../http/productApi";
import {observer} from 'mobx-react-lite';

const CreateProduct = observer(({show, onHide}) => {
  const {product} = useContext(Context);
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([]);

  useEffect(() => {
      fetchTypes().then(data => product.setTypes(data))
      fetchBrands().then(data => product.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title:'', description:'', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }


  const selectFile = e => {
      setFile(e.target.files[0])
  }


  const addProduct = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', product.selectedBrand.id)
    formData.append('typeId', product.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createProduct(formData).then(data => onHide())
}
console.log(product.selectedType.name )
  return (
      <Modal show={show} onHide={onHide}>

        <Modal.Header closeButton>
          <Modal.Title>Добавить продукт</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <DropdownToggle>{(product.selectedType.name) || "Выберите тип" }</DropdownToggle>
              <DropdownMenu>
                {product.types.map( type => {
                  return <DropdownItem 
                              onClick={() => product.setSelectedType(type)}
                              key={type.id}>
                             {type.name}
                          </DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>

            <Dropdown className="mt-2 mb-2">
              <DropdownToggle>{(product.selectedBrand.name) ||  "Выберите брэнд"}</DropdownToggle>
              <DropdownMenu>
                {product.brands.map( brand => {
                  return <DropdownItem
                            onClick={() => product.setSelectedBrand(brand)}
                            key={brand.id}>
                              {brand.name}
                    </DropdownItem>
                })}
              </DropdownMenu>
            </Dropdown>    
            
            <FormControl 
                        className="mt-2 mb-2" value={name}
                        onChange={e => setName(e.target.value)}
                         placeholder="Название продукта"/>


            <FormControl value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2 mb-2" placeholder="Цена" type="number"/>


            <FormControl onChange={selectFile} className="mt-2 mb-2"  type="file"/>
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
          <Button variant="outline-success" onClick={addProduct}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
)
export default CreateProduct
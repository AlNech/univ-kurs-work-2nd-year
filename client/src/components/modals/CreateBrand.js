import React, {useState} from 'react';
import {Modal, Form, Button} from "react-bootstrap";
import {createBrand} from "../../http/productApi";


function CreateBrand({show, onHide}) {
  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => {
        setValue('')
        onHide()
    })
}
  return (
    
    <Modal show={show} onHide={onHide}>

    <Modal.Header closeButton>
      <Modal.Title>Добавить брэнд</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Control placeholder="Введите брэнд" onChange={e => setValue(e.target.value)}>

        </Form.Control>
      </Form>
    </Modal.Body>


    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>
        Закрыть
      </Button>
      <Button variant="outline-success" onClick={addBrand}>
        Добавить
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CreateBrand
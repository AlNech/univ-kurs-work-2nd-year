import React from 'react';
import {Modal, Form, Button} from "react-bootstrap";

function CreateBrand({show, onHide}) {
  return (
    
    <Modal show={show} onHide={onHide}>

    <Modal.Header closeButton>
      <Modal.Title>Добавить брэнд</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Form>
        <Form.Control placeholder="Введите брэнд">

        </Form.Control>
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

export default CreateBrand
import React, {useState} from 'react'
import {Modal, Form, Button} from "react-bootstrap";
import {createType} from "../../http/productApi";

function CreateType({show, onHide}) {
  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data => {
        setValue('')
        onHide()
    })
}
  return (
    <Modal show={show} onHide={onHide}>

        <Modal.Header closeButton>
          <Modal.Title>Добавить тип</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Control placeholder="Введите тип" onChange={e => setValue(e.target.value)}>

            </Form.Control>
          </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>
            Закрыть
          </Button>
          <Button variant="outline-success" onClick={addType}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CreateType
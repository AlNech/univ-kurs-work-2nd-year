import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";
import NavBar from "../components/NavBar";

const Admin = () => {
    //Видимость модального окна
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);

    return (
        <Container>
            <NavBar></NavBar>
            <Button onClick={() => {setTypeVisible(true)}} varinant={"outline-dark"} className="mt-4 p-2">Добавить тип</Button>
            <Button onClick={() => {setBrandVisible(true)}} varinant={"outline-dark"} className="mt-4 p-2">Добавить бренд</Button>
            <Button onClick={() => {setProductVisible(true)}} varinant={"outline-dark"} className="mt-4 p-2">Добавить продукт</Button>
            <CreateType show={typeVisible} onHide={() => {setTypeVisible(false)}}/>
            <CreateBrand show={brandVisible} onHide={() => {setBrandVisible(false)}}/>
            <CreateProduct show={productVisible} onHide={() => {setProductVisible(false)}}/>
            
        </Container>
    );
}

export default Admin;
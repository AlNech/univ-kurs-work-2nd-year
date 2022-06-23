import React from "react";
import { Button, Container } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Admin = () => {
    return (
        <Container>
            <NavBar></NavBar>
            <Button varinant={"outline-dark"} className="mt-4 p-2">Добавить тип</Button>
            <Button varinant={"outline-dark"} className="mt-4 p-2">Добавить бренд</Button>
            <Button varinant={"outline-dark"} className="mt-4 p-2">Добавить продукт</Button>
        </Container>
    );
}

export default Admin;
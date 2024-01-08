import { React, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import BurgerLogo from '../../assets/burger_logo.svg'

import H1 from '../../components/Title'
import ContainerItems from "../../components/ContainerItems";
import Button from '../../components/Button'

import {
  Container,
  Image,
  Input,
  InputLabel,
} from "./styles";

function App() {

  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  const inputOrder = useRef()
  const inputClient = useRef()

  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputClient.current.value,
    })

    setOrders([...orders, newOrder])

    navigate("/orders")
  }

  return (
    <Container>
      <Image alt="burger-logo" src={BurgerLogo} />

      <ContainerItems>
        <H1>Faça seu pedido!</H1>
        <InputLabel htmlFor="pedido">Pedido</InputLabel>
        <Input id="pedido" ref={inputOrder} placeholder="Faça o seu pedido aqui" />

        <InputLabel htmlFor="cliente">Nome do Cliente</InputLabel>
        <Input id="cliente" ref={inputClient} placeholder="Informe o seu nome" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItems>
    </Container>
  );
}

export default App;

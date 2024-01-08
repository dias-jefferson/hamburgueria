import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BurgerOrder from '../../assets/burger_order.svg'

import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'
import ContainerItems  from "../../components/ContainerItems";
import Button from '../../components/Button'

import {
  Container,
  Image,
  NewOrder
} from "./styles";
import axios from "axios";

function App() {

  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const updatedOrders = orders.filter(order => order.id !== orderId)
    setOrders(updatedOrders)
  }

  function goBackPage(){
    navigate("/")
  }

  useEffect(() => {
    async function fetchOrders(){
      const {data: newOrders} = await axios.get("http://localhost:3001/order")

      setOrders(newOrders)
    }

    fetchOrders()
  }, [])

  return (
    <Container>
      <Image alt="burger-logo" src={BurgerOrder} />

      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {orders.map(order => (
            <NewOrder key={order.id}>
              <div>
                <p>{order.order}</p>
                <p><b>{order.clientName}</b></p>
              </div>
              <button onClick={() => deleteOrder(order.id)}><img alt="trash" src={Trash} /></button>
            </NewOrder>
          ))}
        </ul>

        <Button onClick={goBackPage} isBack={true}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default App;

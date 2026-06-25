import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  Button,
  Container,
  Input,
  ListItem,
  ToDoList,
  Trash,
  Check
} from './styles';


function App() {

  const [list, setList] = useState([])

  const [inputTask, setImputTask] = useState('')

  //'Levar o Nico para passear', 'Terminar as aulas de React no DevClube'
  const inputMudou = (event) => {
    setImputTask(event.target.value)
  }

  const clickButton = () => {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  const finalizarTarefa = (id) => {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  const deletarItem = (id) => {
    const neuList = list.filter(item => item.id !== id)

    setList(neuList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenha para fazer..." />
        <Button onClick={clickButton} >Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem $isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
        </ul>
      </ToDoList>


    </Container>
  )
}

export default App

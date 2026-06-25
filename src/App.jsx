import React, { useState } from 'react';
import  {  v4  as  uuid  }  from  'uuid' ;


function App() {

  const [list, setList] = useState([{ id: uuid(), task: 'Nada'}])

  const [inputTask, setImputTask] = useState('')

  //'Levar o Nico para passear', 'Terminar as aulas de React no DevClube'
  const inputMudou = (event) => {
    setImputTask(event.target.value)
  }

  const clickButton = () => {
    setList([ ...list, { id: uuid(), task: inputTask}])
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenha para fazer..." />
      <button onClick={clickButton} >Adicionar</button>

      <ul>
       { list.map(item => (
        <li key={item.id}>{item.task}</li>
    
       ))}
      </ul>

    </div>
  )
}

export default App

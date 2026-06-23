function App() {

  const list = [{ id: 22, task: 'Levar o Nico para passear' },
  { id: 35, task: 'Terminar as aulas de React no DevClube' }
  ]

  //'Levar o Nico para passear', 'Terminar as aulas de React no DevClube'
  const inputMudou = (event) => {
    console.log(event.target.value)
  }

  const clickButton = () => {
    console.log("Botão clicado")
  }

  return (
    <div>
      <input onChange={inputMudou} placeholder="O que tenha para fazer..." />
      <button onClick={clickButton} >Adicionar</button>

      <ul>
        {list.map(item => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>

    </div>
  )
}

export default App

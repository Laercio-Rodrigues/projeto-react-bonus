function App() {

  const list = ['Levar o Nico para passear', 'Terminar as aulas de React no DevClube']

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
          <li>{item}</li>
        ))}
      </ul>

    </div>
  )
}

export default App

function App() {

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
        <li>Levar o Nico para passear</li>
        <li>Compar abacate</li>
        <li>Terminar as aulas de React no DevClube</li>
      </ul>

    </div>
  )
}

export default App

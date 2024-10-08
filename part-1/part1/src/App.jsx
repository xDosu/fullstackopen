const Mensaje = (params) => {
  console.log(params)
  return (
    <div>
      <p>Hola {params.name}, vos tenes {params.age} anios</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Mensaje name='Tomas' age={23} /> 
      <Mensaje name='Micaela' age={21} /> 
    </div>
  )
}

export default App
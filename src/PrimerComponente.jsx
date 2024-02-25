const string = 'es untexto'
const number = 123456
const array = ['curso','de','react',2024]
const boolean = false
const funcion = () => 'una funcion'
const objeto  = {nombre:'Oscar', edad:26}
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h4>Variable tipo String:</h4>
      <p>{string}</p>
      <h4>Variable tipo number:</h4>
      <p>{number}</p>
      <h4>Variable tipo array:</h4>
      <p>{array}</p>
      <h4>Variable tipo boolean:</h4>
      <p>{String(boolean)}</p>
      <h4>Variable tipo  Funcion:</h4>
      <p>{funcion()}</p>
      <h4>Variable tipo  Objeto:</h4>
      <p>{JSON.stringify(objeto)}</p>
      <h4>Variable tipo  Fecha:</h4>
      <p>{JSON.stringify(fecha)}</p>
    </>
  )
}



function Form ({title, children, boton}){
  return(
    <>
    <h2>{title}</h2>
    {children}
    <input tyoe="text" placeholder="soy input" /> <br/>
    {boton({buttonText: 'boton'})}
    </>
  )
}

export default Form 
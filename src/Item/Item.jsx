import "./Item.css"

const Item = ({name, price , imgUrl}) =>{

  const styles = {
    display:"flex",
    flexDirection: "column",
    width: 320,
    height: 320,
    alignItems: "center",
    margin:20
  }

  return(
    <div className={name} style={styles} >
      <h3>{name}</h3>
      <h2>Precio{price}</h2>
      <img src={imgUrl} style={{width:300, height:300}}  alt="" />
    </div>
  )
}

export default Item;
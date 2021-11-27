import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';



export default function Item({item}) {


    console.log('este es el prop de item' + item)
    console.log(item)

    return (
            <div className="container" key={item.id}>
                <div className='row'>
                  <div className="col-md-4">               
                  
                    <div className="card-body " >
                  <h3>{item.title}</h3>
                        <Link to={`/item/${item.id}`}>
                        <img src={item.pictureURL} alt={item.title} />
                        </Link>
                    </div>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    <div className="card-footer">                        
                        <ItemCount stock={item.stock} id={item.id} />
                    </div>
                </div> 
                </div>
            </div>
          //   <div>
              
          //   <Card style={{ width: '18rem' }}>
          //   <Card.Img variant="top" src="holder.js/100px180" />
          //   <Card.Body>
          //     <Card.Title>Card Title</Card.Title>
          //     <Card.Text>
          //       Some quick example text to build on the card title and make up the bulk of
          //       the card's content.
          //     </Card.Text>
          //     <Button variant="primary">Go somewhere</Button>
          //   </Card.Body>
          // </Card>
          // </div>
            )
}

import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'



export default function Item({item}) {


    console.log('este es el prop de item' + item)
    console.log(item)

    return (
      <Container key={item.id}>
         <Card style={{ width: '18rem' }}>
              <Link to={`/item/${item.id}`}>
                <Card.Img variant="top" src={item.pictureURL} alt={item.title}/>
              </Link>
              <Card.Body>
                  <Card.Title >{item.title} </Card.Title>
                  <Card.Text>
                  {item.description}
                  </Card.Text>
                  <Card.Text>
                  {item.price}
                  </Card.Text>
                  <Card.Text>
                  <ItemCount stock={item.stock} id={item.id} />
                  </Card.Text>
            </Card.Body>
          </Card>
        </Container>

      //       <div className="container" key={item.id}>
      //           <div className='row'>
      //             <div className="col-md-4">               
                  
      //               <div className="card-body " >
      //             <h3>{item.title}</h3>
      //                   <Link to={`/item/${item.id}`}>
      //                   <img src={item.pictureURL} alt={item.title} />
      //                   </Link>
      //               </div>
      //                   <p>{item.description}</p>
      //                   <p>{item.price}</p>
      //               <div className="card-footer">                        
      //                   <ItemCount stock={item.stock} id={item.id} />
      //               </div>
      //           </div> 
      //           </div>
      //       </div>
      //       
      
            )
}

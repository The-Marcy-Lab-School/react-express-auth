import * as React from 'react';
import {Card,Button, CardBody, CardFooter,CardImg, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import '../events.css'


export default function EventCard(){
    return <>
  <Container id='container'fluid>

    <Card id='card'>
      <Row id='row' xs>
        <Col id='col'>
          <CardImg id='card-img'
          src='https://cdn.pixabay.com/photo/2013/07/18/20/25/old-164980_1280.jpg'
          />
          <CardImgOverlay>
            <CardTitle id='card-title'
            style={{
              borderStyle:'solid',
              color:'white',
              borderColor:'black',
              borderRadius:'5px',
              width:'fit-content',
              backgroundColor:'black',
              fontSize:'30px',
            }}>Fri Jun 30</CardTitle>
          </CardImgOverlay>
        </Col>
        <Col id="right-col" style={{
          backgroundColor: '#6A7152'
        }}>
          <CardBody>
            <CardTitle id='title'>Lets Clean!</CardTitle>
            <CardTitle id='title'>Brownsville, Brooklyn</CardTitle>
            <Button color='info' size='lg' outline>Join</Button>
          </CardBody>
        </Col>
      </Row>
        <CardFooter id='footer'>16+ People are Going!</CardFooter>
    </Card>
  </Container>
  </>
}
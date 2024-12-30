import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/home.css";

function Home() {
  return (
    <Container fluid>
      {/* Welcome Section */}
      <Row className="text-center">
        <Col>
          <h1 style={{ color: "orange" }}>Welcome to Sundaragiri Organic Farm</h1>
        </Col>
      </Row>

      Carousel
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/cow-with-brown-spots-looking-camera-with-meadow-background-organic-fresh-milk_1268-15853.jpg?t=st=1735385042~exp=1735388642~hmac=80ce5c67a1aad071a898154b34f2f7ebd2ed96042e5e2d0f22db80136069c1ca&w=1060"
            alt="First slide"
            style={{height: "750px"}}

          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Cow Milk</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://png.pngtree.com/back_origin_pic/04/33/67/7b1e67e451b0076c234a5725318b1001.jpg"
            alt="Second slide"
            style={{height: "750px"}}
          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Buffalo Milk</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/white-foam-background_23-2151706035.jpg?t=st=1735385844~exp=1735389444~hmac=2771f4e75db4fe957d3c5dd90110e93a1135cfa991f04415491407ca825e5c4f&w=1380"
            alt="Third slide"
            style={{height: "750px"}}
          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Cow Curd</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/photorealistic-view-cow-drinking-water_23-2151294250.jpg?t=st=1735386098~exp=1735389698~hmac=c871f7aebf62a59d17933ccd29e208c80d253142991a832d3aff67957330bdc1&w=900"
            alt="First slide"
            style={{height: "750px" }}

          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Buffalo Curd</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  

      <Row className="text-center">
        <Col>
          <h1 style={{ color: "orange" }}>Welcome to Sundaragiri Organic Farm</h1>
        </Col>
      </Row>

      {/* Hero Image */}
      <Row>
        <Col>
          <Image
            style={{ width: "100%" }}
            src="https://www.karimnagardairy.in/wp-content/uploads/2022/05/Cow.jpg"
            alt="Cow"
            fluid
          />
        </Col>
      </Row>

      {/* Tagline */}
      <Row className="text-center my-3">
        <Col>
          <h1 style={{ color: "orange" }}>Natural Taste From The Dairy Farm!</h1>
        </Col>
      </Row>

      {/* Milk Container Image */}
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="text-center">
          <img
            src="https://img.freepik.com/premium-photo/milk-container-stainless-steel-bucket-packaging-design_1028476-714.jpg"
            alt="Milk Container"
            style={{ width: "100%" }}
          />
          <h3>Quality tests before our products reach your home</h3>
          <h5>Purity you can trust and test!</h5>
          <p>Raise aquery and allow us to show you home to test the purity of milk!</p>
        </Col>
      </Row>

      {/* Dairy Team Section */}
      <Row className="text-center mt-5">
        <Col>
          <h1 style={{color:"blueviolet"}}>Dairy Team</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* Owner Card */}
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <div className="img">
              <Card.Img
                variant="top"
                src="https://www.karimnagardairy.in/wp-content/uploads/2022/05/ADVISOR.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>V.Hanumantha Reddy/Owner</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Farmer Card */}
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <div className="img">
              <Card.Img
                style={{ width: "280px", height: "360px", objectFit: "cover" }}
                variant="top"
                src="/rb.jpg" // Ensure correct path
              />
            </div>
            <Card.Body>
              <Card.Title>R.Balaiah/Farmer</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>

      </div>
    </Container>
  );
}

export default Home;

import { useContext } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import AuthContext from '../../store/auth-context';
import './Products.css';
import ProductContext from '../../store/product-context';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Products = (props) => {

  const productContext = useContext(ProductContext);
  const authContext = useContext(AuthContext);

  if (!authContext.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const productsArr = [
    {
      id: 'p1',
      title: 'OILS',
      price: 100,
      imageUrl: 'https://images.lifestyleasia.com/wp-content/uploads/2019/03/08200319/shutterstock_682212448.jpg',
      quantity: 1,
    },
    {
      id: 'p2',
      title: 'SOAP',
      price: 50,
      imageUrl: 'https://earthbits.com/cdn/shop/articles/NEWDASMOCAMOC_600x.jpg?v=1632131322',
      quantity: 1,
    },
    {
      id: 'p3',
      title: 'FACE SERUM',
      price: 70,
      imageUrl: 'https://wholeloveorganics.com/cdn/shop/products/Organic_Face_Serum_Whole_Love_Organics_Facial_Oil_Oil_Cleansing_Method_OCM_Argan_Oil_Squalane_Jojoba_Oil_Rose_EO_2_1024x1024@2x.jpg?v=1571439485',
      quantity: 1,
    },
    {
      id: 'p4',
      title: 'SHAMPOO',
      price: 100,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosPQAwVlofspw_S-I0KTrcvFll5rtIdQ9GgNDcPhPdh2q3pn2NeyZafvsshUkfHfSInE&usqp=CAU',
      quantity: 1,
    }
  ];

  return (
    <div className="products-container" style={{ backgroundColor: '#f5f5f5', paddingTop: '80px', paddingBottom: '80px' }}>
    <Container>
      <Row className="justify-content-center mx-auto">
        {productsArr.map((product, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="h-100 product-card">
              <Link to={`/products/${product.id}`} className="text-decoration-none">
                <div className="zoom-on-hover product-img-container">
                  <Card.Img src={product.imageUrl} alt={product.title} className="card-img-top product-img" />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="mb-2">{product.title}</Card.Title>
                    <Card.Text className="mb-3">${product.price}</Card.Text>
                  </div>
                </Card.Body>
                </Link>
                <Button variant="primary" onClick={() => { productContext.addItem(product) }}>Add to Cart</Button>
              </Card>
    
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
};

export default Products;

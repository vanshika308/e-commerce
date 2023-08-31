import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer bg-dark py-5">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={4} className="text-center text-white mb-3 mb-md-0">
            <h5 className="mb-0">Connect With Us</h5>
          </Col>
          <Col md={4} className="text-center">
  <div className="social-links">
    <a href="#youtube" className="social-link"><img src="images/youtube_logo.png" alt="YouTube" /></a>
    <a href="#spotify" className="social-link"><img src="images/spotify_logo.png" alt="Spotify" /></a>
    <a href="#facebook" className="social-link"><img src="images/facebook_logo.png" alt="Facebook" /></a>
  </div>
</Col>

        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-muted mb-0">© 2023 Generics. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

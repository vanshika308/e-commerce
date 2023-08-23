import React, { useEffect, useState } from "react";
import { Container, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './Productdetail.css';

const productArr = [
  { id: "p1", title: "Oils", price: 100 },
  { id: "p2", title: "Soap", price: 50 },
  { id: "p3", title: "Face Serum", price: 70 },
  { id: "p4", title: "Shampoo", price: 100 }
];

const ProductDetails = () => {
  const { productId } = useParams(); // Destructure productId
  const [selectedImage, setSelectedImage] = useState(""); // Track selected image
  const [product, setProduct] = useState({ title: "", price: "" }); // Product details

  useEffect(() => {
    const selectedProduct = productArr.find(product => product.id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct); // Set product details
    }
  }, [productId]);

  const showPicHandler = event => {
    setSelectedImage(event.target.src); // Update selected image
  };

  return (
    <Container className="product-details">
        <h1 className="d-flex justify-content-center">{product.title}</h1>
      <Container className="product-images">
        {productArr.map((product, index) => (
          
          <Figure key={product.id} className="pic">
            <Figure.Image
              width={250}
              height={200}
              alt={`Product Image ${index + 1}`}
              src={`/Images/${productId}/image${index + 1}.jpg`}
              onClick={showPicHandler}
            />
          </Figure>
        ))}
      </Container>
      <Container className="selected-image">
        <Figure>
          <Figure.Image width={400} height={400} alt="Selected Product" src={selectedImage} />
        </Figure>
      </Container>
      <Container className="product-info">
        <h1>{product.title}</h1>
        <h2>{`$${product.price}`}</h2>
        <div>
          <strong><p>Product Ratings & Reviews</p></strong>
          <p>⭐⭐⭐⭐</p>
        </div>
      </Container>
    </Container>
  );
};

export default ProductDetails;

import React, { useContext, useState } from 'react';
import { Button, Modal, Table, Image } from 'react-bootstrap';
import AuthContext from '../../store/auth-context';
import ProductContext from '../../store/product-context';

const Cart = (props) => {
  const authContext = useContext(AuthContext);
  const productcntxt = useContext(ProductContext);
  const cartItems = productcntxt.items;

  const groupedCartItems = {}; // Object to store grouped items

  // Group items by their title and calculate total quantity
  cartItems.forEach((item) => {
    if (!groupedCartItems[item.title]) {
      groupedCartItems[item.title] = { ...item, totalQuantity: 0 };
    }
    groupedCartItems[item.title].totalQuantity += item.quantity;
  });

  const calculateTotalAmount = (groupedItems) => {
    let totalAmount = 0;

    Object.values(groupedItems).forEach((item) => {
      if (item.price) {
        totalAmount += item.price * item.totalQuantity;
      }
    });

    return totalAmount;
  };

  const [showOrderPlacedModal, setShowOrderPlacedModal] = useState(false);

  const handleCloseOrderPlacedModal = () => {
    setShowOrderPlacedModal(false);
  };

  return (
    <Modal show={true} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
  {Object.values(groupedCartItems).map((item, index) => (
    <tr key={index}>
      <td>
        {item.imageUrl && <Image src={item.imageUrl} alt={item.title} fluid rounded className='mb-2' />}
        <div>{item.title}</div>
      </td>
      <td>${item.price ? item.price.toFixed(2) : 'N/A'}</td> {/* Updated line */}
      <td>{item.totalQuantity}</td>
      <td>
        <Button variant='danger' onClick={() => productcntxt.removeItem(item._id)}>
          Remove
        </Button>
      </td>
    </tr>
  ))}
</tbody>
        </Table>
        <div className='text-right'>
          <p>Total Products: {Object.keys(groupedCartItems).length}</p>
          <p>Total Amount: ${calculateTotalAmount(groupedCartItems).toFixed(2)}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={() => setShowOrderPlacedModal(true)}>
          Place Order
        </Button>
        <Button variant='secondary' onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
      <Modal show={showOrderPlacedModal} onHide={handleCloseOrderPlacedModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your order has been placed successfully. Thank you for shopping with us!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleCloseOrderPlacedModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Modal>
  );
};

export default Cart;

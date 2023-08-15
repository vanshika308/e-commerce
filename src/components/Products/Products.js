import { useContext } from 'react';
import './Products.css';
import ProductContext from '../../store/product-context';

const Products=(props)=>{

   const productcntxt= useContext(ProductContext);
   
   const addItemToCart = (product) => { 
    productcntxt.addItem({ ...product }); 
  };

    const productsArr = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',      
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        
        ]
        
        
        return (
            <div className="container">
              <h1 className="text-center mt-4 mb-4">MUSIC</h1>
              <div className="row justify-content-center mx-auto" style={{ maxWidth: '1000px' }}>
                {productsArr.map((product, index) => (

                  <div className="col-lg-4 col-md-4 col-sm-10 mb-4" key={index}>
                    <h4 className='text-center mb-4 mt-4'>Album {index+1}</h4> 
                    <div className="card" style={{ maxWidth: '300px' }}>
                      <img src={product.imageUrl} alt={product.title} className="card-img-top pl-5 zoom-on-hover " style={{ maxHeight: '250px' }} />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price}</p>
                        <button className="btn btn-primary" onClick={() => addItemToCart(product)}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center mb-5 mt-5">
                 <button className="btn btn-primary">See the Cart</button>
              </div>
            </div>
          );
};

export default Products;
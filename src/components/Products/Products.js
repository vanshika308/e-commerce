import { useContext } from 'react';
import './Products.css';
import ProductContext from '../../store/product-context';
import { Link } from 'react-router-dom';

const Products=(props)=>{

   const productcntxt= useContext(ProductContext);
   
   const addItemToCart = (product) => { 
    productcntxt.addItem({ ...product }); 
  };

    const productsArr = [
        {
        id:'p1',
        title: 'Oils',
        price: 100,
        imageUrl: 'https://images.lifestyleasia.com/wp-content/uploads/2019/03/08200319/shutterstock_682212448.jpg',
        },
        {
        id:'p2',
        title: 'Soap',
        price: 50,
        imageUrl: 'https://earthbits.com/cdn/shop/articles/NEWDASMOCAMOC_600x.jpg?v=1632131322',      
        },
        {
        id:'p3',  
        title: 'Face serum',
        price: 70,
        imageUrl: 'https://wholeloveorganics.com/cdn/shop/products/Organic_Face_Serum_Whole_Love_Organics_Facial_Oil_Oil_Cleansing_Method_OCM_Argan_Oil_Squalane_Jojoba_Oil_Rose_EO_2_1024x1024@2x.jpg?v=1571439485',
        },
        {
        id:'p4',  
        title: 'Shampoo',
        price: 100,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosPQAwVlofspw_S-I0KTrcvFll5rtIdQ9GgNDcPhPdh2q3pn2NeyZafvsshUkfHfSInE&usqp=CAU',
        }
        
        ]
        
        
        return (
            <div className="container" style={{backgroundColor: 'rgb(89, 130, 106)'}}>
              <h1 className="text-center justify-content-center mt-4 mb-4 text-green">Organic Harvest</h1>
              <div className="row justify-content-center mx-auto" style={{ maxWidth: '1000px' }}>
                {productsArr.map((product, index) => (
                  
                  <div className="col-lg-4 col-md-4 col-sm-10 mb-4" key={index}>
                   <Link to={`/products/${product.id}`}>
                    <div className="card" style={{ maxWidth: '300px' }}>
                      <img src={product.imageUrl} alt={product.title} className="card-img-top pl-5 zoom-on-hover " style={{ maxHeight: '250px' }} />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price}</p>
                        <button className="btn btn-primary" onClick={() => addItemToCart(product)}>Add to Cart</button>
                      </div>
                    </div>
                    </Link>
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
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';

function App() {
  const [addcart, setAddCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const appDetails = [
    {
      id: 1,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Fancy Product",
      originalPrice: 50,
      discountedPrice: 20,
      last: "Add to cart"
    },
    {
      id: 2,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Special Item",
      imgName: 'sale',
      popularity: 5,
      discountedPrice: 18,
      originalPrice: 20,
      last: "Add to cart"
    },
    {
      id: 3,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      imgName: 'sale',
      headName: "Sale Item",
      originalPrice: 50,
      discountedPrice: 20,
      last: "Add to cart"
    },
    {
      id: 4,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Popular Item",
      popularity: 5,
      singlePrice: 40,
      last: "Add to cart"
    },
    {
      id: 5,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      imgName: 'sale',
      headName: "Sale Item",
      originalPrice: 50,
      discountedPrice: 20,
      last: "Add to cart"
    },
    {
      id: 6,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Fancy Product",
      originalPrice: 50,
      discountedPrice: 20,
      last: "Add to cart"
    },
    {
      id: 7,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Special Item",
      imgName: 'sale',
      popularity: 5,
      discountedPrice: 18,
      originalPrice: 20,
      last: "Add to cart"
    },
    {
      id: 8,
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Popular Item",
      popularity: 5,
      singlePrice: 40,
      last: "Add to cart"
    },
  ];

  let handleAddtoCart = (details) => {
    setAddCart([...addcart, details]);
    setTotalPrice(totalPrice + ((details.discountedPrice)? details.discountedPrice : details.singlePrice));
  }
  let handleRemove = (item) => {
    let indexItem = addcart.findIndex(obj => obj.id === item.id);
    addcart.splice(indexItem, 1);
    setAddCart([...addcart]);
    setTotalPrice(totalPrice - ((item.discountedPrice)? item.discountedPrice : item.singlePrice));
  }

  return (
    <>
      <Nav addcart={addcart} setAddCart={setAddCart} handleRemove={handleRemove} totalPrice={totalPrice}></Nav>
      <Header></Header>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      appDetails.map((detail, index) => {
                      return <Cart details = {detail} key={index} handleAddtoCart={handleAddtoCart}></Cart>})
                    }
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
  );
}

export default App;

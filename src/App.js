import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer'
import 'bootstrap'
//import Section from './Section';

function App() {

  const appDetails = [
    {
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Fancy Product",
      originalPrice: 50,
      discountedPrice: 20,
      last: "View options"
    },
    {
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      imgName: 'sale',
      headName: "Sale Item",
      originalPrice: 50,
      discountedPrice: 20,
      last: "Add to cart"
    },
    {
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Popular Item",
      popularity: 5,
      singlePrice: 40,
      last: "Add to cart"
    },
    {
      imageFile : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      headName: "Special Item",
      imgName: 'sale',
      popularity: 5,
      discountedPrice: 18,
      originalPrice: 20,
      last: "Add to cart"
    }
  ];

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      appDetails.map((detail) => {
                      return <Cart details = {detail}></Cart>})
                    }
                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
  );
}

export default App;


import './App.scss';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Product from '../product/Product';
import Showcase from '../showcase/Showcase';
import Form from '../form/Form';
import Articles from '../articles/Articles';
import Footer from '../footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Product/>
      <Showcase/>
      <Form/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import ProductDetail from './page/ProductDetail/ProductDetail';
import ListProduct from './page/ListProduct/ListProduct';
import ScrollToTop from "./common/scrollToTop/ScrollToTop";
import BackToTop from './components/backToTop/backToTop';

function App() {
  return (
    <Router>
      <BackToTop />
      <ScrollToTop />
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route exact path = "/products" component={ListProduct}/>
        <Route exact path = "/products/:id" render={({match}) => (
          <ProductDetail
            id={match.params.id}
          />  )}/>
      </Switch>
    </Router>
  );
}

export default App;

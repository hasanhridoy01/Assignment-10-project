import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/CommonPages/Banner/Banner';
import Footer from './components/CommonPages/Footer/Footer';
import Header from './components/CommonPages/Header/Header';
import Home from './components/HomePages/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Details from './components/HomePages/Details/Details';
import Default from './components/Default/Default';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home> }></Route>
        <Route path='/blog' element={ <Blog></Blog> }></Route>
        <Route path='/about' element={ <About></About> }></Route>
        <Route path='/details/:detailsId' element={ <Details></Details> }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/signup' element={ <SignUp></SignUp> }></Route>
        <Route path='*' element={ <Default></Default> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

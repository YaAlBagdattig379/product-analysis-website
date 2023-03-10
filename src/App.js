import './App.css';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/reviews'element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard'element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs'element={<Blogs></Blogs>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
        <Route path='/about'element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;

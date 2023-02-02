import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Recipes from './pages/Recipes/Recipes';
import Constructor from './pages/Constructor/Constructor';
import Articles from './pages/Articles/Articles';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Recipes /> } />
        <Route path='/constructor' element={ <Constructor /> } />
        <Route path='/articles' element={ <Articles /> } />
        <Route path='/about' element={ <AboutUs /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

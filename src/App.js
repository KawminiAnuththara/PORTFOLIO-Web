
import './App.css';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Introduction from './Components/Introduction';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

function App() {
  return (
   <div className='p-[20px]'>
      <Navigation/>
      <Home/>
      <Introduction/>
      <Skills/>
      <Portfolio/>
      <Contactus/>
      <Footer/>
   </div>
  );
}

export default App;

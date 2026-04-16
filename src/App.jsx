import './App.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <div className="page">
        <Header />
        <div className="page_contents">
          <Hero />
          <Services />
        </div>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App

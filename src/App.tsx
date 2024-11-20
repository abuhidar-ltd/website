import Hero from './components/Hero';
import Companies from './components/Companies';
import CompanyInfo from './components/CompanyInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Leadership from './components/Leadership';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Companies />
      <Leadership />
      <CompanyInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
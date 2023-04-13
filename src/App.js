import "./App.scss";
import { Navbar } from './components';

import { 
  About, 
  Footer, 
  Header, 
  Skills, 
  TestHeader, 
  Testimonial, 
  Work 
} from './container';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <TestHeader />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation';
import Home from './components/Home/Home.js'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

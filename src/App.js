
import './App.css';
import './responsive.css';
import {SidePanel} from './components/SidePanel';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';
import {Connect} from './components/Connect';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <SidePanel />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Connect/>
      <Footer />
    </div>
  );
}

export default App;

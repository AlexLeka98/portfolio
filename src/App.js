import './App.scss';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import ShortDescription from './components/ShortDiscription/ShortDescription';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ShortDescription />
    </div>
  );
}

export default App;

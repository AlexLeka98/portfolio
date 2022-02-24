import './App.scss';
import DevSkills from './components/DevSkills/DevSkills';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RecentWork from './components/RecentWork/RecentWork';
import ShortDescription from './components/ShortDiscription/ShortDescription';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ShortDescription />
      <DevSkills />
      <RecentWork />
      <Footer />
    </div>
  );
}

export default App;

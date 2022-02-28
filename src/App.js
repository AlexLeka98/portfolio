import { useState } from 'react';
import './App.scss';
import Contact from './components/ContactModal/Contact';
import DevSkills from './components/DevSkills/DevSkills';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RecentWork from './components/RecentWork/RecentWork';
import ShortDescription from './components/ShortDiscription/ShortDescription';
import Modal from './components/UI/Modal';


function App() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    console.log('yes')
    setShowModal(prevState => !prevState);
  }
  return (
    <div className="App">
      <Navbar toggleModal={toggleModal}/>
      <Landing />
      <ShortDescription />
      <DevSkills />
      <RecentWork />
      <Footer  toggleModal={toggleModal}/>
      {showModal && <Contact showModal={showModal} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;

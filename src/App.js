import { useState } from "react"
import About from "./components/About/About"
import Encomende from "./components/Encomende/Encomende"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Modal from "./components/Modal/Modal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div className="App">
      {isModalOpen && <Modal success={messageSent} toggleModal={setIsModalOpen}/>}
      <Header />
      <About />
      <Menu />
      <Encomende toggleModal={setIsModalOpen} setMessageSent={setMessageSent} />
      <Footer />
    </div>
  )
}
export default App

import { useRef } from "react";
import Modal, { ModalHandler } from "./components/Modal";

function App() {
  
  const modalRefence = useRef<ModalHandler>(null)

  const openModal= () => {
      modalRefence.current?.openModal()
  }


 
  return (
    <>
      <button type="button" onClick={openModal}> Click </button>
      <Modal ref={modalRefence} />
    </> 

  );
}

export default App;

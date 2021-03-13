import { useCallback, useEffect, useRef } from "react";
import Input from "./components/Input";
import Modal, { ModalHandler } from "./components/Modal";

function App() {

  const nameInputRef = useRef<HTMLInputElement>(null)

  const modalRef= useRef<ModalHandler>(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value)
  }

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  },[]) 

  return (
    <>
    <Input
      type="text"
      placeholder="nome"
      label="teste"
      name="a"
      ref={nameInputRef}
    />

      <button type="button" onClick={handleOpenModal} >Click</button>
      <Modal  ref={modalRef} />
    </>

  );
}

export default App;

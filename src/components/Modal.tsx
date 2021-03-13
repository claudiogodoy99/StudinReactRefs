import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';



export interface ModalHandler {
    openModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandler> = (props,ref) => {
        

    const [isOpen, setOpen] = useState(false)

    const closeModal = useCallback(() =>{
        setOpen(false)
    } ,[]) 

    const openModal = useCallback(() => {
        setOpen(true)
    }, [])

    useImperativeHandle(ref, () => {
        return {
            openModal
        }
    })


  return (
      <>
      {
        isOpen &&   
        <div>
          Eu sou um modal
          <button type="button" onClick={closeModal}>Fechar Modal</button>
        </div>
        }
      </>
  );
}

export default forwardRef(Modal);
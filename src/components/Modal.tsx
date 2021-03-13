import React, { useCallback, useState,useImperativeHandle, forwardRef } from 'react';




export interface ModalHandler{
    openModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandler> = ({},ref) => {

    const [isOpen, setOpen] = useState(true);
    
    const openModal = useCallback(() => {
        setOpen(true)
    },[])

    useImperativeHandle(ref,() => {
        return {
            openModal
        }
    })

    const handleCloseModal = useCallback(() => {
        setOpen(false)
    },[])

  
    
    return (
        <>
            {isOpen &&
                <div>
                    I'm modal
                    <button type='button' onClick={handleCloseModal} >Close</button>
                </div>
                }
        </>
    );
}

export default forwardRef(Modal);
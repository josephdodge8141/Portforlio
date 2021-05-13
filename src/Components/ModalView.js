import React, { useState } from "react";
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf'
import styled from 'styled-components';

const modalables = {
    1: <img src="portrait.jpeg" alt="Portrait" style={{ width:'39vw' }} />,
    2:  <Document file='resume.pdf'>
            <Page pageNumber={1} />
        </Document>,
    
}

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: '0',
      border: 'none',
      background: 'rgba(38, 38, 38, 0.0)', 
      overflow: 'hidden'
    }, 
    overlay: {
        background: 'rgba(38, 38, 38, 0.7)',
    }
  };

  const Button = styled.button`
    opacity: 15%;
    padding: 11px 16px;
    border-radius: 20px;
    border: none; 
    vertical-align: top;
    position: fixed;
    color: #fafafa;
    background: #262626;
    &:hover {
        opacity: 80%;
        cursor pointer;
    } 
  `
  
  Modal.setAppElement('body')

const ModalView = ({ contentId, title }) => {
    const [isOpen,setOpen] = useState(false);
    const [id, setId] = useState(contentId)

    const toggleId = (dir) => {
        const length = Object.keys(modalables).length
        if (dir === 'up' && id < length) {
            setId(id + 1)
        } else if (dir === 'down' && id === 1) {
            setId(length)
        } else if (dir === 'up' && id >= length) {
            setId(1)
        } else {
            setId(id - 1)
        }
    }

    const handlePopClick = () => {
        setOpen(true)
        setId(contentId)
    }
    return (
        <>
            <div onClick={() => handlePopClick()}>
                {modalables[contentId]}
            </div>
            {
                isOpen && (
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={() => setOpen(false)}
                        style={customStyles}
                        contentLabel={title}
                    >
                        {modalables[id]}
                        <Button style={{bottom: '45vh', left: '16px'}} onClick={() => toggleId('down')}>
                            &lt;
                        </Button>
                        <Button style={{top: '15px', right: '16px'}} onClick={() => setOpen(false)}>
                            x
                        </Button>
                        <Button style={{bottom: '45vh', right: '16px'}} onClick={() => toggleId('up')}>
                            &gt;
                        </Button>
                    </Modal>
            )}
        </>
    );
}
export default ModalView
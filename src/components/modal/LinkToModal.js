import React from 'react'
import { useState } from 'react'
import GetHtmlStrLocalized from '../../datas/GetHtmlStrLocalized'
import Modal, { ModalBody, ModalFooter, ModalHeader } from './Modal'

function LinkToModal({ language, linkContent, children }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <button className="btn" onClick={() => setShowModal(true)}>
                {linkContent}
            </button>
            <Modal
                show={showModal}
                setShow={setShowModal}
            >
                <ModalHeader>
                    <h3>{linkContent}</h3>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <br />
                <ModalFooter>
                    <button onClick={() => setShowModal(false)}>
                        <GetHtmlStrLocalized language={language} textId="close" />
                    </button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}

export default LinkToModal;
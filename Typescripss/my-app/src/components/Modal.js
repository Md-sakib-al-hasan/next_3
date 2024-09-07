// components/ModalExample.js
"use client"
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg p-8 z-10 relative w-11/12 max-w-md mx-auto">
                <button className="absolute top-0 right-0 mt-4 mr-4" onClick={onClose}>

                </button>
                {children}
            </div>
        </div>
    );
};

const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl mb-4">Next.js Modal Example</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={openModal}>
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={closeModal}>
                <h2 className="text-xl mb-4">Modal Title</h2>
                <p>This is the modal content.</p>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={closeModal}>
                    Close Modal
                </button>
            </Modal>
        </div>
    );
};

export default ModalExample;

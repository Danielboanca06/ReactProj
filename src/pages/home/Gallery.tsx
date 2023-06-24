import React, { useState } from 'react';
import Modal from 'react-modal';
import './home.css';

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    'https://c1.wallpaperflare.com/preview/65/265/305/tattoo-shaving-shave-barber.jpg',
    'https://c0.wallpaperflare.com/preview/291/667/682/barber-barbershop-haircut-hairdo.jpg',
    'https://images.pexels.com/photos/3356174/pexels-photo-3356174.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/897251/pexels-photo-897251.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="grid-container bg-neutral-700 py-2">
        {images.map((image, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="over"
      >
        <div className="modal-image-container">
          <button className="arrow prev" onClick={handlePrevImage}>{'<'}</button>
          <img
            src={images[selectedImageIndex]}
            alt=""
            className="modal-image"
          />
          <button className="arrow next" onClick={handleNextImage}>{'>'}</button>
          <button className="close" onClick={closeModal}>X</button>
        </div>
      </Modal>
    </>
  );
}

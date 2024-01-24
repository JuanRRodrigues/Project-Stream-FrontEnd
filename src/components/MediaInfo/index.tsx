import React, { useEffect, useState } from 'react';
import './style.scss';
import Modal from 'react-modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MediaData } from "../../interface/MediaData";

Modal.setAppElement('#root');

const MediaInfo: React.FC = () => {



  const [nameTitle, setTitle] = useState('');
  const [nameCategory, setCategory] = useState('');





  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    axios.post('http://localhost:8080/api/v1/series/post', {
        title: nameTitle,
        category: nameCategory
    })
        .then(() => {
            alert("Restaurante cadastrado com sucesso")
        })

    console.log('preciso enviar dados para api');
    // Adicione aqui a lógica para enviar dados para a API
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="data__Series">
      <ul>
        <li>MOVIES: 20</li>
        <li>SERIES: 30</li>
        <li>ANIMES: 10</li>
        <li>GAMES: 22</li>
        <li>TOTAL: 82</li>
        <li>EPISODES: 100</li>
        <li>SEASONS: 15</li>
        <a onClick={openModal} className="openBtn">
          New Media
        </a>
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="addMedia__Form">
          <div className="text">
            <h1>ADD MEDIA API </h1>
          </div>
          <form onSubmit={aoSubmeterForm} className="formAddAPI" action="#">
            <h3>Name</h3>
            <input
              value={nameTitle}
              type="text"
              id="placeholder"
              name="name"
              onChange={evento => setTitle(evento.target.value)}
              placeholder="Name Media"
            />
            <h3>Type</h3>
            <input
              value={nameCategory}
              type="text"
              id="categoty"
              name="type"
              onChange={evento => setCategory(evento.target.value)}
              placeholder="Category Media"
            />

            <input type="submit" value="Confirm" />
            <a onClick={closeModal} className="closeBtn">
              Cancel
            </a>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default MediaInfo;

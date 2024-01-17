import { useState } from 'react';
import './style.scss';
import Modal from "react-modal"

Modal.setAppElement("#root")

const MediaInfo: React.FC = () => {
   
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
}

    function closeModal(){
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
        <a onClick={openModal} className="btnGreen">New Media</a>
    </ul>
        <Modal
             isOpen={modalIsOpen}
             onRequestClose={closeModal}
             contentLabel="Example Modal"
             overlayClassName="modal-overlay"
             className="modal-content"
             >
                
        </Modal>
</div>
  );

}
export default MediaInfo;

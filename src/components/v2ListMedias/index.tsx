import React, { useEffect, useState } from "react";
import 'swiper/css';
import { MediaData } from "../../interface/MediaData";
import axios from "axios";
import './style.scss'
import { useParams } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const V2ListMedias: React.FC = () => {
  const [data, setData] = useState<MediaData[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<MediaData | null>(null);
  const parametros = useParams();
  const [nameTitle, setTitle] = useState('');
  const [nameReleaseYear, setReleaseYear] = useState('');
  const [nameBoxOffice, setBoxOffice] = useState('');
  const [nameType, setType] = useState('');
  const [namePoster, setPoster] = useState('');
  const [nameDescription, setDescription] = useState('');
  const [nameRated, setRated] = useState('');
  const [nameReleaseDate, setReleaseDate] = useState('');
  const [nameRuntime, setRuntime] = useState('');
  const [nameGenre, setGenre] = useState('');
  const [nameDirector, setDirector] = useState('');
  const [nameActors, setActors] = useState('');
  const [nameLanguage, setLanguage] = useState('');
  const [nameCountry, setCountry] = useState('');
  const [nameAwards, setAwards] = useState('');
  const [nameProduction, setProduction] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (selectedMedia) {

      // Aqui você pode enviar a requisição para editar o item selecionado
      // Utilize os estados nameTitle e nameCategory para enviar as alterações
      axios.put(`http://localhost:8080/api/v1/series/edit/${selectedMedia.id}`, {
        id: selectedMedia.id,
        title: nameTitle,
        releaseYear: nameReleaseYear,
        boxOffice: nameBoxOffice,
        type: nameType,
        poster: namePoster,
        description: nameDescription,
        rated: nameRated,
        releaseDate: nameReleaseDate,
        runtime: nameRuntime,
        genre: nameGenre,
        director: nameDirector,
        actors: nameActors,
        language: nameLanguage,
        country: nameCountry,
        awards: nameAwards,
        production: nameProduction
      })
        .then(() => {
          alert("Item editado com sucesso");
          closeModal();
        })
        .catch(error => {
          console.error('Erro ao editar:', error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (parametros.id) {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/series/${parametros.id}`);
          setData([response.data]); // Assuming the response data is a single MediaData object
        } catch (error) {
          console.error('Erro ao obter dados:', error);
        }
      }
    };

    fetchData();
  }, [parametros.id]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/series/list')
      .then(response => {
        setData(response.data); // Assuming the response data is an array of MediaData
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }, []);

  const excluir = (mediaExcluida: MediaData) => {
    axios.delete(`http://localhost:8080/api/v1/series/${mediaExcluida.id}`)
      .then(() => {
        const listaMedias = data.filter(medias => medias.id !== mediaExcluida.id);
        setData([...listaMedias]);
      })
      .catch(error => {
        console.error('Erro ao excluir:', error);
      });
  };

  const openModal = (media: MediaData) => {
    setSelectedMedia(media);
    setTitle(media.title || '');
    setReleaseYear(media.releaseYear || '');
    setBoxOffice(media.boxOffice || '');
    setType(media.type || '');
    setPoster(media.poster || '');
    setDescription(media.description || '');
    setRated(media.rated || '');
    setReleaseDate(media.releaseDate || '');
    setRuntime(media.runtime || '');
    setGenre(media.genre || '');
    setDirector(media.director || '');
    setActors(media.actors || '');
    setLanguage(media.language || '');
    setCountry(media.country || '');
    setAwards(media.awards || '');
    setProduction(media.production || '');
    setIsOpen(true);
  }

  const closeModal = () => {
    setSelectedMedia(null);
    setTitle('');
    setReleaseYear('');
    setBoxOffice('');
    setType('');
    setPoster('');
    setDescription('');
    setRated('');
    setReleaseDate('');
    setRuntime('');
    setGenre('');
    setDirector('');
    setActors('');
    setLanguage('');
    setCountry('');
    setAwards('');
    setProduction('');
    setIsOpen(false);
  }

  return (
    <section className="mediaAdm">
      {data.map((mediaData, index) => (
        <div className="mediaBase" key={index}>
          <img className="poster" src={mediaData.poster} alt="" title="" />
          <h1>{mediaData.title}</h1>

          <p>Release Year: {mediaData.releaseYear}</p>
          <p>Type: {mediaData.type}</p>
          {mediaData.addOn == null ? (
            <p>Add On: 00/00/00</p>
          ) : (
            <p>Add On: {mediaData.addOn}</p>
          )}
          {mediaData.updateOn == null ? (
            <p>Update On: 00/00/00</p>
          ) : (
            <p>Update On: 19/12/2023</p>
          )}
          <div className="btn">
            <a onClick={() => openModal(mediaData)} className="btnGreen">
              EDIT
            </a>
            <a className="btnBlue" href="#">VIEW</a>
            <a className="btnRed" onClick={() => excluir(mediaData)}>DELETE</a>
          </div>
        </div>
      ))}

<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Media Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="editMedia__Form">
          <div className="text">
            <h1>EDIT MEDIA API </h1>
          </div>
          <form onSubmit={aoSubmeterForm} className="formEditAPI" action="#">
            <h3>Title</h3>
            <input
              value={nameTitle}
              type="text"
              id="title"
              name="title"
              onChange={evento => setTitle(evento.target.value)}
              placeholder="Title"
            />
            
            <h3>Release Year</h3>
            <input
              value={nameReleaseYear}
              type="text"
              id="releaseYear"
              name="releaseYear"
              onChange={evento => setReleaseYear(evento.target.value)}
              placeholder="Release Year"
            />

            <h3>Box Office</h3>
            <input
              value={nameBoxOffice}
              type="text"
              id="boxOffice"
              name="boxOffice"
              onChange={evento => setBoxOffice(evento.target.value)}
              placeholder="Box Office"
            />

            <h3>Type</h3>
            <input
              value={nameType}
              type="text"
              id="type"
              name="type"
              onChange={evento => setType(evento.target.value)}
              placeholder="Type"
            />

            <h3>Poster</h3>
            <input
              value={namePoster}
              type="text"
              id="poster"
              name="poster"
              onChange={evento => setPoster(evento.target.value)}
              placeholder="Poster"
            />

            <h3>Description</h3>
            <input
              value={nameDescription}
              type="text"
              id="description"
              name="description"
              onChange={evento => setDescription(evento.target.value)}
              placeholder="Description"
            />

            <h3>Rated</h3>
            <input
              value={nameRated}
              type="text"
              id="rated"
              name="rated"
              onChange={evento => setRated(evento.target.value)}
              placeholder="Rated"
            />

            <h3>Release Date</h3>
            <input
              value={nameReleaseDate}
              type="text"
              id="releaseDate"
              name="releaseDate"
              onChange={evento => setReleaseDate(evento.target.value)}
              placeholder="Release Date"
            />

            <h3>Runtime</h3>
            <input
              value={nameRuntime}
              type="text"
              id="runtime"
              name="runtime"
              onChange={evento => setRuntime(evento.target.value)}
              placeholder="Runtime"
            />

            <h3>Genre</h3>
            <input
              value={nameGenre}
              type="text"
              id="genre"
              name="genre"
              onChange={evento => setGenre(evento.target.value)}
              placeholder="Genre"
            />

            <h3>Director</h3>
            <input
              value={nameDirector}
              type="text"
              id="director"
              name="director"
              onChange={evento => setDirector(evento.target.value)}
              placeholder="Director"
            />

            <h3>Actors</h3>
            <input
              value={nameActors}
              type="text"
              id="actors"
              name="actors"
              onChange={evento => setActors(evento.target.value)}
              placeholder="Actors"
            />

            <h3>Language</h3>
            <input
              value={nameLanguage}
              type="text"
              id="language"
              name="language"
              onChange={evento => setLanguage(evento.target.value)}
              placeholder="Language"
            />

            <h3>Country</h3>
            <input
              value={nameCountry}
              type="text"
              id="country"
              name="country"
              onChange={evento => setCountry(evento.target.value)}
              placeholder="Country"
            />

            <h3>Awards</h3>
            <input
              value={nameAwards}
              type="text"
              id="awards"
              name="awards"
              onChange={evento => setAwards(evento.target.value)}
              placeholder="Awards"
            />

            <h3>Production</h3>
            <input
              value={nameProduction}
              type="text"
              id="production"
              name="production"
              onChange={evento => setProduction(evento.target.value)}
              placeholder="Production"
            />

            <input type="submit" value="Confirm" />
            <a onClick={closeModal} className="closeBtn">
              Cancel
            </a>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default V2ListMedias;

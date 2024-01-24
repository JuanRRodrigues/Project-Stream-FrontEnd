import React, { useState } from 'react';
import './style.scss';
import { Button, TextField } from "@mui/material"
import axios from 'axios';

const Teste: React.FC = () => {
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

  return (
    <form onSubmit={aoSubmeterForm}>
      <TextField
        value={nameTitle}
        onChange={(evento) => setTitle(evento.target.value)}
        id="standard-basic"
        label="Name"
        variant="standard"
      />
      <TextField
        value={nameCategory}
        onChange={(evento) => setCategory(evento.target.value)}
        id="standard-basic"
        label="Type"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Confirm
      </Button>
    </form>
  );
};

export default Teste;

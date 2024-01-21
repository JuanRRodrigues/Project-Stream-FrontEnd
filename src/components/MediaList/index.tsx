import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MediaData } from "../../interface/MediaData";
import axios from "axios";
import './style.scss'

const MediaList: React.FC = () => {
  const [data, setData] = useState<MediaData[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/movies/list')
      .then(response => {
        setData(response.data); // Assuming the response data is an array of MediaData
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    

    
    <Swiper
    
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
    >
      {data.map((mediaData, index) => (
        <SwiperSlide key={index}>
          <img className="poster" src={mediaData.poster} alt="" title="" />
          <p className="title">{mediaData.title}</p>
          <p className="description">{mediaData.description}</p>
        </SwiperSlide>
        
      ))}
      
    </Swiper>
  );
}

export default MediaList;

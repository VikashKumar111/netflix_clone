import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

const Banner = () => {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

  return (
      <header className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
              backgroundPosition:"center center",
          }}
      > 
          <div className='banner__contents'>
              {/* title */}
              <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
              {/* div>2 buttons */}
              <div className='banner__buttons'>
                  <button className='banner__button'>PLay</button>
                  <button className='banner__button'>My List</button>  
              </div>
              {/* description */}
              <h1 className='banner__description'>{movie?.overview}</h1>
          </div>
      </header>
  )
}

export default Banner
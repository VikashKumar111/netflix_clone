import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

const Banner = () => {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.result[Math.floor(Math.random() * request.data.results.length - 1)]);
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
              backgroundPosition:"center center"
          }}
      > 
          <div className='banner__contents'>
              {/* title */}
              {/* div>2 buttons */}
              {/* description */}
          </div>
      </header>
  )
}

export default Banner
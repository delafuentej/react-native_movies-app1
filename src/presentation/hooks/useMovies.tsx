/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import  { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases/';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
    const[ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);
    const[ isLoading, setIsLoading ] = useState(true);

    useEffect(()=>{
      initLoad();
    },[]);

    const initLoad = async()=>{
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        // console.log('nowPlayingMovies',nowPlayingMovies);
    };

  return{
    isLoading,
    nowPlaying,

  };
};

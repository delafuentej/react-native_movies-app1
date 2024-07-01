/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
// consuming the api, getting the information from movies through a funcion
// use-case agnostics => do not require third party dependencies in order to operate

import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { type Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async( fetcher: HttpAdapter): Promise<Movie[]> =>{
    try{
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        console.log('nowPlaying', nowPlaying);
        return [];
    }catch(error){
        console.log(error);
        throw new Error('Error Fetching Movies - Now Playing');
    }
};
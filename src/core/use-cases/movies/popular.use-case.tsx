/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { type Movie } from '../../entities/movie.entity';
import { MovieDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';

export const moviesPopularUseCase = async( fetcher: HttpAdapter): Promise<Movie[]> =>{
    try{
        const popular = await fetcher.get<MovieDBResponse>('/popular');
        console.log('popular', popular);
        //to map the result data
        return popular.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
    }catch(error){
        console.log(error);
        throw new Error('Error Fetching Movies - Popular');
    }
};
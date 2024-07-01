/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { type Movie } from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async( fetcher: HttpAdapter): Promise<Movie[]> =>{
    try{
        const topRated = await fetcher.get<MovieDBResponse>('/top_rated');
        console.log('topRated', topRated);
        //to map the result data
        return topRated.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
    }catch(error){
        console.log(error);
        throw new Error('Error Fetching Movies - Top Rated');
    }
// eslint-disable-next-line prettier/prettier
};
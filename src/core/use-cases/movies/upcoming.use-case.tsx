/* eslint-disable prettier/prettier */
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { UpcomingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { type Movie } from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async( fetcher: HttpAdapter): Promise<Movie[]> =>{
    try{
        const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');
        console.log('upcoming', upcoming);
        //to map the result data
        return upcoming.results.map( result => MovieMapper.fromMovieDBResultToEntity(result));
    }catch(error){
        console.log(error);
        throw new Error('Error Fetching Movies - Upcoming');
    }
};
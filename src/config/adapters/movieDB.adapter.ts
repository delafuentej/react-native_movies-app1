/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key:'bcdc6b9c6986a26a6168de80ef74fb46',
    },
});
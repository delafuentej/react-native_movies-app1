/* eslint-disable prettier/prettier */
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
    baseUrl: string;
    params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter{
    // get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
    //     throw new Error("Method not implemented.");
    // }

    private axiosInstance: AxiosInstance;

    constructor (options: Options){
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params,
        });
    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
             //to implement the method:
             try{
                // const {data} = await axios.get<T>(url, options);
                const { data } = await this.axiosInstance.get<T>(url, options);
                return data;

             }catch(e){
                throw new Error(`GET fetching error: ${url}`);
             }
         }

}
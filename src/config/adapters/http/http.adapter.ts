/* eslint-disable prettier/prettier */
//abstract: not implemented => define the rules of the methods and properties
//of the classes that extend in the adapter must have;

export abstract class HttpAdapter {
    // abstract get( url: string, options: any): Promise<any>;
    abstract get<T>(url: string, options?: Record<string, unknown>) : Promise<T>;
}
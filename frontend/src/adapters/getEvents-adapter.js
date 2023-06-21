import { fetchHandler, basicFetchOptions } from "../utils"; 

const baseUrl = '/api/events';


export const getEvent = async () => {
    const postOptions = basicFetchOptions()
    const response = await fetchHandler(baseUrl, postOptions);
    console.log(response)
    return response;
    };
    
    
    export const getAllEvents = async () => {
    const [events] = await fetchHandler(baseUrl);
    return events || [];  
    }; 
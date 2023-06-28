import { fetchHandler, basicFetchOptions } from "../utils"; 

const baseUrl = '/api/events';


export const getEvent = async () => {
    const postOptions = basicFetchOptions()
    const response = await fetchHandler(baseUrl, postOptions);
    console.log("allevents"+response)
    return response;
    };
    
    //console.log()
    export const getAllEvents = async () => {
    const [events] = await fetchHandler(baseUrl);
    console.log("getallevents"+events)
    return events || [];  
    }; 
    getAllEvents()
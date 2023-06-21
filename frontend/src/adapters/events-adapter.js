 import { fetchHandler, getPostOptions } from "../utils";


const baseUrl = '/api/events';


export const createEvent = async (eventdata) => {
const postOptions = getPostOptions(eventdata)
const response = await fetchHandler(baseUrl, postOptions);
return response;
};


export const getAllEvents = async () => {
const [events] = await fetchHandler(baseUrl);
return events || [];
}; 

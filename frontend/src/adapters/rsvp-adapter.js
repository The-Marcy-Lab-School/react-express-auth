import { fetchHandler, getPostOptions } from "../utils";


const baseUrl = '/api/volunteer';


export const createVolunteer = async (requestBody) => {
const postOptions = getPostOptions(requestBody)
const response = await fetchHandler(baseUrl, postOptions);
// response)
return response;
};

export const getAllVolunteers = async (id) => {
    const [volunteer] = await fetchHandler(`${baseUrl}/${id}`);
    return volunteer || [];
    }; 
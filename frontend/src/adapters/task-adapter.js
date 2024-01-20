import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions} from "../utils";

const baseUrl = 'http://localhost:3000/api/tasks';


export const createTask = async ({ user, taskname, description }) => (
    fetchHandler(baseUrl, getPostOptions({ user,taskname, description }))
  );
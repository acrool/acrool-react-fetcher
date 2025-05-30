import axios, {CreateAxiosDefaults} from 'axios';


export const createAxiosInstance = (config?: CreateAxiosDefaults) => {
    return axios.create({
        timeout: 2 * 60 * 1000,
        ...config,
    });
};

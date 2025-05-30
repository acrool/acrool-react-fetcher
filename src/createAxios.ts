import axios from 'axios';


type TCreateAxiosInstanceConfig = ReturnType<typeof axios.create>;

export const createAxiosInstance = (config?: TCreateAxiosInstanceConfig) => {
    return axios.create({
        baseURL: '/graphql',
        timeout: 2 * 60 * 1000,
        ...config,
    });
};

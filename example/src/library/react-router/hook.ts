import qs from 'qs';
import {useLocation} from 'react-router-dom';


const useQuery = <T>(): T => {
    const {search} = useLocation();
    return qs.parse(search, {ignoreQueryPrefix: true}) as any;
};


export {
    useQuery
};

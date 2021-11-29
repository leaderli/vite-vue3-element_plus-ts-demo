import axios from '@/util/request';
export const loginApi = () => {
    return axios({
        path:'/users'
    });
};
export const upApi = (data:any) => {
    return axios({
        path:'/users',
        method:'POST',
        data
    });
};
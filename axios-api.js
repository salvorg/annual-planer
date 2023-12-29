import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://annualplanner-26312-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;
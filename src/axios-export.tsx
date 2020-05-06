import axios from 'axios';

export const blog = axios.create({
    baseURL: `https://react-blog-klajokliu-keliones.firebaseio.com`,
});

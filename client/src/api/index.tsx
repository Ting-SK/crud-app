import { api } from './config';

export const fetchAuthors = () => {
    return api.get(`/authors`);
};

export const fetchBooks = () => {
    return api.get(`/books`);
};
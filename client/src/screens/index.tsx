import type { RouteObject } from "react-router-dom";
import { BooksRoute } from './BooksRoute';
import { AuthorsRoute } from './AuthorsRoute';
import { HomeRoute } from './HomeRoute';

export const router: RouteObject[] = [
    {
        path: "/",
        element: <HomeRoute />,
    },
    {
        path: "/authors",
        element: <AuthorsRoute />,
    },
    {
        path: "/books",
        element: <BooksRoute />,
    },
];
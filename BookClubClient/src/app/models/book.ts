
export interface book{
    id: number;
    isbn:string;
    title:string;
    author:string;
    categoryName:string;
}

export interface FavoriteBook{
    id: number,
    email: string,
    isbn: string
}

export interface BookToRead{
    id: number,
    email: string,
    isbn: string
}

export interface BooksRead{
    id: number,
    user: string,
    isbn: string,
    pages: number
}
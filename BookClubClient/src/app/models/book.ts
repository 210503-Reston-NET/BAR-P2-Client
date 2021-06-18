
export interface book{
    isbn:string,
    title:string,
    author:string,
    categoryId:string,
    category: null,
    imageUrl: string
}

export interface FavoriteBook{
    favoriteBookId: number,
    userEmail: string,
    user: null,
    isbn: string,
    book: null
}

export interface BookToRead{
    booksToReadId: number,
    userEmail: string,
    user: null,
    isbn: string,
    book: null,
}

export interface BooksRead{
    booksReadId: number,
    userEmail: string;
    user: null,
    isbn: string,
    book: null,
    bookPages: number
}
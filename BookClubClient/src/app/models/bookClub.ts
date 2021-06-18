export interface BookClub {
    bookClubId:number,
    name: string,
    description: string,
    ISBN: string,
    email: string,
    img: string,
    book: null,
    user: null,
    userEmail: null
}

export interface BClub {
    bookClubId:number,
    name: string,
    userEmail: string,
    user: null,
    description: string,
    isbn: string,
    book: null,
}

export interface followClub {
    followClubId: number,
    followerEmail: string,
    bookClubId: number,
    bookClub: null
}
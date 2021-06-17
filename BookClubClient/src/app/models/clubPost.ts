export interface clubPost {
    id:number,
    user: null,
    BookClubID: number,
    totalLike: number,
    totalDislike: number,
    post: string,
    BookClubTitle?: string,
    userEmail:string,
    bookClub:null,
    date:string,
    clubPostId:number,
}

export interface CPost{
    clubPostId: number,
    userEmail: string,
    user: null,
    post: string,
    bookClubId: number,
    bookClub: null,
    totalLike: number,
    totalDislike: number,
    date: string
}

export interface clubPostLike{
    clubPostLikesId: number,
    like: boolean,
    dislike: boolean,
    clubPostId: number,
    clubPost: null,
    userEmail: string,
    user: null
}



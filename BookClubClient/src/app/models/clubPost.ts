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

export interface clubPostLike{
    clubPostLikesId: number,
    like: boolean,
    dislike: boolean,
    clubPostId: number,
    clubPost: null,
    userEmail: string,
    user: null
}



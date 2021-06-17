export interface userPost {
    userPostId: number,
    userEmail: string,
    user: null,
    post: string,
    totalLike: number,
    totalDislike: number,
    date: string; 
}

export interface userPostLike{
    userPostLikesId: number,
    like: boolean,
    dislike: boolean,
    userPostId: number,
    userPost: null,
    userEmail: string,
    user: null
}
export interface UserComment {
    userCommentId: number,
    userEmail: string,
    user: null,
    userPostId: number,
    userPost: null,
    message: string
}

export interface ClubComment {
    clubCommentId: number,
    userEmail: string,
    user: null,
    clubPostID: number,
    clubPost: null,
    message: string
}
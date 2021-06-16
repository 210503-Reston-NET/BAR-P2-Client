export interface user {
    userEmail: string,
    password: string,
    address: string,
    pagesRead: number
}

export interface FollowUser {
    followUserId: number,
    followerEmail: string,
    userEmail: string,
    user: null
}
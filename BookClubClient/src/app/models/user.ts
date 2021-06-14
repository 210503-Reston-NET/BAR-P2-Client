export interface user {
    email: string,
    password: string,
    address: string,
    pagesRead: number
}

export interface FollowUser {
    id: number,
    followerEmail: string,
    followedEmail: string
}
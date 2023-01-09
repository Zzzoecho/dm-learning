
export interface Author {
    userId: string
    nickName: string
    avatar: string
    isFollowed: boolean
}

export interface Card {
    id: string
    type: 'photo' | 'video'
    cover: string
    title: string
    desc: string
    author: Author
}

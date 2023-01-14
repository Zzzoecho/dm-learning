export interface Author {
  id: string
  nickName: string
  avatar: string
  isFollowed: boolean
}

export interface Photo {
  id: string
  width: number
  height: number
  url: string
}

export interface Card {
  id: string
  type: 'photo' | 'video'
  cover: Photo
  title: string
  desc: string
  author: Author
  like: string
}

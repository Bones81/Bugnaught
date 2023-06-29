import UserType from "./UserType"

interface CommentType {
    id: number,
    author: UserType,
    created_at: string,
    bid: number,
    pid: number,
    content: string
}

export default CommentType
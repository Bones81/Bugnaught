import CommentType from "./CommentType"
import UserType from "./UserType"

interface Bug {
    id: number,
    name: string,
    pid: number,
    status: string,
    priority: string,
    description: string,
    developer: UserType | null,
    comments: CommentType[] | null,
    created_at: string,
    updated_at: string
  }

export default Bug
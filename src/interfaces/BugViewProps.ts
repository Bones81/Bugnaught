import { ChangeEvent } from "react"
import Bug from "./Bug"
import Project from "./Project"
import CommentType from "./CommentType"
import UserType from "./UserType"

interface BugViewProps {
    bug: Bug,
    comments: CommentType[],
    handleBugStatusUpdate: (e: ChangeEvent<HTMLSelectElement>, id: Number) => void,
    project: Project,
    projects: Project[],
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
    setView: React.Dispatch<React.SetStateAction<string>>,
    users: UserType[]
}

export default BugViewProps
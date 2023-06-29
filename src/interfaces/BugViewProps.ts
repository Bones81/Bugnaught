import { ChangeEvent } from "react"
import Bug from "./Bug"
import Project from "./Project"
import CommentType from "./CommentType"

interface BugViewProps {
    bug: Bug,
    comments: CommentType[],
    handleBugStatusUpdate: (e: ChangeEvent<HTMLSelectElement>, id: Number) => void,
    project: Project,
    projects: Project[],
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
    setView: React.Dispatch<React.SetStateAction<string>>
}

export default BugViewProps
import Project from "./Project"
import Bug from "./Bug"
import CommentType from "./CommentType"
import UserType from "./UserType"

interface DashboardProps {
    view: String,
    setView: React.Dispatch<React.SetStateAction<string>>
    projects: Project[],
    bugs: Bug[],
    setBugs: React.Dispatch<React.SetStateAction<Bug[]>>,
    comments: CommentType[],
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>,
    users: UserType[]
}

export default DashboardProps
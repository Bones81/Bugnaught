import Project from "./Project"
import Bug from "./Bug"
import CommentType from "./CommentType"

interface DashboardProps {
    view: String,
    setView: React.Dispatch<React.SetStateAction<string>>
    projects: Project[],
    bugs: Bug[],
    setBugs: React.Dispatch<React.SetStateAction<Bug[]>>,
    comments: CommentType[],
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
}

export default DashboardProps
import Bug from "./Bug"
import Project from "./Project"

interface BugViewProps {
    bug: Bug,
    project: Project,
    projects: Project[],
    setView: React.Dispatch<React.SetStateAction<string>>
}

export default BugViewProps
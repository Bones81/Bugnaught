import Project from "./Project"

interface DashboardProps {
    view: String,
    setView: React.Dispatch<React.SetStateAction<string>>
    projects: Project[],
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

export default DashboardProps
import Project from './Project'
import UserType from './UserType'

interface InfoPanelProps {
    projects: Project[],
    setView: React.Dispatch<React.SetStateAction<string>>,
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>,
    user: UserType
}

export default InfoPanelProps
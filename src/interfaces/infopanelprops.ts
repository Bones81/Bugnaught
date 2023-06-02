import Project from './project'

interface InfoPanelProps {
    projects: Project[],
    setView: React.Dispatch<React.SetStateAction<string>>,
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>
}

export default InfoPanelProps
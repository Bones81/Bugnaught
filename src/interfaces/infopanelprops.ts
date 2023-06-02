import Project from './project'

interface InfoPanelProps {
    projects: Project[],
    setView: React.Dispatch<React.SetStateAction<string>>
}

export default InfoPanelProps
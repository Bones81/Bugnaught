import { ChangeEvent } from "react"
import Bug from "./Bug"
import Project from "./Project"

interface BugViewProps {
    bug: Bug,
    handleBugStatusUpdate: (e: ChangeEvent<HTMLSelectElement>, id: Number) => void,
    project: Project,
    projects: Project[],
    setView: React.Dispatch<React.SetStateAction<string>>
}

export default BugViewProps
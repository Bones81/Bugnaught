import Project from "./Project";
import Bug from "./Bug";
import { MouseEvent, TouchEvent } from "react";

interface ProjectViewProps {
    bugs: Bug[],
    handleResetProjectsView: (e: MouseEvent | TouchEvent) => void,
    project: Project,
    setView: React.Dispatch<React.SetStateAction<string>>,
    setBugID: React.Dispatch<React.SetStateAction<Number | null>>,
    setBugs: React.Dispatch<React.SetStateAction<Bug[]>>
}

export default ProjectViewProps
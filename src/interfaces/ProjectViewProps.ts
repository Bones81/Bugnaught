import Project from "./Project";
import Bug from "./Bug";
import CommentType from "./CommentType";
import { MouseEvent, TouchEvent } from "react";

interface ProjectViewProps {
    bugs: Bug[],
    comments: CommentType[],
    handleResetProjectsView: (e: MouseEvent | TouchEvent) => void,
    project: Project,
    setView: React.Dispatch<React.SetStateAction<string>>,
    setBugID: React.Dispatch<React.SetStateAction<Number | null>>,
    setBugs: React.Dispatch<React.SetStateAction<Bug[]>>,
    setComments: React.Dispatch<React.SetStateAction<CommentType[]>>
}

export default ProjectViewProps
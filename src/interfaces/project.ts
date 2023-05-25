import BugState from "./bug"

interface ProjectState {
    id: number,
    name: string,
    bugs: BugState[]
  }

export default ProjectState
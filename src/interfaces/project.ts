import Bug from "./bug"

interface Project {
    id: number,
    name: string,
    bugs: Bug[]
  }

export default Project
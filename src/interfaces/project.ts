import Bug from "./Bug"

interface Project {
    id: number,
    name: string,
    bugs: Bug[],
    team_lead: number,
    assigned_devs: number[]
  }

export default Project
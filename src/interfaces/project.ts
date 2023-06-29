import Bug from "./Bug"
import UserType from "./UserType"

interface Project {
    id: number,
    name: string,
    bugs: Bug[],
    team_lead: UserType | null,
    assigned_devs: UserType[] | null
  }

export default Project
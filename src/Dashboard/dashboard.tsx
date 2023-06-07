import { useState, useEffect } from "react"
import "./dashboard.css"

import Bug from "../interfaces/bug"
import Project from "../interfaces/project"
import DashboardProps from '../interfaces/dashboardprops'

import ProjectView from "../ProjectView/projectView"
import BugView from "../BugView/BugView"

const Dashboard: React.FunctionComponent<DashboardProps> = (props: any) => {
    const mockBugs = [
        {id: 1, name: 'Data issue', pid: 1, status: "open", priority: 'high', developer: "Nathan", description: 'No real data yet!'},
        {id: 2, name: 'Can\'t add comments', pid: 1, status: "open", priority: 'medium', developer: "Nathan", description: 'Cannot add comments to bug yet!'},
        {id: 3, name: 'Needs Bootstrap', pid: 1, status: "closed", priority: 'low', developer: "Sujan", description: 'Bootstrap not integrated!'},
        {id: 4, name: 'Colors are bad', pid: 2, status: "open", priority: 'high', developer: "", description: 'Needs better colors'},
        {id: 5, name: 'Blur not working on mobile', pid: 2, status: "open", priority: 'medium', developer: "Sujan", description: 'Blur not working on mobile, even though it looks fine in devTools'},
        {id: 6, name: 'Database speed', pid: 2, status: "open", priority: 'low', developer: "Sujan", description: 'Data takes too long to load from spun down servers!'},
        {id: 7, name: 'Layout too simple', pid: 3, status: "open", priority: 'high', developer: "", description: 'Needs pizazz; maybe parallax?'},
        {id: 8, name: 'Old images', pid: 3, status: "open", priority: 'medium', developer: "", description: 'Needs some fresh imagery'},
        {id: 9, name: 'Colors', pid: 3, status: "open", priority: 'low', developer: "", description: 'Too much pastel; Find new, more dramatic color scheme.'}
      ]

    // localStorage.removeItem("BUGNAUGHT_BUGS") // development use only when resetting of bugs is needed
    // This two lines should set the initial bugs array from localStorage, if it already exists; otherwise it will initialize bugs with an empty array
    const initialBugs: Bug[] = localStorage.getItem("BUGNAUGHT_BUGS") && JSON.parse(localStorage.getItem("BUGNAUGHT_BUGS") || "[]") || mockBugs
    const [bugs, setBugs] = useState<Bug[]>(initialBugs)
    const [bugID, setBugID] = useState<Number | null>(null)
    const [projectID, setProjectID] = useState<Number | null>(null)

    const handleSelectProject = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>, pid: Number) => {
        e.preventDefault()
        props.setView("single-project-view")
        setProjectID(pid)
    }

    const handleResetProjectsView = (e: any) => {
        e.preventDefault()
        props.setView("projects-view")
    }

    useEffect(() => {
        props.setProjects([
            {id: 1, name: 'Bug Tracker App', bugs: [...bugs.slice(0,3)]},
            {id: 2, name: 'Portfolio Site', bugs: [...bugs.slice(3,6)]},
            {id: 3, name: 'Actor Website', bugs: [...bugs.slice(6,9)]},
          ])
    }, [bugs])

    return (
        <>
            {(()=> { 
                switch(props.view) {
                    case "projects-view":
                        return (
                            <>
                            <h1 className="display-1 mb-3 text-center">All Projects View</h1>
                            <div className="container">
                                <div className="row justify-content-center">
                                { props.projects.length ? props.projects.map( (project: Project) => {
                                    return (
                                            <div 
                                                key={project.id} 
                                                onClick={(e) => handleSelectProject(e, project.id)} 
                                                className="card rounded shadow m-3 p-5 bg-primary col-10 col-xl-12 pointer justify-content-between"
                                            >
                                                <h3 className="text-light text-center">{ project.name }</h3>
                                                <div>
                                                    <h5 className="text-dark">Bug List</h5>
                                                    <ul className="list-unstyled bugs-ul">
                                                        { project.bugs.length ? project.bugs.map((bug: Bug) => {
                                                            return (
                                                            <li
                                                                key={bug.id}
                                                                className="text-light"
                                                            >
                                                                { bug.status === 'closed' ? '✅' : bug.priority === 'medium' ? '🟡' : bug.priority === 'low' ? '🟢' : '🔴' } {bug.name }
                                                            </li>
                                                            )
                                                        }) : null }
                                                    </ul>
                                                </div>
                                            </div>
                                    )}) 
                                    : 
                                    <h1>No Projects Found</h1>
                                }
                                </div>
                            </div>
                            </>
                        )
                    case "manage-roles-view":
                        return (
                            <>
                                <h1 className="display-1 mb-3 text-center">Manage Roles</h1>
                                <h6 className="text-center">Coming Soon!</h6>
                            </>
                            )
                    case "assign-devs-view":
                        return (
                            <>
                                <h1 className="display-1 mb-3 text-center">Assign Devs</h1>
                                <h6 className="text-center">Coming Soon!</h6>
                            </>
                        )
                    case "single-project-view":
                        const project = props.projects.find( (p: Project) => p.id === projectID )
                        
                        return (
                            <>
                                <h1 className="display-1 mb-3 text-center">Single Project View</h1>
                                <ProjectView 
                                    project={project} 
                                    setView={props.setView} 
                                    setBugID={setBugID}
                                    bugs={bugs}
                                    setBugs={setBugs}
                                    handleResetProjectsView={handleResetProjectsView}
                                />
                            </>
                        )
                    case "single-bug-view":
                        const bug = bugs.find( (bug: Bug) => bug.id === bugID )
                        const associatedProject = () => {
                            if(bug) {
                                return props.projects.find( (proj: Project) => proj.id === bug.pid)
                            }
                            return null
                        }

                        return (
                            <>
                                <h1 className="display-1 mb-3 text-center">Bug View</h1>
                                <BugView bug={bug} projects={props.projects} project={associatedProject()} setView={props.setView} />
                            </>
                        )
                    case "user-bugs-view":
                        return (
                            <>
                                <h1 className="display-1 mb-3 text-center">User Bugs View</h1>
                                <h6 className="text-center">Coming Soon!</h6>
                            </>
                        )
                    case "single-user-view":
                        return (
                            <>
                                <h1 className="display-1 mb-3 text-center">Single User View</h1>
                                <h6 className="text-center">Coming Soon!</h6>
                            </>
                        )
                    default:
                        return <h1>Default switch case active: no valid view in state</h1>   
                }})()
            }
        
        </>
    )
}

export default Dashboard
import { useState, ChangeEvent } from "react"
import "./dashboard.css"

import Bug from "../interfaces/Bug"
import BugView from "../BugView/BugView"
import DashboardProps from "../interfaces/DashboardProps"
import Project from "../interfaces/Project"
import ProjectView from "../ProjectView/ProjectView"

const Dashboard: React.FunctionComponent<DashboardProps> = ({projects, bugs, setBugs, view, setView, comments, setComments, users }: DashboardProps) => {

    const [bugID, setBugID] = useState<Number | null>(null)
    const [projectID, setProjectID] = useState<Number | null>(null)

    const handleBugStatusUpdate = (e: ChangeEvent<HTMLSelectElement>, id: Number) => {
        e.preventDefault()
        const thisBug = bugs.find( (bug: Bug) => bug.id === id)
        // find bug inside bugs, update its contents, replace it in bugs, will be easier with database
        if(thisBug) { 
            thisBug.status = e.target.value
            const newBugs: Bug[] = [...bugs].map( (bug: Bug) => {
                if (bug.id === id) return thisBug
                else return bug
            })
            localStorage.setItem("BUGNAUGHT_BUGS", JSON.stringify(newBugs)) // this simulates writing to the database
            setBugs(newBugs) // this essentially simulates resetting the state to match the now updated simulated database
        }


    }

    const handleSelectProject = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>, pid: Number) => {
        e.preventDefault()
        setView("single-project-view")
        setProjectID(pid)
    }

    const handleResetProjectsView = (e: any) => {
        e.preventDefault()
        setView("projects-view")
    }

    return (
        <>
            {(()=> { 
                switch(view) {
                    case "projects-view":
                        return (
                            <>
                            <h1 className="display-1 mb-3 text-center">All Projects View</h1>
                            <div className="container">
                                <div className="row justify-content-center">
                                { projects.length ? projects.map( (project: Project) => {
                                    return (
                                            <div 
                                                key={project.id} 
                                                onClick={(e) => handleSelectProject(e, project.id)} 
                                                className="card rounded shadow m-3 p-5 bg-primary col-xl-5 pointer justify-content-between"
                                            >
                                                <h3 className="text-light text-center">{ project.name }</h3>
                                                <h5 className="text-dark text-center mb-auto">Bug List</h5>
                                                <div>
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
                        const project = projects.find( (p: Project) => p.id === projectID )
                        
                        return project && (
                            <>
                                <h1 className="display-1 mb-3 text-center">Single Project View</h1>
                                <ProjectView 
                                    project={project} 
                                    setView={setView} 
                                    setBugID={setBugID}
                                    bugs={bugs}
                                    setBugs={setBugs}
                                    handleResetProjectsView={handleResetProjectsView}
                                    comments={comments}
                                    setComments={setComments}
                                />
                            </>
                        )
                    case "single-bug-view":                        
                        const bug = bugs.find( (bug: Bug) => bug.id === bugID )
                        const associatedProject: Project | undefined = bug && projects.find( (proj: Project) => proj.id === bug.pid)
                        if (associatedProject) {
                            return (
                                <>
                                    <h1 className="display-1 mb-3 text-center">Bug View</h1>
                                    { bug ? <BugView 
                                                bug={bug} 
                                                handleBugStatusUpdate={handleBugStatusUpdate} 
                                                projects={projects} 
                                                project={associatedProject} 
                                                setView={setView} 
                                                comments={comments} 
                                                setComments={setComments}
                                                users={users}
                                            /> : <h3>Error: No Bug Data Found</h3> } 
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <h1 className="display-1 mb-3 text-center">Bug View</h1>
                                    <h3>Error: Related Project Data for Bug Not Found</h3>
                                </>
                            )
                        }
                    

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
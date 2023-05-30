import { useState, useEffect } from "react"

import Bug from "../interfaces/bug"
import Project from "../interfaces/project"
import DashboardProps from '../interfaces/dashboardprops'

import ProjectView from "../ProjectView/projectView"
import BugView from "../BugView/BugView"

const Dashboard: React.FunctionComponent<DashboardProps> = (props: any) => {

    const [bugs, setBugs] = useState<Bug[]>([])
    const [projects, setProjects] = useState<Project[]>([])
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
      setBugs([
        {id: 1, name: 'Needs real data', pid: 1, priority: 'high', description: 'No real data yet!'},
        {id: 2, name: 'Can\'t add comments', pid: 1, priority: 'medium', description: 'Cannot add comments to bug yet!'},
        {id: 3, name: 'Needs Bootstrap', pid: 1, priority: 'closed', description: 'Bootstrap not integrated!'},
        {id: 4, name: 'Colors are bad', pid: 2, priority: 'high', description: 'Needs better colors'},
        {id: 5, name: 'Blur not working on mobile', pid: 2, priority: 'medium', description: 'Blur not working on mobile, even though it looks fine in devTools'},
        {id: 6, name: 'Database speed', pid: 2, priority: 'low', description: 'Data takes too long to load from spun down servers!'},
        {id: 7, name: 'Layout too simple', pid: 3, priority: 'high', description: 'Needs pizazz; maybe parallax?'},
        {id: 8, name: 'Old images', pid: 3, priority: 'medium', description: 'Needs some fresh imagery'},
        {id: 9, name: 'Colors', pid: 3, priority: 'low', description: 'Too much pastel; Find new, more dramatic color scheme.'}
      ])
  

    }, [])

    useEffect(() => {
        setProjects([
            {id: 1, name: 'Bug Tracker App', bugs: [...bugs.slice(0,3)]},
            {id: 2, name: 'Portfolio Site', bugs: [...bugs.slice(3,6)]},
            {id: 3, name: 'Actor Website', bugs: [...bugs.slice(6,9)]},
          ])
    }, [bugs])

    return (
        <>
            <h1 className="display-1 text-center">Dashboard</h1>
            {(()=> { 
                switch(props.view) {
                    case "projects-view":
                        return (
                            <div className="container">
                                <div className="row justify-content-evenly">
                                { projects.length ? projects.map( project => {
                                    return (
                                            <div 
                                                key={project.id} 
                                                onClick={(e) => handleSelectProject(e, project.id)} 
                                                className="card rounded-0 shadow m-3 p-3 bg-primary col-10 col-lg-3 pointer"
                                            >
                                                <h3 className="text-light">{ project.name }</h3>
                                                <h5 className="text-dark">Bug List</h5>
                                                <ul className="list-unstyled bugs-ul">
                                                    { project.bugs.length ? project.bugs.map(bug => {
                                                        return ( 
                                                        <li 
                                                            key={bug.id} 
                                                            className="text-light"
                                                        >
                                                            { bug.priority === 'high' ? '🔴' : bug.priority === 'medium' ? '🟡' : bug.priority === 'low' ? '🟢' : '✅' } {bug.name } 
                                                        </li>
                                                        )
                                                    }) : null }
                                                </ul>
                                            </div>
                                    )}) 
                                    : 
                                    <h1>No Projects Found</h1>
                                }
                                </div>
                            </div>
                        )
                    case "manage-roles-view":
                        return (
                            <h1 className="text-center">Manage Roles View active</h1>
                        )
                    case "assign-devs-view":
                        return (
                            <h1 className="text-center">Assign Devs View active</h1>
                        )
                    case "single-project-view":
                        // Have to figure out how to pass a single project to this view
                        const project = projects.find( p => p.id === projectID )
                        
                        return (
                            <>
                                <ProjectView 
                                    project={project} 
                                    setView={props.setView} 
                                    setBugID={setBugID} 
                                    handleResetProjectsView={handleResetProjectsView} 
                                />
                            </>
                        )
                    case "single-bug-view":
                        const bug = bugs.find( bug => bug.id === bugID )

                        return (
                            <BugView bug={bug} projects={projects} setView={props.setView} />
                        )
                    default:
                        return <h1>Default switch case active: no valid view in state</h1>   
                }})()
            }
        
        </>
    )
}

export default Dashboard
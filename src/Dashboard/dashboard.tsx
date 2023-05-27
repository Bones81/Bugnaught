import { useState, useEffect } from "react"
import BugState from "../interfaces/bug"
import ProjectState from "../interfaces/project"

interface DashboardProps {
    view: String
}

const Dashboard: React.FunctionComponent<DashboardProps> = (props: any) => {

    const [bugs, setBugs] = useState<BugState[]>([])
    const [projects, setProjects] = useState<ProjectState[]>([])
    
    useEffect(() => {
      setBugs([
        {id: 1, name: 'Needs real data', pid: 1, priority: 'high', description: 'No real data yet!'},
        {id: 2, name: 'Can\'t add comments', pid: 1, priority: 'medium', description: 'Cannot add comments to bug yet!'},
        {id: 3, name: 'Needs Bootstrap', pid: 1, priority: 'low', description: 'Bootstrap not integrated!'},
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
                                            <div key={project.id} className="card shadow-lg m-3 p-3 bg-primary col-10 col-lg-3">
                                                <h3 className="text-light">{ project.name }</h3>
                                                <h5 className="text-dark">Bug List</h5>
                                                <ul className="list-unstyled">
                                                    { project.bugs.length ? project.bugs.map(bug => {
                                                        return ( 
                                                        <li key={bug.id} className="text-light">
                                                            { bug.priority === 'high' ? '🔴' : bug.priority === 'medium' ? '🟡' : '🟢' } {bug.name } 
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
                            <h1>Manage Roles View active</h1>
                        )
                    case "assign-devs-view":
                        return (
                            <h1>Assign Devs View active</h1>
                        )
                    default:
                        return <h1>Default switch case active: no valid view in state</h1>   
                }})()
            }
        
        </>
    )
}

export default Dashboard
import { useState, useEffect } from "react"
import BugState from "../interfaces/bug"
import ProjectState from "../interfaces/project"

const Dashboard = () => {
    const [bugs, setBugs] = useState<BugState[]>([])
    const [projects, setProjects] = useState<ProjectState[]>([])
    
    useEffect(() => {
      setBugs([
        {name: 'Needs real data', priority: 'high', description: 'No real data yet!'},
        {name: 'Can\'t add comments', priority: 'medium', description: 'Cannot add comments to bug yet!'},
        {name: 'Needs Bootstrap', priority: 'low', description: 'Bootstrap not integrated!'},
        {name: 'Colors are bad', priority: 'high', description: 'Needs better colors'},
        {name: 'Blur not working on mobile', priority: 'medium', description: 'Blur not working on mobile, even though it looks fine in devTools'},
        {name: 'Database speed', priority: 'low', description: 'Data takes too long to load from spun down servers!'},
        {name: 'Layout too simple', priority: 'high', description: 'Needs pizazz; maybe parallax?'},
        {name: 'Old images', priority: 'medium', description: 'Needs some fresh imagery'},
        {name: 'Colors', priority: 'low', description: 'Too much pastel; Find new, more dramatic color scheme.'}
      ])
  
      setProjects([
        {id: 1, name: 'Bug Tracker App', bugs: [...bugs.slice(0,3)]},
        {id: 2, name: 'Portfolio Site', bugs: [...bugs].slice(3,6)},
        {id: 3, name: 'Actor Website', bugs: [...bugs].slice(6,9)},
      ])
    }, [])

    return (
        <>
            <h1>Dashboard Goes Here</h1>
            <div className="container-lg">
                <div className="row">
                { projects.length ? projects.map( project => {
                    return (
                            <div className="card shadow-lg m-3 p-3 bg-primary col-sm-4 col-lg-3">
                                <h3 className="text-light">{ project.name }</h3>
                                <h5 className="text-dark">Bug List</h5>
                                <ul>
                                    { project.bugs.length ? project.bugs.map(bug => {
                                        return ( 
                                        <li className="text-light">{ bug.name }</li>
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
            
        {/* Bugs Mapping */}
        {/* { bugs.length ? bugs.map(bug => {
            return (
            <div className="wrapper">
                <div className="card">
                    <h3>{bug.name}</h3>
                    <h5>{bug.priority}</h5>
                    <p>{bug.description}</p>
                </div>
            </div>
            )}) 
            : 
            <h3>No Bugs Found!</h3>
        } */}

        {/* Projects Mapping */}
        {/* { projects.length ? projects.map(project => {
            return (
            <div className="wrapper">
                <div className="card">
                    <h3>{project.name}</h3>
                    <h5>{project.id}</h5>
                </div>
            </div>
            )}) 
            : 
            <h3>No Projects Found!</h3>
        } */}

        {/* End Content */}
        
        </>
    )
}

export default Dashboard
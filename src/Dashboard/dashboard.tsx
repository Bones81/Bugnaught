import { useState, useEffect } from "react"
import BugState from "../interfaces/bug"
import ProjectState from "../interfaces/project"

const Dashboard = () => {
    const [bugs, setBugs] = useState<BugState[]>([])
    const [projects, setProjects] = useState<ProjectState[]>([])
    
    useEffect(() => {
      setBugs([
        {name: 'bug1', priority: 'high', description: 'No real data yet!'},
        {name: 'bug2', priority: 'medium', description: 'Cannot add comments to bug yet!'},
        {name: 'bug3', priority: 'low', description: 'Bootstrap not integrated!'}
      ])
  
      setProjects([
        {id: 1, name: 'Bug Tracker App'},
        {id: 2, name: 'Portfolio Site'},
        {id: 3, name: 'Actor Website'},
      ])
    }, [])

    return (
        <>
            <h1>Dashboard Goes Here</h1>
            <div className="container">
                <div className="card">
                    <h3>Project Name</h3>
                    <h5>List of Bugs</h5>
                    <ul>
                        <li>Bug 1</li>
                        <li>Bug 2</li>
                        <li>Bug 3</li>
                        <li>Bug 4</li>
                        <li>Bug 5</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Project Name</h3>
                    <h5>List of Bugs</h5>
                    <ul>
                        <li>Bug 1</li>
                        <li>Bug 2</li>
                        <li>Bug 3</li>
                        <li>Bug 4</li>
                        <li>Bug 5</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Project Name</h3>
                    <h5>List of Bugs</h5>
                    <ul>
                        <li>Bug 1</li>
                        <li>Bug 2</li>
                        <li>Bug 3</li>
                        <li>Bug 4</li>
                        <li>Bug 5</li>
                    </ul>
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
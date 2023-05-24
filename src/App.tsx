import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header/header'
import Navigation from './Navigation/navigation'
import BugState from './interfaces/bug'
import ProjectState from './interfaces/project'
import { Button } from 'react-bootstrap'

const App: React.FC = () => {
  const [bugs, setBugs] = useState<BugState[]>([])
  const [projects, setProjects] = useState<ProjectState[]>([])
  
  useEffect(() => {
    setBugs([
      // {name: 'bug1', priority: 'high', description: 'No real data yet!'},
      // {name: 'bug2', priority: 'medium', description: 'Cannot add comments to bug yet!'},
      // {name: 'bug3', priority: 'low', description: 'Bootstrap not integrated!'}
    ])

    setProjects([
      // {id: 1, name: 'Bug Tracker App'},
      // {id: 2, name: 'Portfolio Site'},
      // {id: 3, name: 'Actor Website'},
    ])
  }, [])

  return (
    <>
      <Header />
      <Navigation name="Nathan" />

      {/* Bugs Mapping */}
      { bugs.length ? bugs.map(bug => {
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
      }

      {/* Projects Mapping */}
      { projects.length ? projects.map(project => {
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
      }

      {/* End Content */}

      {/* Testing Bootstrap */}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>

      
    </>
  )
}

export default App

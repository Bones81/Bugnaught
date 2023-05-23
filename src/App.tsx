import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header/header'
import Navigation from './Navigation/navigation'

interface BugState {
  name: string,
  priority: string,
  description: string
}

interface ProjectState {
  id: number,
  name: string
}

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
      {id: 1, name: 'Bug Tracker App'},
      {id: 2, name: 'Portfolio Site'},
      {id: 3, name: 'Actor Website'},
    ])
  }, [])

  return (
    <>
      <Header />
      <Navigation name="Nathan" />
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
    </>
  )
}

export default App

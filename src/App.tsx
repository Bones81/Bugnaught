import { useState } from 'react'
import './App.css'
import Header from './Header/header'
import InfoPanel from './InfoPanel/infopanel'
import Dashboard from './Dashboard/dashboard'
import Footer from './Footer/footer'
import Project from './interfaces/project'

const App: React.FunctionComponent = () => {
  const [view, setView] = useState("projects-view");

  const [projects, setProjects] = useState<Project[]>([])



  return (
    <>
      <Header setView={setView} />
      <div className="container-fluid dash-container mb-5">
        <div className="row justify-content-between align-items-center my-3 gx-3">
          <div className="col-xl-5 align-self-start mt-5">
            <InfoPanel projects={projects} setProjects={setProjects} setView={setView}/>
          </div>
          <div className="col-xl-6">
            <Dashboard projects={projects} setProjects={setProjects} setView={setView} view={view}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App

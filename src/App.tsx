import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header/header'
import InfoPanel from './InfoPanel/infopanel'
import Dashboard from './Dashboard/dashboard'
import Footer from './Footer/footer'
import Project from './interfaces/Project'

const App: React.FunctionComponent = () => {
  const [view, setView] = useState("projects-view");
  const [projects, setProjects] = useState<Project[]>([])

  const API_URL = 'http://localhost:3000/api/'

  const getProjects = async () => {
    const jsonProjects = await fetch(API_URL + 'projects')
      .then( res => res.json())
    console.log(jsonProjects)
    
  }

  useEffect(() => {
    getProjects()
  })

  return (
    <>
      <Header setView={setView} />
      <div className="container-fluid mb-5">
        <div className="row justify-content-around align-items-center my-3 gx-3">
          <div className="col-xl-3 align-self-start mt-5">
            <InfoPanel projects={projects} setProjects={setProjects} setView={setView}/>
          </div>
          <div className="col-xl-8">
            <Dashboard projects={projects} setProjects={setProjects} setView={setView} view={view}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App

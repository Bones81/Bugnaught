import { useState } from 'react'
import './App.css'
import Header from './Header/header'
import InfoPanel from './InfoPanel/infopanel'
import Dashboard from './Dashboard/dashboard'
import Footer from './Footer/footer'

const App: React.FunctionComponent = () => {
  const [view, setView] = useState("projects-view");

  return (
    <>
      <Header setView={setView}/>
      <div className="container-fluid dash-container">
        <div className="row justify-content-between align-items-center my-3 gx-3">
          <div className="col-md-2">
            <InfoPanel />
          </div>
          <div className="col-md-9">
            <Dashboard setView={setView} view={view}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App

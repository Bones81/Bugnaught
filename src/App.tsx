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
        <div className="row justify-content-between align-items-center my-3 gx-5">
          <div className="col-sm-2">
            <InfoPanel />
          </div>
          <div className="col-sm-9">
            <Dashboard view={view}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App

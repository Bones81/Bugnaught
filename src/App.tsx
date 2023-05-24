import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header/header'
import Navigation from './Navigation/navigation'
import BugState from './interfaces/bug'
import ProjectState from './interfaces/project'
import { Button } from 'react-bootstrap'
import Dashboard from './Dashboard/dashboard'

const App: React.FC = () => {


  return (
    <>
      <Header />
      <div className="container">
        <Navigation name="Nathan" />
        <Dashboard />
      </div>



      {/* Testing Bootstrap */}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>

      {/* End Bootstrap Testing */}
    </>
  )
}

export default App

import './App.css'
import Header from './Header/header'
import Navigation from './Navigation/navigation'
import { Button } from 'react-bootstrap'
import Dashboard from './Dashboard/dashboard'
import Footer from './Footer/footer'

const App: React.FC = () => {


  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-lg-2">
            <Navigation name="Nathan" />
          </div>
          <div className="col-sm-9 col-lg-10">
            <Dashboard />
          </div>
        </div>
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

      <Footer />
    </>
  )
}

export default App

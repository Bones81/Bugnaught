import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Modal, Button, Form, FormControl, FormLabel } from 'react-bootstrap'
import './infopanel.css'
import InfoPanelProps from '../interfaces/infopanelprops'

const InfoPanel: React.FunctionComponent<InfoPanelProps> = (props) => {
    const [showAddProject, setShowAddProject] = useState(false)

    const handleCloseAddProject = () => setShowAddProject(false)
    const handleShowAddProject = () => setShowAddProject(true)

    const [projectName, setProjectName] = useState("")

    const handleProjectNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setProjectName(e.target.value)
    }

    const handleAddProject = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newProj = {
            id: props.projects.length + 1,
            name: projectName,
            bugs: []
        }

        props.setProjects([...props.projects, newProj])
        console.log('This should add new project info to projects list');
        setProjectName("")
        setShowAddProject(false)
         
    }

    const handleViewUserBugs = (e: any) => {
        e.preventDefault()
        props.setView("user-bugs-view")
        console.log("Now viewing user bugs for " + user);
    }

    const handleGetSingleUserView = (e: any) => {
        e.preventDefault()
        props.setView("single-user-view")
        console.log("Now viewing single user view for " + user);
    }

    const [user, setUser] = useState('')
    const users = [
        'Nathan', 'Sujan', 'Jeff', 'Olivia'
    ]
    const projects = [...props.projects]

    useEffect(() => {
        setUser(users[Math.floor(Math.random()* users.length)]) // return random user for fun
    }, [])

    return (
        <>
            <div className='text-center'>

                {!user ?
                    <h3 className="display-5 my-5">Hello, Guest!</h3>
                    :
                    <h3 className="display-5 my-5">Hello, {user}!</h3>
                }
                <ul className="d-flex flex-xl-column align-items-center shadow bg-secondary m-3 p-3 border border-1 rounded">
                    <li className="btn btn-lg btn-link flex-fill text-light my-xl-5 px-xl-5 fs-3 text-decoration-none" onClick={handleShowAddProject}>Add Project</li>
                    <li className="btn btn-lg btn-link flex-fill text-light my-xl-5 px-xl-5 fs-3 text-decoration-none" onClick={handleViewUserBugs}>View My Bugs</li>
                    <li className="btn btn-lg btn-link flex-fill text-light my-xl-5 px-xl-5 fs-3 text-decoration-none" onClick={handleGetSingleUserView}>User Info</li>
                </ul>

                {/* Add Project  */}
                <Modal show={showAddProject} onHide={handleCloseAddProject}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormLabel></FormLabel>
                            <FormControl type="text" name="name" value={projectName} onChange={handleProjectNameChange} required></FormControl>
                            <Button variant="primary" className='my-3' type="submit" onClick={(e) => handleAddProject(e)}>
                                Add Project With These Details
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddProject}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    )
}

export default InfoPanel
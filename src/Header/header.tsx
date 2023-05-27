import './header.css'
import { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, ModalHeader, ModalFooter, ModalTitle, ModalBody, ModalDialog, Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'

interface HeaderProps {
    setView: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FunctionComponent<HeaderProps> = (props: any) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' })

    const handleClick = (e: any) => {
        e.preventDefault() 
        // console.log(e.target.id);
        props.setView(e.target.id)
    }

    const handleShow = () => {
        return(
            setShowModal(true)
        )
    }

    const handleClose = () => {
        return (
            setShowModal(false)
        )
    }

    const handleChange = (e: any) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const handleLogin = (e: any) => {
        e.preventDefault()
        console.log('Login request fired')
        handleClose()
    }

    return (
        <>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-light fs-1 py-3">
                            Bugnaught <span className="left-glove">🥊</span>🪲🥊
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" id="projects-view" onClick={handleClick}>Projects</Nav.Link>
                        <Nav.Link href="#" id="manage-roles-view" onClick={handleClick}>Manage Roles</Nav.Link>
                        <Nav.Link href="#" id="assign-devs-view" onClick={handleClick}>Assign Devs</Nav.Link>
                    </Nav>
                    <Button type="button" variant="outline-primary" onClick={handleShow} >Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={showModal} onHide={handleClose} centered scrollable>
                <ModalDialog>
                    <ModalHeader closeButton>
                    <ModalTitle>Login Form</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup className="mt-3">
                                <FormLabel>Username: </FormLabel>
                                <FormControl type="text" name="username" placeholder='BugHunter27' onChange={(e) => handleChange(e)}></FormControl>
                            </FormGroup>
                            <FormGroup className="mt-3">
                                <FormLabel>Password: </FormLabel>
                                <FormControl type="password" name="password" placeholder='********' onChange={(e) => handleChange(e)}></FormControl>
                            </FormGroup>
                            <FormText className="text-muted d-block">We will encrypt and never share your password.</FormText>
                            <Button className="my-3" variant="primary" onClick={handleLogin}>Login</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                    </ModalFooter>
                </ModalDialog>
            </Modal>
            
        </>
    )
}

export default Header
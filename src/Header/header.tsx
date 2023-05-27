import './header.css'
import { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, ModalHeader, ModalFooter, ModalTitle, ModalBody, ModalDialog, Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'

const Header = (props: any) => {
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur at labore, ipsa repellat vitae natus eveniet laudantium provident porro cumque necessitatibus facere error sit temporibus ipsam obcaecati excepturi, suscipit laboriosam. Deleniti animi architecto, asperiores, possimus hic tempore nulla amet ad dignissimos aut mollitia similique expedita iste quis consequatur corrupti vel at illo aliquid fugit. Velit, magnam. Reiciendis eum minus, quisquam quasi minima officia impedit inventore veniam magnam possimus dignissimos consequuntur aliquam enim, unde sint aspernatur totam in! Provident dolores eaque incidunt, cumque explicabo voluptatem porro cum dignissimos perferendis similique iure animi totam. Placeat quia ducimus earum fugiat expedita odio eaque autem eos aspernatur voluptatem, ea facere dolorum nam temporibus recusandae consectetur maxime voluptates debitis! Possimus accusantium, laborum error totam a quas porro eligendi explicabo, ut voluptate maxime debitis excepturi placeat voluptatum, est eaque veritatis iure nihil neque dicta. Animi id illo minima dicta recusandae perferendis. Rerum quia, molestiae illum sed, accusantium sint, adipisci nulla a veritatis nihil nam. Iure necessitatibus odit, blanditiis sed, nobis nostrum, quas facere aliquid enim ratione pariatur quos modi est perferendis hic quasi id! Temporibus illo ratione maiores adipisci similique! Doloremque alias harum provident doloribus soluta ab accusamus, facere non id facilis eveniet sed eos aliquam, quo delectus cum reprehenderit cumque. Id possimus perspiciatis tempora beatae ducimus temporibus natus ipsum ex numquam, reprehenderit harum animi porro voluptatem distinctio, nam at error accusamus nesciunt laborum. Ducimus, voluptates architecto odit, id exercitationem esse hic pariatur incidunt maxime totam, voluptatibus illum. Dolorem quam accusamus fugit voluptas ducimus voluptates.
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
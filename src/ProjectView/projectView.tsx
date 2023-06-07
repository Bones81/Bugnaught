import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Card, Table, Button, Modal, Form, FormLabel, FormControl } from 'react-bootstrap'
import "./projectView.css"
import Bug from '../interfaces/bug'

const ProjectView = (props: any) => {
    const [showAddBug, setShowAddBug] = useState(false)
    const [bugName, setBugName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("medium")

    const handleCloseAddBug = () => setShowAddBug(false)
    const handleShowAddBug = () => setShowAddBug(true)

    const handleAddNewBug = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newBug: Bug = {
            id: props.bugs.length + 1,
            name: bugName,
            pid: props.project.id,
            priority: priority,
            status: "open",
            description: description,
            developer: ""
        }
        console.log([...props.bugs, newBug]);
        

        props.setBugs([...props.bugs, newBug])
        console.log('This should add new bug and its data to bug list');
        // console.log('handleAddNewBug ran for newBug: ' + JSON.stringify(newBug))
        setBugName("")
        setDescription("")
        setPriority("")
        setShowAddBug(false)
    }

    const handleBugNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setBugName(e.target.value)
        console.log('handleBugNameChange ran');
    }

    const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const handleChangeToBugView = (e: React.MouseEvent<HTMLTableRowElement> | React.TouchEvent<HTMLTableRowElement>, bid: Number) => {
        e.preventDefault()
        props.setBugID(bid)
        props.setView("single-bug-view")
    }

    useEffect(() => {
        localStorage.setItem("BUGNAUGHT_BUGS", JSON.stringify(props.bugs))
    }, [props.bugs])

    return (
        <>
            <Card className='shadow container-fluid'>
                <Card.Header>
                    <Card.Title className='display-4 fw-bold text-center'>{props.project.name}</Card.Title>
                </Card.Header>
                <Card.Body className='x-overflow-scroll'>
                    <h3 className="text-center fw-bold my-3">Logged Bugs</h3>
                    <Table className="text-center shadow my-3" hover>
                        <thead>
                            <tr className='bg-secondary text-light'>
                                <th>Id</th>
                                <th className='text-start'>Bug Title</th>
                                <th>Status</th>
                                <th>Priority</th>
                                <th>Assigned To</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.project.bugs.length ? props.project.bugs.map( (bug: Bug) => {
                            return (
                            <tr key={bug.id} onClick={ (e) => handleChangeToBugView(e, bug.id) } className={`pointer ${bug.status === "closed" ? "text-muted line-through" : "text-dark"}`}>
                                <td>{bug.id}</td>
                                <td className='text-start'>{bug.name}</td>
                                <td>{bug.status.toUpperCase()}</td>
                                <td>{bug.priority}</td>
                                <td>{bug.developer || "None assigned" }</td>
                                <td>{bug.description}</td>
                            </tr>                                            
                        )})
                        :
                        <tr className="text-center"><td colSpan={4}>No Bugs Logged Yet For This Project</td></tr>
                        }
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-evenly text-center">
                        <Button variant="warning" className="btn-lg shadow" onClick={handleShowAddBug}><span className="">Add New Bug</span></Button>
                        <Button onClick={props.handleResetProjectsView} variant="primary" size='lg' className='shadow'>Back to All Projects</Button>
                        </div>
                </Card.Footer>
            </Card>

            {/* Add New Bug  */}
            <Modal show={showAddBug} onHide={handleCloseAddBug}>
                <Modal.Header closeButton>
                <Modal.Title>Add Bug for {props.project.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId='addBugForm.ControlInput1'>
                            <FormLabel>Bug Title</FormLabel>
                            <FormControl type="text" size='lg' name="name" value={bugName} onChange={handleBugNameChange} placeholder="Brief bug title: e.g. 'Data not updating properly'" required></FormControl>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="addBugForm.ControlTextArea1">
                            <Form.Label>Bug Description:</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" placeholder="Full bug description goes here." onChange={handleDescriptionChange}/>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='addBugForm.ControlSelect1'>
                            <Form.Label>Priority:</Form.Label>
                            <Form.Select size='lg' value="medium" name="priority" onChange={handlePriorityChange}>
                                <option value="" disabled>--Choose One--</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" className='my-3' type="submit" onClick={(e) => handleAddNewBug(e)}>
                            Add Bug With These Details
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddBug}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectView
import { Card, Table, Button } from 'react-bootstrap'
import "./projectView.css"
import Bug from '../interfaces/bug'

const ProjectView = (props: any) => {

    const handleChangeToBugView = (e: React.MouseEvent<HTMLTableRowElement> | React.TouchEvent<HTMLTableRowElement>, bid: Number) => {
        e.preventDefault()
        props.setBugID(bid)
        props.setView("single-bug-view")
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title className='display-4 text-center'>{props.project.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table className="text-center" hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th className='text-start'>Bug Title</th>
                            <th>Priority</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.project.bugs.length ? props.project.bugs.map( (bug: Bug) => {
                        return (
                        <tr key={bug.id} onClick={ (e) => handleChangeToBugView(e, bug.id) } className="pointer">
                            <td>{bug.id}</td>
                            <td className='text-start'>{bug.name}</td>
                            <td>{bug.priority}</td>
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
                    <Button variant="outline" className="disabled"><span className="line-through">Add New Bug</span></Button>
                    <Button onClick={props.handleResetProjectsView} variant="primary">Back to All Projects</Button>
                    </div>
            </Card.Footer>
        </Card>
    )
}

export default ProjectView
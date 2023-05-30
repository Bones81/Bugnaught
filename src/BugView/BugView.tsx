import { Card, Button } from 'react-bootstrap'
import "./BugView.css"
import Project from '../interfaces/project.ts'

const BugView = (props: any) => {

    const handleReturnToProjectView = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.setView("single-project-view")
    }


    return (
        <Card>
            <Card.Header>
                <Card.Title className='display-4 text-center'>{props.bug.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="bg-info rounded my-3 p-3">
                    <Card.Subtitle>BugID: {props.bug.id}</Card.Subtitle>
                    <Card.Subtitle>Project: {props.bug.pid}</Card.Subtitle>
                    <Card.Subtitle>Priority: {props.bug.priority}</Card.Subtitle>
                </div>
                <Card.Text>Description: {props.bug.description}</Card.Text>
                <Card.Text>(Attachment: Screenshot or Other Attachment Would Go Here)</Card.Text>

                <div className="container-fluid my-3 p-3 border border-info">
                    <ul className="comments-ul unstyled">
                        <li className="comment-li mx-3 p-3">
                            <div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <h4 className='d-inline'>Commenter Name</h4>
                                    <h6 className='d-inline'>Date/Time of Comment</h6>
                                </div>
                                <p>Comment Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit qui natus impedit dolores voluptates blanditiis, quam voluptatem nostrum rerum vel minus asperiores voluptatibus repudiandae amet delectus distinctio pariatur assumenda.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="d-flex justify-content-evenly text-center">
                    <Button variant="outline" className="disabled"><span className="line-through">Comment</span></Button>
                    <Button onClick={handleReturnToProjectView} variant="primary">Back to Project: { props.projects.find( (p:Project) => props.bug.pid === p.id).name }</Button>
                    </div>
            </Card.Footer>
        </Card>
    )
}

export default BugView
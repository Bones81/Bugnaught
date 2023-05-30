import { Card, Button, Row, Col } from 'react-bootstrap'
import "./BugView.css"
import Project from '../interfaces/project.ts'
import CommentType from '../interfaces/comment.ts'
import Comment from '../Comment/comment.tsx'

const BugView = (props: any) => {

    const comments: CommentType[] = [
        {id: 1, author: "Nathan", createdAt: new Date('June 17, 2019 13:24:00').toLocaleString(), bid: 1, pid: 1, content: "Needs dev assignment. Anyone want to take this one?"},
        {id: 2, author: "Sujan", createdAt: new Date('June 17, 2019 15:24:00').toLocaleString(), bid: 1, pid: 1, content: "I can take it"},
        {id: 3, author: "Jeff", createdAt: new Date('June 17, 2019 16:24:00').toLocaleString(), bid: 2, pid: 1, content: "Needs dev assignment. Anyone want to take this one?"},
        {id: 4, author: "Olivia", createdAt: new Date('June 17, 2019 16:44:00').toLocaleString(), bid: 2, pid: 1, content: "You sweet man. I can take it"},
        {id: 5, author: "Jeff", createdAt: new Date('June 20, 2019 13:24:00').toLocaleString(), bid: 3, pid: 1, content: "Hi everyone! Sorry to bother you all. But I need to assign a dev to this. Who wants it?"},
        {id: 6, author: "Sujan", createdAt: new Date('June 27, 2019 10:24:00').toLocaleString(), bid: 3, pid: 1, content: "By the Hammer of Thor, I shall take up this burden!"},
        {id: 7, author: "Nathan", createdAt: new Date('July 23, 2019 13:24:00').toLocaleString(), bid: 4, pid: 2, content: "Needs dev assignment. Anyone want to take this one? Or shall I just take it."},
        {id: 8, author: "Sujan", createdAt: new Date('July 29, 2019 23:24:00').toLocaleString(), bid: 4, pid: 2, content: "No worries, Edward. I'm on it."},
        {id: 9, author: "Nathan", createdAt: new Date('June 17, 2020 10:24:00').toLocaleString(), bid: 5, pid: 2, content: "Bad news, nobody. We have another bug in the system. I'll have to alert the Sunset Squad robots to its imminent demise."},
        {id: 10, author: "Sujan", createdAt: new Date('June 17, 2020 13:24:00').toLocaleString(), bid: 5, pid: 2, content: "I'm 40% Sunset Squad robot!"},
        {id: 11, author: "Nathan", createdAt: new Date('June 30, 2020 09:24:00').toLocaleString(), bid: 6, pid: 2, content: "Why do I seem to have all the bugs to assign? Here's another. Who wants it?"},
        {id: 12, author: "Sujan", createdAt: new Date('July 17, 2020 06:24:00').toLocaleString(), bid: 6, pid: 2, content: "Edward of the North, I, Edward of the West, shall take it."},
        {id: 13, author: "Nathan", createdAt: new Date('July 20, 2020 14:44:00').toLocaleString(), bid: 7, pid: 3, content: "Once more unto the breach!"},
        {id: 14, author: "Sujan", createdAt: new Date('August 15, 2020 14:44:00').toLocaleString(), bid: 7, pid: 3, content: "Edward of Asia, I, Edward of the Americas, shall take it!"},
        {id: 15, author: "Nathan", createdAt: new Date('August 17, 2020 23:14:00').toLocaleString(), bid: 8, pid: 3, content: "Medium importance, but could easily be considered high priority. Anyone free to handle it?"},
        {id: 16, author: "Jeff", createdAt: new Date('January 7, 2021 10:04:00').toLocaleString(), bid: 8, pid: 3, content: "I'm at the bodega getting a soft pretzel right now, but I'll get on it as soon as I get back from walking the dogs."},
        {id: 17, author: "Olivia", createdAt: new Date('January 18, 2021 18:52:21').toLocaleString(), bid: 9, pid: 3, content: "Not super important, but I could use one of you to handle this bug."},
        {id: 18, author: "Nathan", createdAt: new Date('April 5, 2021 22:34:12').toLocaleString(), bid: 9, pid: 3, content: "I suppose I have a few extra days to work on this."},
    ]

    const handleReturnToProjectView = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.setView("single-project-view")
    }

    return (
        <Card className='shadow'>
            <Card.Header className='bg-light text-dark'>
                <Card.Title className='display-4 fw-bolder text-center'>Bug: {props.bug.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="container bg-info rounded-pill my-3 shadow">
                    <Row className="justify-content-center align-items-center">
                        <Col className='p-3 text-center'><Card.Subtitle className='fs-3'>BugID: {props.bug.id}</Card.Subtitle></Col>
                        <Col className='p-3 text-center'><Card.Subtitle className='fs-3'>ProjectID: {props.bug.pid}</Card.Subtitle></Col>
                        <Col className='p-3 text-center'><Card.Subtitle className='fs-3'>Priority: {props.bug.priority}</Card.Subtitle></Col>
                    </Row>
                </div>
                <Card.Text className='fs-3 border border-3 px-5 py-3 my-5 shadow'><span className="text-primary fw-bold">Bug Description:</span> {props.bug.description}</Card.Text>
                <Card.Text className="text-muted text-center my-5">(Attachment: Screenshot or Other Attachment Would Go Here)</Card.Text>

                <div className="container-fluid my-3 p-3 border border-info rounded shadow-lg">
                    <h3 className="text-center fw-3">Comments</h3>
                    <ul className="comments-ul list-unstyled">
                        { comments.length ? comments.map( (comment: CommentType) => {
                            return comment.bid === props.bug.id && (
                            <>
                                <hr/>
                                <Comment key={comment.id} comment={comment}/>
                            </>
                            )
                        })
                        :
                            <h1 className='text-center'>No Comments Yet</h1>
                        }
                    </ul>
                </div>
            </Card.Body>
            <Card.Footer className='py-4'>
                <div className="d-flex justify-content-evenly text-center">
                    <Button variant="outline" className="disabled"><span className="line-through">Add Comment</span></Button>
                    <Button onClick={handleReturnToProjectView} variant="primary" size='lg'>Back to Project: { props.projects.find( (p:Project) => props.bug.pid === p.id).name }</Button>
                    </div>
            </Card.Footer>
        </Card>
    )
}

export default BugView
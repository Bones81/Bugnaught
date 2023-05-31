import { useState, useEffect } from 'react'
import { Card, Button, Row, Col, Form, FormControl } from 'react-bootstrap'
import "./BugView.css"
import Project from '../interfaces/project.ts'
import CommentType from '../interfaces/comment.ts'
import Comment from '../Comment/comment.tsx'

const BugView = (props: any) => {
    
    const mockComments: CommentType[] = [
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
        {id: 19, author: "Sujan", createdAt: new Date('April 5, 2022 22:34:12').toLocaleString(), bid: 3, pid: 1, content: "Should be fixed now."},
    ]

    // localStorage.removeItem("BUGNAUGHT_COMMENTS") // development use only when resetting of comments is needed
    // This two lines should set the initial comments array from localStorage, if it already exists; otherwise it will initialize comments with an empty array
    const initialComments: CommentType[] = localStorage.getItem("BUGNAUGHT_COMMENTS") && JSON.parse(localStorage.getItem("BUGNAUGHT_COMMENTS") || "[]") || mockComments
    const [comments, setComments] = useState<CommentType[]>(initialComments)

    const [commentText, setCommentText] = useState<string>('')

    const handleCommentTextChange = (e: any) => {
        setCommentText(e.target.value)
    }

    const handleReturnToProjectView = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.setView("single-project-view")
    }

    const handleAddComment = (e: any) => {
        e.preventDefault()

        const newComment = {
            id: comments.length + 1,
            author: "Logged in user name would go here",
            createdAt: new Date().toLocaleString(),
            bid: props.bug.id,
            pid: props.project.id,
            content: commentText
        }

        
        setComments([...comments, newComment])
        setCommentText('')

    }

    useEffect(() => { // update localStorage whenever comments array gets updated
        localStorage.setItem("BUGNAUGHT_COMMENTS", JSON.stringify(comments))
    }, [comments])

    return (
        <Card className='shadow'>
            <Card.Header className='bg-secondary text-light'>
                <Card.Title className='display-3 text-center fw-bold'>{props.project.name}</Card.Title>
            </Card.Header>
            <Card.Header className='bg-secondary text-light'>
                <Card.Subtitle className='display-5 fw-bolder text-center'>Bug Title: <span className={props.bug.status === "closed" ? "line-through" : ""}>{props.bug.name}</span></Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <div className="container bg-info rounded-pill mb-3 shadow">
                    <Row className="justify-content-center align-items-center">
                        <Col className='p-3 text-center'><Card.Subtitle className='fs-4'>BugID: {props.bug.id}</Card.Subtitle></Col>
                        {/* <Col className='p-3 text-center'><Card.Subtitle className='fs-4'>ProjectID: {props.bug.pid}</Card.Subtitle></Col> */}
                        <Col className='p-3 text-center'><Card.Subtitle className={`fs-4 rounded-pill p-2 ${props.bug.priority === 'high' ? "bg-danger" : props.bug.priority === 'medium' ? "bg-warning" : "bg-teal"}`}>Priority: {props.bug.priority}</Card.Subtitle></Col>
                    </Row>
                </div>
                <Card.Text className={`fs-1 p-3 text-center ${
                    props.bug.status === "open" ? "bg-primary" : 
                    props.bug.status === "assigned" ? "bg-warning" : 
                    props.bug.status === "in-progress" ? "bg-teal" : 
                    "bg-success"}`}
                >STATUS: {props.bug.status.toUpperCase()} {props.bug.status === "closed" ? "🏁" : null}</Card.Text>
                <h4 className="mt-2 p-2 text-center">Assigned to: {props.bug.developer}</h4>
                <Card.Text className='fs-3 border border-3 px-5 py-3 my-3 shadow'><span className="text-primary fw-bold">Bug Description:</span> {props.bug.description}</Card.Text>
                <Card.Text className="text-muted text-center my-3">(Attachment: Screenshot or Other Attachment Would Go Here)</Card.Text>

                <div className="container-fluid my-3 p-3 border border-info rounded shadow-lg">
                    <h3 className="text-center fw-3">Comments</h3>
                    <ul className="comments-ul list-unstyled">
                        { comments.length ? comments.map( (comment: CommentType) => {
                            return comment.bid === props.bug.id && (
                            <div key={comment.id}>
                                <hr/>
                                <Comment comment={comment}/>
                            </div>
                            )
                        }).reverse() // shows comments in "most recent" order
                        :
                            <h1 className='text-center'>No Comments Yet</h1>
                        }
                    </ul>
                </div>
                <Form onSubmit={handleAddComment} className='d-flex'>
                    <FormControl as="textarea" onChange={handleCommentTextChange} name="comment-content" id="comment-content" placeholder='Enter your comment here' value={commentText}></FormControl>
                    <Button type="submit" variant="warning" className="btn btn-lg m-3 outline border border-2" >Add Comment</Button>
                </Form>
            </Card.Body>
            <Card.Footer className='py-4'>
                <div className="d-flex justify-content-evenly text-center">
                    <Button onClick={handleReturnToProjectView} variant="primary" size='lg'>Back to Project: { props.projects.find( (p:Project) => props.bug.pid === p.id).name }</Button>
                    </div>
            </Card.Footer>
        </Card>
    )
}

export default BugView
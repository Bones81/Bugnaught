const Comment = (props: any) => {
    return (
        <li className="comment-li mx-3 p-3">
            <div>
                <div className="d-flex justify-content-between align-items-end">
                    <h4 className='d-inline'>{props.comment.author}</h4>
                    <h6 className='d-inline'>{props.comment.created_at}</h6>
                </div>
                <p>{props.comment.content}</p>
            </div>
        </li>
    )
}

export default Comment
import CommentComponentProps from "../interfaces/CommentComponentProps"

const Comment = ({ comment }: CommentComponentProps) => {
    return (
        <li className="comment-li mx-3 p-3">
            <div>
                <div className="d-flex justify-content-between align-items-end">
                    <h4 className='d-inline'>{comment.author.first_name + " " + comment.author.last_name}</h4>
                    <h6 className='d-inline'>{comment.created_at}</h6>
                </div>
                <p>{comment.content}</p>
            </div>
        </li>
    )
}

export default Comment
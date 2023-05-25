import { useState, useEffect } from 'react'
import './navigation.css'

const Navigation = (props: any) => {
    const [user, setUser] = useState('')
    
    useEffect(() => {
        setUser(props.name)
    }, [])

    return (
        <>
            <nav className="p-3">
            {!user ? 
                <h3 className="lead my-5">Hello, Guest!</h3> :
                <h3 className="lead my-5">Hello, {user}!</h3>
            }
                <ul className="p-0 list-unstyled my-5">
                    <li><a href="#" className="link">Projects</a></li>
                    <li><a href="#" className="link">Manage Roles</a></li>
                    <li><a href="#" className="link">Assign</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation
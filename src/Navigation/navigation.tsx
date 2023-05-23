import { useState, useEffect } from 'react'
import './navigation.css'

const Navigation = (props: any) => {
    const [user, setUser] = useState('')
    
    useEffect(() => {
        setUser(props.name)
    }, [])

    return (
        <>
            <nav>
            {!user ? 
                <h3>Hello, Guest!</h3> :
                <h3>Hello, {user}!</h3>
            }
                <ul>
                    <li>Projects</li>
                    <li>Manage Roles</li>
                    <li>Assign</li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation
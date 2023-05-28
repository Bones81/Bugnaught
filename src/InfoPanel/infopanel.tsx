import { useState, useEffect } from 'react'
import './infopanel.css'

const InfoPanel: React.FunctionComponent = () => {
    const [user, setUser] = useState('')
    const users = [
        'Nathan', 'Sujan', 'Jeff', 'Olivia'
    ]

    useEffect(() => {
        setUser(users[Math.floor(Math.random()* users.length)]) // return random user for fun
    }, [])

    return (
        <>
            <div className='text-center'>

                        {!user ?
                            <h3 className="display-5 my-5">Hello, Guest!</h3>
                            :
                            <h3 className="display-5 my-5">Hello, {user}!</h3>
                        }

            </div>
        </>
    )
}

export default InfoPanel
import { useState, useEffect } from 'react'
import './infopanel.css'
import { Container, Row, Col } from 'react-bootstrap'

const InfoPanel = (props: any) => {
    const [user, setUser] = useState('')


    
    useEffect(() => {
        setUser(props.name)
    }, [])

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        {!user ?
                            <h3 className="display-5 my-5">Hello, Guest!</h3>
                            :
                            <h3 className="display-5 my-5">Hello, {user}!</h3>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InfoPanel
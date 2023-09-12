import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [formInfo, setFormInfo] = useState({})
    const navigate = useNavigate()

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormInfo(values => ({...values, [name]:value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert(`Message sent.  Message Info: [Name] - ${formInfo.name}, [Email] - ${formInfo.email}, [Message] - ${formInfo.message}.  Thank you for your message! :)`)
        // Add functionality to send message to email & form validation.
        navigate('/')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="John" 
                        name='name'
                        value={formInfo.name}
                        onChange={handleChange}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        name='email'
                        value={formInfo.email}
                        onChange={handleChange}
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name='message'
                        value={formInfo.message}
                        onChange={handleChange}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

const PostForm = (props) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value);
    }

    const onChangeBody = (e) => {
        console.log(e.target.value)
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(title);
        console.log(body);
        e.preventDefault();
    }

    return (
        <div className="formCenter">
            <Form onSubmit={handleSubmit}>
                <h1 style={{textAlign: "center", color: "white", fontSize: 30}}>Create a new Post</h1>
                <br />
                <Form.Group>
                    <Form.Control size="sg" type="text" placeholder="Title" onChange={onChangeTitle} />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" placeholder="Body" onChange={onChangeBody} />
                </Form.Group>
                <Button variant="primary" type="submit" block>Create</Button>
            </Form>
        </div>
    );
}

export default PostForm;